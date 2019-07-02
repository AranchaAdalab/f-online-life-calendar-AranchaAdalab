import React from "react";
import "../home/Home.scss";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    const { getReset, getCalendar } = this.props;
    return (
      <div className="home">
        <Link to={"/editor"}>
          <button className="button__home" onClick={getReset}>
            +
          </button>
        </Link>
        <ul className="faces">
          {getCalendar.map((item, index) => {
            if (item.mood === "happy") {
              return (
                <li key={index}>
                  <div className="face__container">
                    <div className="smile">:)</div>
                    <div className="date__container">{item.date}</div>
                    <div className="message__container">{item.message}</div>
                  </div>
                </li>
              );
            } else {
              return (
                <li key={index}>
                  <div className="face__container">
                    <div className="no__smile">:(</div>
                    <div className="date__container">{item.date}</div>
                  </div>
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  }
}

export default Home;
