import React from "react";
import "../home/Home.scss";
import {Link} from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Link to={'/editor'}>
        <button className="button__home">+</button>
        </Link>
        <ul className="faces">
          <li>
            <div className="smile">:)</div>
          </li>
          <li>
            <div className="no__smile">:(</div>
          </li>
          <li>
            <div className="smile">:)</div>
          </li>
          <li>
            <div className="no__smile">:(</div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
