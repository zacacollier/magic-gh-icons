import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import * as Three from 'three';
import React3 from 'react-three-renderer';

export default class ThreeJS extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      timer: Date.now() * 0.00001,
      cubeRotation: new Three.Euler(),
    }
    this.cameraPosition = new Three.Vector3(0, 0, 5)
    // frame-by-frame callback
    this._onAnimate = () => {
      this.setState({
        cubeRotation: new Three.Euler(
          this.state.cubeRotation.x + 0.1,
          this.state.cubeRotation.y + 0.1,
        )
      })
    }
  }

  render() {
    const width  = window.innerWidth;
    const height = window.innerHeight;
    return (
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
            near={0.1}
            far={1000}
            position={this.cameraPosition}
          />
          <mesh
            rotation={this.state.cubeRotation}
          >
            <boxGeometry
              width={1}
              height={1}
              depth={1}
            />
            <meshBasicMaterial
              color={'#999'}
            />
          </mesh>
        </scene>
      </React3>
    )
  }
}
