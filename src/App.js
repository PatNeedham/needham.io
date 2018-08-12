import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    infoBoxStyle: {
      marginLeft: 20,
      marginTop: 20,
      padding: 10,
      backgroundColor: 'beige',
      display: 'flex',
      flexDirection: 'column',
      maxWidth: 250,
      visibility: 'hidden',
      opacity: 0,
      transition: 'visibility 0s, opacity 1s linear'
    }
  }
  componentDidMount() {
    window.VANTA.DOTS({
      el: "#vanta-element",
      size: 7.00,
      spacing: 24.00,
      backgroundAlpha: 1.00,
      height: '100%'
    })
    setTimeout(() => {
      this.setState({
        infoBoxStyle: {
          ...this.state.infoBoxStyle,
          visibility: 'visible',
          opacity: 1
        }
      })
    }, 623)
  }
  render() {
    const rootStyle = {
      height: '100%',
      width: '100%',
      minHeight: window.innerHeight,
      display: 'flex',
      flexDirection: 'column'
    }
    return (
      <div id="vanta-element" style={rootStyle}>
        <div style={this.state.infoBoxStyle}>
          <h2>Needham.io</h2>
          <h4>By Pat Needham</h4>
        </div>
      </div>
    );
  }
}

export default App;
