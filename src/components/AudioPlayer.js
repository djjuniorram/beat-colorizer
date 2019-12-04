import React from "react";
import AudioAnimation from "./AudioAnimation";
import DrumLoop from "../assets/beats/82DrumLoop.mp3";
import HipHopVanilla from "../assets/beats/84HipHopVanilla.mp3";
import KickAndHat from "../assets/beats/85KickAndHat.mp3";
import TablaAndDeepKick from "../assets/beats/90TablaAndDeepKicks.mp3";
import FunkySharp from "../assets/beats/92FunkySharp.mp3";
import RagaGuitarBass from "../assets/beats/92RagaGuitarBass.mp3";
import TwoTablas from "../assets/beats/94TwoTablas.mp3";
import BeatBox from "../assets/beats/103BeatBox.mp3";
import CongaFunk from "../assets/beats/111CongaFunk.mp3";
import Shackup from "../assets/beats/112Shackup.mp3";
import SillyBongo from "../assets/beats/116SillyBongo.mp3";
import Timbale from "../assets/beats/121Timbale.mp3";
import BabyDee from "../assets/beats/123BabyDee.mp3";
import ElectricShushySnare from "../assets/beats/132ElectricShushySnare.mp3";
import BadElectro from "../assets/beats/134BadElectro.mp3";
import DarkEchoBass from "../assets/beats/141DarkEchoBass.mp3";
import FunkyDrummer from "../assets/beats/Funky Drummer .mp3";

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      currentBeat: "select",
      speed: 0,
      color: "white",
      cursor: "grab"
    };
    this.audio1 = new Audio(DrumLoop);
    this.audio2 = new Audio(HipHopVanilla);
    this.audio3 = new Audio(KickAndHat);
    this.audio4 = new Audio(TablaAndDeepKick);
    this.audio5 = new Audio(FunkySharp);
    this.audio6 = new Audio(RagaGuitarBass);
    this.audio7 = new Audio(TwoTablas);
    this.audio8 = new Audio(BeatBox);
    this.audio9 = new Audio(CongaFunk);
    this.audio10 = new Audio(Shackup);
    this.audio11 = new Audio(SillyBongo);
    this.audio12 = new Audio(Timbale);
    this.audio13 = new Audio(BabyDee);
    this.audio14 = new Audio(ElectricShushySnare);
    this.audio15 = new Audio(BadElectro);
    this.audio16 = new Audio(DarkEchoBass);
    this.audio17 = new Audio(FunkyDrummer);
    this.audio = new Audio(
      "https://sampleswap.com/samples-ghost/DRUM%20LOOPS%20and%20BREAKS/Scratching%20and%20Turntablism/48[kb]basic-scratch.aif.mp3"
    );
    this.handleKey = this.handleKey.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKey, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKey, false);
  }

  findBeat = () => {
    console.log(this.state.currentBeat);
    if (this.state.currentBeat === "82-bpm drums") {
      return this.audio1;
    } else if (this.state.currentBeat === "84-bpm hip hop") {
      return this.audio2;
    } else if (this.state.currentBeat === "85-bpm kick and hat") {
      return this.audio3;
    } else if (this.state.currentBeat === "90-bpm tabla kick") {
      return this.audio4;
    } else if (this.state.currentBeat === "92-bpm funky") {
      return this.audio5;
    } else if (this.state.currentBeat === "92-bpm bass guitar") {
      return this.audio6;
    } else if (this.state.currentBeat === "94-bpm two tablas") {
      return this.audio7;
    } else if (this.state.currentBeat === "103-bpm beat box") {
      return this.audio8;
    } else if (this.state.currentBeat === "111-bpm conga funk") {
      return this.audio9;
    } else if (this.state.currentBeat === "112-bpm shackup") {
      return this.audio10;
    } else if (this.state.currentBeat === "116-bpm silly bongo") {
      return this.audio11;
    } else if (this.state.currentBeat === "121-bpm timbale") {
      return this.audio12;
    } else if (this.state.currentBeat === "123-bpm babydee") {
      return this.audio13;
    } else if (this.state.currentBeat === "132-bpm electric snare") {
      return this.audio14;
    } else if (this.state.currentBeat === "134-bpm electro") {
      return this.audio15;
    } else if (this.state.currentBeat === "141-bpm dark echo bass") {
      return this.audio16;
    } else if (this.state.currentBeat === "funky drummer") {
      return this.audio17;
    } else {
      return false;
    }
  };

  handleKey = event => {
    switch (event.key) {
      case "1":
        this.setState({
          color: "rgb(0, 115, 255)"
        });
        break;
      case "2":
        this.setState({
          color: "rgb(45, 157, 255)"
        });
        break;
      case "3":
        this.setState({
          color: "rgb(90, 197, 255)"
        });
        break;
      case "4":
        this.setState({
          color: "rgb(43, 230, 255)"
        });
        break;
      case "5":
        this.setState({
          color: "rgb(161, 244, 255)"
        });
        break;
      case "6":
        this.setState({
          color: "rgb(161, 244, 255)"
        });
        break;
      case "7":
        this.setState({
          color: "rgb(43, 230, 255)"
        });
        break;
      case "8":
        this.setState({
          color: "rgb(90, 197, 255)"
        });
        break;
      case "9":
        this.setState({
          color: "rgb(45, 157, 255)"
        });
        break;
      case "0":
        this.setState({
          color: "rgb(0, 115, 255)"
        });
        break;
      case "q":
        this.setState({
          color: "rgb(97, 152, 97)"
        });
        break;
      case "w":
        this.setState({
          color: "rgb(102, 201, 122)"
        });
        break;
      case "e":
        this.setState({
          color: "rgb(153, 220, 166)"
        });
        break;
      case "r":
        this.setState({
          color: "rgb(204, 252, 219)"
        });
        break;
      case "t":
        this.setState({
          color: "rgb(226, 254, 235)"
        });
        break;
      case "y":
        this.setState({
          color: "rgb(226, 254, 235)"
        });
        break;
      case "u":
        this.setState({
          color: "rgb(204, 252, 219)"
        });
        break;
      case "i":
        this.setState({
          color: "rgb(153, 220, 166)"
        });
        break;
      case "o":
        this.setState({
          color: "rgb(102, 201, 122)"
        });
        break;
      case "p":
        this.setState({
          color: "rgb(97, 152, 97)"
        });
        break;
      case "a":
        this.setState({
          color: "rgb(191, 191, 114)"
        });
        break;
      case "s":
        this.setState({
          color: "rgb(223, 223, 111)"
        });
        break;
      case "d":
        this.setState({
          color: "rgb(237, 237, 142)"
        });
        break;
      case "f":
        this.setState({
          color: "rgb(255, 255, 183)"
        });
        break;
      case "g":
        this.setState({
          color: "rgb(255, 255, 225)"
        });
        break;
      case "h":
        this.setState({
          color: "rgb(255, 255, 183)"
        });
        break;
      case "j":
        this.setState({
          color: "rgb(237, 237, 142)"
        });
        break;
      case "k":
        this.setState({
          color: "rgb(223, 223, 111)"
        });
        break;
      case "l":
        this.setState({
          color: "rgb(191, 191, 114)"
        });
        break;
      case "z":
        this.setState({
          color: "rgb(203, 115, 130)"
        });
        break;
      case "x":
        this.setState({
          color: "rgb(225, 144, 158)"
        });
        break;
      case "c":
        this.setState({
          color: "rgb(249, 188, 198)"
        });
        break;
      case "v":
        this.setState({
          color: "rgb(255, 217, 223)"
        });
        break;
      case "b":
        this.setState({
          color: "rgb(249, 188, 198)"
        });
        break;
      case "n":
        this.setState({
          color: "rgb(225, 144, 158)"
        });
        break;
      case "m":
        this.setState({
          color: "rgb(203, 115, 130)"
        });
        break;
      default:
        console.log("nothing");
    }
  };

  startStop = beat => {
    // this.audio = new Audio(kits[beat.source]);
    if (this.state.playing) {
      if (this.findBeat() !== false) {
        this.findBeat().pause();
      }
      this.setState({
        playing: false,
        speed: 0
      });
    } else {
      if (this.findBeat() !== false) {
        this.findBeat().play();
        this.findBeat().loop = true;
      }
      this.setState({
        playing: true,
        speed: 3
      });
    }
  };

  stopAudio = () => {
    if (this.findBeat() !== false) {
      this.findBeat().pause();
      this.findBeat().currentTime = 0;
    }
    this.setState({
      playing: false,
      speed: 0
    });
  };

  beatChange = event => {
    console.log("event", event.target.id);
    if (this.state.playing) {
      this.findBeat().pause();
      this.setState({
        playing: false,
        speed: 0
      });
    }
    this.setState({
      currentBeat: event.target.value
    });
  };

  recordScratch = () => {
    if (this.findBeat() !== false) {
      this.findBeat().pause();
      this.audio.currentTime = 0;
      this.audio.play();
    }
    this.setState({
      playing: false,
      speed: 0,
      cursor: "grabbing"
    });
  };

  recordLetGo = () => {
    if (this.findBeat() !== false) {
      this.findBeat().play();
      this.setState({
        playing: true,
        speed: 3,
        cursor: "grab"
      });
    } else {
      this.setState({
        cursor: "grab"
      });
    }
  };

  recordButton = () => {
    alert("Functionality unavailable at the moment");
  };

  render() {
    console.log(this.state);
    const { playing, currentBeat } = this.state;
    const { beats } = this.props;
    const styleObj = {
      borderColor: this.state.color
    };
    const style = {
      cursor: this.state.cursor,
      animation: `spin ${this.state.speed}s linear infinite`
    };
    let loadedBeat = beats.filter(beat => {
      if (currentBeat.length > 0) {
        return beat.name.toLowerCase().includes(currentBeat.toLowerCase());
      } else {
        return true;
      }
    });
    return (
      <div className="audio-player" style={styleObj}>
        <div className="audio-record">
          <img
            className="audio-image"
            style={style}
            src="https://www.pngix.com/pngfile/big/51-511247_vinyl-record-png-black-vinyl-record-png-transparent.png"
            alt="img"
            onMouseDown={this.recordScratch}
            onMouseUp={this.recordLetGo}
          />
          <img
            className="record-needle"
            src="https://www.stickpng.com/assets/images/58e3853c204d556bbd97b151.png"
            alt=""
          />
        </div>
        {loadedBeat.map((beat, index) => (
          <div className="selected-audio" key={index}>
            {/* <img className="audio-image" src={beat.image} alt="" /> */}
            {/* <img
              className="audio-image"
              style={{ animation: `spin ${this.state.speed}s linear infinite` }}
              src="https://www.pngix.com/pngfile/middle/51-511247_vinyl-record-png-black-vinyl-record-png-transparent.png"
              alt="img"
            /> */}
            <h1 className="audio-title" style={styleObj}>
              {beat.name}
            </h1>
            <div className="audio-buttons">
              <button
                className="start-stop-button"
                onClick={() => {
                  this.startStop(beat);
                }}
              >
                {playing ? <div>||</div> : <div>&#9658;</div>}
              </button>
              <button
                className="stop-button"
                onClick={() => {
                  this.stopAudio(beat);
                }}
              >
                &#9632;
              </button>
              <button className="record-button" onClick={this.recordButton}>
                &#11044;
              </button>
              <br />
              {/* <h1>{this.audio.duration}</h1> */}
            </div>
          </div>
        ))}
        <div className="select-audio">
          <select className="audio-selector" id="" onChange={this.beatChange}>
            <option>Select a Beat</option>
            {beats.map((beat, index) => (
              <option
                className="audio-selector-option"
                value={beat.name.toLowerCase()}
                key={index}
              >
                {beat.name}
              </option>
            ))}
          </select>
        </div>
        <AudioAnimation playing={this.state.playing} />
        <br />
        {/* <audio
          ref="audio_tag"
          src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/606%20Basic/440[kb]606-cymbal2.wav.mp3"
          controls
        /> */}
      </div>
    );
  }
}

export default AudioPlayer;
