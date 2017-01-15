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
            Left
          </div>
        </Box>
        <Box
        col={12}
        lg={6}
        md={6}
        sm={12}
        >
          <div className="card" id="right-card">
            Right
          </div>
        </Box>
        </Flex>
        </div>

      </div>
    );
  }
}
