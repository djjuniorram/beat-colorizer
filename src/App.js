import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Keyboard from "./components/Keyboard";
import Title from "./components/Title";
// import Metronome from "./components/Metronome";

const API = "http://localhost:3000";

class App extends React.Component {
  state = {
    soundkits: []
  };

  componentDidMount() {
    fetch(`${API}/sound_kits`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          soundkits: data.sound_kits
        });
      });
  }

  handleClick = color => {
    this.setState({
      color: color
    });
  };

  render() {
    return (
      <div className="App">
        <Title />
        {/* <div className="animations">Animations Container</div>
        <div className="recording">Recording</div> */}
        {/* <Metronome /> */}
        <Keyboard
          sound_kits={this.state.soundkits}
          titleColor={this.state.color}
          handleClick={this.handleClick}
        />
        {/* <div className="beat-mapping">Beat Map</div> */}
      </div>
    );
  }
}

export default App;

/* <audio ref="audio_tag" src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/606%20Basic/440[kb]606-cymbal2.wav.mp3" controls autoPlay /> */
