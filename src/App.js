import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Keyboard from "./components/Keyboard";
import Title from "./components/Title";
import AudioPlayer from "./components/AudioPlayer";
import Home from "./components/Home";
import Logo from "./components/Logo";

const API = "http://localhost:3000";

class App extends React.Component {
  state = {
    soundkits: [],
    beats: []
  };

  componentDidMount() {
    fetch(`${API}/sound_kits`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          soundkits: data.sound_kits
        });
      });
    fetch(`${API}/beats`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          beats: data.beats
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
      <Router>
        <div className="App">
          <Route path="/">
            <Logo />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/keyboard">
            <Title />
            {/* <div className="animations">Animations Container</div>
        <div className="recording">Recording</div> */}
            <Keyboard
              sound_kits={this.state.soundkits}
              titleColor={this.state.color}
              handleClick={this.handleClick}
            />
            <AudioPlayer beats={this.state.beats} />
            {/* <div className="beat-mapping">Beat Map</div> */}
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;

/* <audio ref="audio_tag" src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/606%20Basic/440[kb]606-cymbal2.wav.mp3" controls autoPlay /> */
