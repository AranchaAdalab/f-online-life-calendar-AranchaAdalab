import React from "react";
import "./App.scss";
import Home from "../home/Home";
import Editor from "../editor/Editor";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/editor" render={() => <Editor />} />
        </Switch>
      </div>
    );
  }
}

export default App;
