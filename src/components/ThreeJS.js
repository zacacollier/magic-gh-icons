import React, { Component } from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types'
import * as Three from 'three';
import React3 from 'react-three-renderer';
import ThreeLines from './ThreeLines'

export default class ThreeJS extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      timer: Date.now() * 0.00001,
      cubeRotation: new Three.Euler(),
      position: new Three.Vector3(0, 0, 50),
      url: (user) => `https://api.github.com/users/${user}/events`,
      commits: [],
    }
    this.cameraPosition = new Three.Vector3(0, 0, 5);
    this.directionalLightPosition = new Three.Vector3(0, 1, 0);
    this.scenePosition = new Three.Vector3(0, 0, 0);
    // frame-by-frame callback
    this._onAnimate = () => {
      this.setState({
        cubeRotation: new Three.Euler(
          this.state.cubeRotation.x + 0.001,
          this.state.cubeRotation.y + 0.001,
        )
      })
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
  render(props) {
    const {
      timer,
      position,
      cubeRotation,
    } = this.state
    const width  = window.innerWidth;
    const height = window.innerHeight;
    const objectRotation = new Three.Euler(
      timer * 5,
      timer * 2.5,
      0
    )
    return (
      <div>
        { this.state.commits.length ? <ThreeLines commits={this.state.commits} /> : <div></div> }
        <React3
          mainCamera="camera"
          width={width}
          height={height}
          onAnimate={this._onAnimate}
        >
          <scene>
            <perspectiveCamera
              name="camera"
              fov={70}
              aspect={width / height}
              near={1}
              far={10000}
              position={this.cameraPosition}
            />
            <mesh
              rotation={cubeRotation}
            >
              <sphereGeometry
                radius={5}
              />
              <meshNormalMaterial
                color={'#888'}
                wireframe={true}
              />
            </mesh>
          </scene>
        </React3>
      </div>
    )
  }
}
