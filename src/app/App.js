import React from "react";
import "./App.scss";
import Home from "../home/Home";
import Editor from "../editor/Editor";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calendar: [],
      newDate: "",
      newMood: "",
      newMessage: ""
    };
    this.getDate = this.getDate.bind(this);
    this.getMood = this.getMood.bind(this);
    this.getMessage = this.getMessage.bind(this);
    this.getFace = this.getFace.bind(this);
    this.getReset = this.getReset.bind(this);
    this.saveInformation = this.saveInformation.bind(this);
  }

  componentDidMount() {
    const savedInformation = JSON.parse(localStorage.getItem("calendarArr"));
    const savedCalendar = savedInformation ? savedInformation : [];
    this.setState({ calendar: savedCalendar });
  }

  componentDidUpdate() {
    this.saveInformation()
  }

  getDate(event) {
    const dateValue = event.currentTarget.value;
    this.setState({
      newDate: dateValue
    });
  }

  getMood(event) {
    const moodValue = event.currentTarget.value;
    this.setState({
      newMood: moodValue
    });
  }

  getMessage(event) {
    const messageValue = event.currentTarget.value;
    this.setState({
      newMessage: messageValue
    });
  }

  getFace() {
    const newFace = {
      date: this.state.newDate,
      mood: this.state.newMood,
      message: this.state.newMessage
    };
    this.setState(prevState => ({
      calendar: [...prevState.calendar, newFace]
    }));
  }

  saveInformation() {
    localStorage.setItem('calendarArr', JSON.stringify(this.state.calendar));
  }

  getReset() {
    this.setState({
      newDate: "",
      newMood: "",
      newMessage: ""
    });
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                getReset={this.getReset}
                getCalendar={this.state.calendar}
              />
            )}
          />
          <Route
            path="/editor"
            render={() => (
              <Editor
                getMood={this.getMood}
                getDate={this.getDate}
                getMessage={this.getMessage}
                mood={this.state.newMood}
                getFace={this.getFace}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
