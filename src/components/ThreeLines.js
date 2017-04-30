import React, { Component } from 'react';
import * as Three from 'three';
import React3 from 'react-three-renderer';

function drawLines(commits) {
  console.log(commits)
}

const ThreeLines = ({ commits }) => {
  return (
    <div>
    { console.log(commits) }
    </div>
  )
}

export default ThreeLines;
