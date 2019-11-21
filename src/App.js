import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Keyboard from "./components/Keyboard";

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

  render() {
    return (
      <div className="App">
        <header>
          <h1>Beat Colorizer</h1>
        </header>
        <Keyboard sound_kits={this.state.soundkits} />
      </div>
    );
  }
}

export default App;

/* <audio ref="audio_tag" src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/606%20Basic/440[kb]606-cymbal2.wav.mp3" controls autoPlay /> */
