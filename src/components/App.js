import React, { Component } from 'react';
import axios from 'axios';

import ThreeJS from './ThreeJS';
import GitHubStats from './GitHubStats';
import '../styles/App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      commits: [],
      url: (user) => `https://api.github.com/users/${user}/events`,
    }
  }
  componentWillMount() {
    axios.get(this.state.url('zacacollier'))
      .then(res => this.setState(
        {
          ...this.state,
          commits:
            [
              ...res.data
                .filter(event => event.payload.commits)
                .map(event => event),
            ]
          }
        )
      )
      .catch(err => console.error(err))
  }
  render() {
        // <GitHubStats
        //   commits={this.state.commits}
        //   urlStub={this.state.url}
        // />
    return (
        <ThreeJS
          commits={this.state.commits}
        />
    )
  }
}
