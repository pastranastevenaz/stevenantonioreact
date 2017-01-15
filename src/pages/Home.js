import React, { Component } from 'react';
import './Home.css';
import {
  Flex,
  Box
 } from 'reflexbox'


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
        <Flex wrap>
        <Box
        col={12}
        lg={6}
        md={6}
        sm={12}
        >
          <div className="card" id="left-card">
            <div className="card-pic" id="left-card-pic">
              Pic
            </div>
            <div className="card-text" id="left-card-text">
              Duis mattis ipsum urna, ac pretium leo accumsan non
            </div>
          </div>
        </Box>
        <Box
        col={12}
        lg={6}
        md={6}
        sm={12}
        >
          <div className="card" id="right-card">
            <div className="card-pic" id="right-card-pic">
              Pic
            </div>
            <div className="card-text" id="right-card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
          </div>
        </Box>
        </Flex>
        </div>

      </div>
    );
  }
}
