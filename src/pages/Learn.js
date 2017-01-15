import React, { Component } from 'react';
import './Learn.css';
import {
  Flex,
  Box
 } from 'reflexbox'


export default class Learn extends Component {
  render() {
    return (

      <Flex wrap>
      <Box
      col={12}
      lg={6}
      md={6}
      sm={12}
      >
      Box
      </Box>
      <Box
      col={12}
      lg={6}
      md={6}
      sm={12}
      >
      Box
      </Box>
      </Flex>

      // <div className="learn">
      //   <div className="menu">
      //     <div className="Logo">
      //       <h1>Logo</h1>
      //     </div>
      //     <div className="lesson-title">
      //       <h3>lesson title</h3>
      //     </div>
      //   </div>
      //   <div className="content">
      //     <h1>Content</h1>
      //   </div>
      // </div>
    );
  }
}
