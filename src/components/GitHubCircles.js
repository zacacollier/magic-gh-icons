import React from 'react';
import FontAwesome from 'react-fontawesome';

import { getRgbHex } from '../constants/getHex';
import * as H        from '../constants/helpers';

const { getRandom, hex, join, log, px, slice, split, toString } = H;

const GitHubCircles = ({ commit, index, iconMargin}) => (
    <FontAwesome
      name="github"
      size="4x"
      spin
      stacked
      style={{
        color: getRgbHex(join(slice(split(commit.payload.before), 2, 8))),
        boxShadow: `${px(getRandom())} ${px(getRandom(1000))} ${px(getRandom(100))} ${getRgbHex(join(slice(split(commit.payload.before), 2, 8)))}`,
        height: `${slice(toString(commit.id), 0, 2)}px`,
        width: `${slice(toString(commit.id), 0, 2)}px`,
        margin: iconMargin || px(getRandom()),
        // borderRadius: `${getRgbHex(commit.id).slice(4)}px`,
        // display: 'inline-block',
      }}
    >
    </FontAwesome>
)

export default GitHubCircles;
