import React, { Component } from 'react';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="jumbotron">
          <div id="jumboName">
            <h2 id="jumboNameText">Steven Antonio</h2>
          </div>
          <div id="jumboTitle">
            <h2 id="jumboTitleText">Maker elegant software solutions</h2>
          </div>
          <div id="jumboButton">
            <button className="largeWhiteButton">See my work</button>
          </div>
        </div>

        <div className="cards">
          <div className="row" id="cardRow">
            <div className="col-md-6 rowCard" id="leftCard">
              <h1>Left</h1>
            </div>
            <div className="col-md-6 rowCard" id="rightCard">
              <h1>Right</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
