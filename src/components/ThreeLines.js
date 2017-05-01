import React, { Component } from 'react';
import axios from 'axios';
import * as Three from 'three';
import { ghData } from '../constants/ghData.js'
import React3 from 'react-three-renderer';


class ThreeLines extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = { events: ghData }
  }
  fetchRepos = (commits) => {
    return commits.map(commit => {
      axios.get(commit.repo.url)
        .then(res => this.setState(
          {
          ...this.state,
          events: [ ...this.state.events, res.data ]
          }
        )
      )
      .catch(err => console.error(err))
    })
  }

  drawLines = (commits) => {
    return commits.events.map(commit => {
      console.log(commit)
    })
  }
  render(props) {
    const { commits } = this.props
    return (
      <div>
      {
        this.drawLines(this.state.events)
        // commits ? this.fetchRepos(commits) : <span>Loading...</span> 
        // commits ? this.drawLines(this.state.events) : <span>Loading...</span>
      }
      </div>
    )
  }
}

export default ThreeLines;
