import React from "react";
import "./App.scss";
import Home from "../home/Home";
import Editor from "../editor/Editor";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mood: ''
    }
    this.getHappy = this.getHappy.bind(this);
  }

  getHappy(event) {
    const selectValue = event.currentTarget.value;
    console.log(selectValue);
    this.setState ({
      mood: selectValue
    })
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/editor" render={() => <Editor getHappy={this.getHappy} getMood={this.state.mood}/>} />
        </Switch>
      </div>
    );
  }
}

export default App;
