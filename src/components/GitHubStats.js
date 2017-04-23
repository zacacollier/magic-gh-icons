import React from 'react';
import axios from 'axios';
import GitHubCircles from './GitHubCircles';

const GitHubStats = ({
  commits
  }) => (
    <ul style={{ height: '500px', width: '500px'}}>
    {
      commits.map((commit, index) => (
        <GitHubCircles
          commit={commit}
          key={index}
        />
        // axios
        //   .get(commit.url)
        //   .then(res => console.log(res.data.stats))
        //   .catch(err => console.info(err))
        )
       )
    }
    </ul>
)

export default GitHubStats;
