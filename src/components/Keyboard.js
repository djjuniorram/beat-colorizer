import React from "react";
import Card from "./Card";
import Metronome from "../components/Metronome";
import "../App.css";

class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      color: "white"
    };

    this.handleKey = this.handleKey.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKey, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKey, false);
  }

  playAudio = (link, playTime = 0) => {
    const audio = new Audio(link);
    audio.currentTime = playTime;
    audio.playbackRate = 1;
    audio.play();
  };

  changeToDrums = () => {
    this.setState({
      index: 0
    });
  };

  changeToHipHop = () => {
    this.setState({
      index: 1
    });
  };

  changeToPiano = () => {
    this.setState({
      index: 2
    });
  };

  handleKey = event => {
    if (this.props.sound_kits) {
      switch (event.key) {
        case "1":
          this.playAudio(this.props.sound_kits[this.state.index].one_key);
          this.setState({
            color: "rgb(255, 200, 200)"
          });
          break;
        case "2":
          this.playAudio(this.props.sound_kits[this.state.index].two_key);
          this.setState({
            color: "rgb(255, 150, 150)"
          });
          break;
        case "3":
          this.playAudio(this.props.sound_kits[this.state.index].three_key);
          this.setState({
            color: "rgb(255, 100, 100)"
          });
          break;
        case "4":
          this.playAudio(this.props.sound_kits[this.state.index].four_key);
          this.setState({
            color: "rgb(161, 244, 255)"
          });
          break;
        case "5":
          this.playAudio(this.props.sound_kits[this.state.index].five_key);
          this.setState({
            color: "rgb(185, 131, 175)"
          });
          break;
        case "6":
          this.playAudio(this.props.sound_kits[this.state.index].six_key);
          this.setState({
            color: "rgb(187, 255, 187)"
          });
          break;
        case "7":
          this.playAudio(this.props.sound_kits[this.state.index].seven_key);
          this.setState({
            color: "pink"
          });
          break;
        case "8":
          this.playAudio(this.props.sound_kits[this.state.index].eight_key);
          this.setState({
            color: "rgb(140, 140, 255)"
          });
          break;
        case "9":
          this.playAudio(this.props.sound_kits[this.state.index].nine_key);
          this.setState({
            color: "rgb(255, 150, 150)"
          });
          break;
        case "0":
          this.playAudio(this.props.sound_kits[this.state.index].zero_key);
          this.setState({
            color: "rgb(255, 200, 200)"
          });
          break;
        case "q":
          this.playAudio(this.props.sound_kits[this.state.index].q_key);
          this.setState({
            color: "rgb(161, 244, 255)"
          });
          break;
        case "w":
          this.playAudio(this.props.sound_kits[this.state.index].w_key);
          this.setState({
            color: "rgb(255, 255, 0)"
          });
          break;
        case "e":
          this.playAudio(this.props.sound_kits[this.state.index].e_key);
          this.setState({
            color: "rgb(187, 255, 187)"
          });
          break;
        case "r":
          this.playAudio(this.props.sound_kits[this.state.index].r_key);
          this.setState({
            color: "rgb(140, 140, 255)"
          });
          break;
        case "t":
          this.playAudio(this.props.sound_kits[this.state.index].t_key);
          this.setState({
            color: "rgb(255, 168, 168)"
          });
          break;
        case "y":
          this.playAudio(this.props.sound_kits[this.state.index].y_key);
          this.setState({
            color: "rgb(255, 255, 196)"
          });
          break;
        case "u":
          this.playAudio(this.props.sound_kits[this.state.index].u_key);
          this.setState({
            color: "rgb(255, 220, 155)"
          });
          break;
        case "i":
          this.playAudio(this.props.sound_kits[this.state.index].i_key);
          this.setState({
            color: "pink"
          });
          break;
        case "o":
          this.playAudio(this.props.sound_kits[this.state.index].o_key);
          this.setState({
            color: "rgb(185, 131, 175)"
          });
          break;
        case "p":
          this.playAudio(this.props.sound_kits[this.state.index].p_key);
          this.setState({
            color: "pink"
          });
          break;
        case "a":
          this.playAudio(this.props.sound_kits[this.state.index].a_key);
          this.setState({
            color: "rgb(185, 131, 175)"
          });
          break;
        case "s":
          this.playAudio(this.props.sound_kits[this.state.index].s_key);
          this.setState({
            color: "pink"
          });
          break;
        case "d":
          this.playAudio(this.props.sound_kits[this.state.index].d_key);
          this.setState({
            color: "rgb(140, 140, 255)"
          });
          break;
        case "f":
          this.playAudio(this.props.sound_kits[this.state.index].f_key);
          this.setState({
            color: "rgb(255, 168, 168)"
          });
          break;
        case "g":
          this.playAudio(this.props.sound_kits[this.state.index].g_key);
          this.setState({
            color: "rgb(255, 255, 196)"
          });
          break;
        case "h":
          this.playAudio(this.props.sound_kits[this.state.index].h_key);
          this.setState({
            color: "rgb(140, 140, 255)"
          });
          break;
        case "j":
          this.playAudio(this.props.sound_kits[this.state.index].j_key);
          this.setState({
            color: "rgb(187, 255, 187)"
          });
          break;
        case "k":
          this.playAudio(this.props.sound_kits[this.state.index].k_key);
          this.setState({
            color: "rgb(161, 244, 255)"
          });
          break;
        case "l":
          this.playAudio(this.props.sound_kits[this.state.index].l_key);
          this.setState({
            color: "rgb(185, 131, 175)"
          });
          break;
        case "z":
          this.playAudio(this.props.sound_kits[this.state.index].z_key);
          this.setState({
            color: "rgb(161, 244, 255)"
          });
          break;
        case "x":
          this.playAudio(this.props.sound_kits[this.state.index].x_key);
          this.setState({
            color: "rgb(255, 220, 155)"
          });
          break;
        case "c":
          this.playAudio(this.props.sound_kits[this.state.index].c_key);
          this.setState({
            color: "rgb(187, 255, 187)"
          });
          break;
        case "v":
          this.playAudio(this.props.sound_kits[this.state.index].v_key);
          this.setState({
            color: "pink"
          });
          break;
        case "b":
          this.playAudio(this.props.sound_kits[this.state.index].b_key);
          this.setState({
            color: "rgb(185, 131, 175)"
          });
          break;
        case "n":
          this.playAudio(this.props.sound_kits[this.state.index].n_key);
          this.setState({
            color: "rgb(140, 140, 255)"
          });
          break;
        case "m":
          this.playAudio(this.props.sound_kits[this.state.index].m_key);
          this.setState({
            color: "rgb(255, 168, 168)"
          });
          break;
        default:
          console.log("nothing");
      }
    }
  };

  handleClick1 = () => {
    this.playAudio(this.props.sound_kits[this.state.index].one_key);
    this.setState({
      color: "rgb(255, 200, 200)"
    });
  };
  handleClick2 = () => {
    this.playAudio(this.props.sound_kits[this.state.index].two_key);
    this.setState({
      color: "rgb(255, 150, 150)"
    });
  };
  handleClick3 = () => {
    this.playAudio(this.props.sound_kits[this.state.index].three_key);
    this.setState({
      color: "rgb(255, 100, 100)"
    });
  };
  handleClick4 = () => {
    this.playAudio(this.props.sound_kits[this.state.index].four_key);
    this.setState({
      color: "rgb(161, 244, 255)"
    });
  };
  handleClick5 = () => {
    this.playAudio(this.props.sound_kits[this.state.index].five_key);
    this.setState({
      color: "rgb(185, 131, 175)"
    });
  };
  handleClick6 = () => {
    this.playAudio(this.props.sound_kits[this.state.index].six_key);
    this.setState({
      color: "rgb(187, 255, 187)"
    });
  };
  handleClick7 = () => {
    this.playAudio(this.props.sound_kits[this.state.index].seven_key);
    this.setState({
      color: "pink"
    });
  };
  handleClick8 = () => {
    this.playAudio(this.props.sound_kits[this.state.index].eight_key);
    this.setState({
      color: "rgb(140, 140, 255)"
    });
  };
  handleClick9 = () => {
    this.playAudio(this.props.sound_kits[this.state.index].nine_key);
    this.setState({
      color: "rgb(255, 150, 150)"
    });
  };
  handleClick0 = () => {
    this.playAudio(this.props.sound_kits[this.state.index].zero_key);
    this.setState({
      color: "rgb(255, 200, 200)"
    });
  };

  //   pad keys q-p on clicks
  handleClickQ = () => {
    this.playAudio(this.props.sound_kits[this.state.index].q_key);
    this.setState({
      color: "rgb(161, 244, 255)"
    });
  };
  handleClickW = () => {
    this.playAudio(this.props.sound_kits[this.state.index].w_key);
    this.setState({
      color: "rgb(255, 255, 0)"
    });
  };
  handleClickE = () => {
    this.playAudio(this.props.sound_kits[this.state.index].e_key);
    this.setState({
      color: "rgb(187, 255, 187)"
    });
  };
  handleClickR = () => {
    this.playAudio(this.props.sound_kits[this.state.index].r_key);
    this.setState({
      color: "rgb(140, 140, 255)"
    });
  };
  handleClickT = () => {
    this.playAudio(this.props.sound_kits[this.state.index].t_key);
    this.setState({
      color: "rgb(255, 168, 168)"
    });
  };
  handleClickY = () => {
    this.playAudio(this.props.sound_kits[this.state.index].y_key);
    this.setState({
      color: "rgb(255, 255, 196)"
    });
  };
  handleClickU = () => {
    this.playAudio(this.props.sound_kits[this.state.index].u_key);
    this.setState({
      color: "rgb(255, 220, 155)"
    });
  };
  handleClickI = () => {
    this.playAudio(this.props.sound_kits[this.state.index].i_key);
    this.setState({
      color: "pink"
    });
  };
  handleClickO = () => {
    this.playAudio(this.props.sound_kits[this.state.index].o_key);
    this.setState({
      color: "rgb(185, 131, 175)"
    });
  };
  handleClickP = () => {
    this.playAudio(this.props.sound_kits[this.state.index].p_key);
    this.setState({
      color: "pink"
    });
  };

  //   pad keys a-l on clicks
  handleClickA = () => {
    this.playAudio(this.props.sound_kits[this.state.index].a_key);
    this.setState({
      color: "rgb(185, 131, 175)"
    });
  };
  handleClickS = () => {
    this.playAudio(this.props.sound_kits[this.state.index].s_key);
    this.setState({
      color: "pink"
    });
  };
  handleClickD = () => {
    this.playAudio(this.props.sound_kits[this.state.index].d_key);
    this.setState({
      color: "rgb(140, 140, 255)"
    });
  };
  handleClickF = () => {
    this.playAudio(this.props.sound_kits[this.state.index].f_key);
    this.setState({
      color: "rgb(255, 168, 168)"
    });
  };
  handleClickG = () => {
    this.playAudio(this.props.sound_kits[this.state.index].g_key);
    this.setState({
      color: "rgb(255, 255, 196)"
    });
  };
  handleClickH = () => {
    this.playAudio(this.props.sound_kits[this.state.index].h_key);
    this.setState({
      color: "rgb(140, 140, 255)"
    });
  };
  handleClickJ = () => {
    this.playAudio(this.props.sound_kits[this.state.index].j_key);
    this.setState({
      color: "rgb(187, 255, 187)"
    });
  };
  handleClickK = () => {
    this.playAudio(this.props.sound_kits[this.state.index].k_key);
    this.setState({
      color: "rgb(161, 244, 255)"
    });
  };
  handleClickL = () => {
    this.playAudio(this.props.sound_kits[this.state.index].l_key);
    this.setState({
      color: "rgb(185, 131, 175)"
    });
  };

  // pad keys z-m on clicks
  handleClickZ = () => {
    this.playAudio(this.props.sound_kits[this.state.index].z_key);
    this.setState({
      color: "rgb(161, 244, 255)"
    });
  };
  handleClickX = () => {
    this.playAudio(this.props.sound_kits[this.state.index].x_key);
    this.setState({
      color: "rgb(255, 220, 155)"
    });
  };
  handleClickC = () => {
    this.playAudio(this.props.sound_kits[this.state.index].c_key);
    this.setState({
      color: "rgb(187, 255, 187)"
    });
  };
  handleClickV = () => {
    this.playAudio(this.props.sound_kits[this.state.index].v_key);
    this.setState({
      color: "pink"
    });
  };
  handleClickB = () => {
    this.playAudio(this.props.sound_kits[this.state.index].b_key);
    this.setState({
      color: "rgb(185, 131, 175)"
    });
  };
  handleClickN = () => {
    this.playAudio(this.props.sound_kits[this.state.index].n_key);
    this.setState({
      color: "rgb(140, 140, 255)"
    });
  };
  handleClickM = () => {
    this.playAudio(this.props.sound_kits[this.state.index].m_key);
    this.setState({
      color: "rgb(255, 168, 168)"
    });
  };

  buttonsDiv = () => {
    if (this.state.index === 0) {
      return (
        <div className="change-kit-buttons">
          {/* <div className="kit-selection">Try A Different Kit</div> */}
          <button className="hip-hop-button" onClick={this.changeToHipHop}>
            Hip Hop Kit
          </button>
          <br />
          <button className="piano-button" onClick={this.changeToPiano}>
            Piano Kit
          </button>
        </div>
      );
    } else if (this.state.index === 1) {
      return (
        <div className="change-kit-buttons">
          {/* <div className="kit-selection">Try A Different Kit</div> */}
          <button className="drums-button" onClick={this.changeToDrums}>
            Drum Kit
          </button>
          <br />
          <button className="piano-button" onClick={this.changeToPiano}>
            Piano Kit
          </button>
        </div>
      );
    } else if (this.state.index === 2) {
      return (
        <div className="change-kit-buttons">
          {/* <div className="kit-selection">Try A Different Kit</div> */}
          <button className="drums-button" onClick={this.changeToDrums}>
            Drum Kit
          </button>
          <br />
          <button className="hip-hop-button" onClick={this.changeToHipHop}>
            Hip Hop Kit
          </button>
        </div>
      );
    }
  };

  render() {
    const styleObj = {
      background: this.state.color
    };
    return (
      <div className="keyboard" style={styleObj}>
        {/* <Card sound_kits={this.props.sound_kits} /> */}
        <div className="buttons-and-metro">
          {this.buttonsDiv()}
          <Metronome />
        </div>
        <div className="pads">
          <div style={styleObj} className="num1-0">
            <div className="pad1" onClick={this.handleClick1}>
              <h1 className="key-text">1</h1>
            </div>
            <div className="pad2" onClick={this.handleClick2}>
              <h1 className="key-text">2</h1>
            </div>
            <div className="pad3" onClick={this.handleClick3}>
              <h1 className="key-text">3</h1>
            </div>
            <div className="pad4" onClick={this.handleClick4}>
              <h1 className="key-text">4</h1>
            </div>
            <div className="pad5" onClick={this.handleClick5}>
              <h1 className="key-text">5</h1>
            </div>
            <div className="pad6" onClick={this.handleClick6}>
              <h1 className="key-text">6</h1>
            </div>
            <div className="pad7" onClick={this.handleClick7}>
              <h1 className="key-text">7</h1>
            </div>
            <div className="pad8" onClick={this.handleClick8}>
              <h1 className="key-text">8</h1>
            </div>
            <div className="pad9" onClick={this.handleClick9}>
              <h1 className="key-text">9</h1>
            </div>
            <div className="pad0" onClick={this.handleClick0}>
              <h1 className="key-text">0</h1>
            </div>
          </div>
          <div style={styleObj} className="row-q">
            <div className="pad-q" onClick={this.handleClickQ}>
              <h1 className="key-text">Q</h1>
            </div>
            <div className="pad-w" onClick={this.handleClickW}>
              <h1 className="key-text">W</h1>
            </div>
            <div className="pad-e" onClick={this.handleClickE}>
              <h1 className="key-text">E</h1>
            </div>
            <div className="pad-r" onClick={this.handleClickR}>
              <h1 className="key-text">R</h1>
            </div>
            <div className="pad-t" onClick={this.handleClickT}>
              <h1 className="key-text">T</h1>
            </div>
            <div className="pad-y" onClick={this.handleClickY}>
              <h1 className="key-text">Y</h1>
            </div>
            <div className="pad-u" onClick={this.handleClickU}>
              <h1 className="key-text">U</h1>
            </div>
            <div className="pad-i" onClick={this.handleClickI}>
              <h1 className="key-text">I</h1>
            </div>
            <div className="pad-o" onClick={this.handleClickO}>
              <h1 className="key-text">O</h1>
            </div>
            <div className="pad-p" onClick={this.handleClickP}>
              <h1 className="key-text">P</h1>
            </div>
          </div>
          <div style={styleObj} className="row-a">
            <div className="pad-a" onClick={this.handleClickA}>
              <h1 className="key-text">A</h1>
            </div>
            <div className="pad-s" onClick={this.handleClickS}>
              <h1 className="key-text">S</h1>
            </div>
            <div className="pad-d" onClick={this.handleClickD}>
              <h1 className="key-text">D</h1>
            </div>
            <div className="pad-f" onClick={this.handleClickF}>
              <h1 className="key-text">F</h1>
            </div>
            <div className="pad-g" onClick={this.handleClickG}>
              <h1 className="key-text">G</h1>
            </div>
            <div className="pad-h" onClick={this.handleClickH}>
              <h1 className="key-text">H</h1>
            </div>
            <div className="pad-j" onClick={this.handleClickJ}>
              <h1 className="key-text">J</h1>
            </div>
            <div className="pad-k" onClick={this.handleClickK}>
              <h1 className="key-text">K</h1>
            </div>
            <div className="pad-l" onClick={this.handleClickL}>
              <h1 className="key-text">L</h1>
            </div>
          </div>
          <div style={styleObj} className="row-z">
            <div className="pad-z" onClick={this.handleClickZ}>
              <h1 className="key-text">Z</h1>
            </div>
            <div className="pad-x" onClick={this.handleClickX}>
              <h1 className="key-text">X</h1>
            </div>
            <div className="pad-c" onClick={this.handleClickC}>
              <h1 className="key-text">C</h1>
            </div>
            <div className="pad-v" onClick={this.handleClickV}>
              <h1 className="key-text">V</h1>
            </div>
            <div className="pad-b" onClick={this.handleClickB}>
              <h1 className="key-text">B</h1>
            </div>
            <div className="pad-n" onClick={this.handleClickN}>
              <h1 className="key-text">N</h1>
            </div>
            <div className="pad-m" onClick={this.handleClickM}>
              <h1 className="key-text">M</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Keyboard;
