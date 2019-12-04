import React from "react";
// import Card from "./Card";
import Metronome from "../components/Metronome";
import "../App.css";

class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      color: "white",
      drumsSelected: "selected-button",
      hipHopSelected: "unselected-button",
      pianoSelected: "unselected-button",
      pad1: "pad1-unpressed",
      pad2: "pad2-unpressed",
      pad3: "pad3-unpressed",
      pad4: "pad4-unpressed",
      pad5: "pad5-unpressed",
      pad6: "pad6-unpressed",
      pad7: "pad7-unpressed",
      pad8: "pad8-unpressed",
      pad9: "pad9-unpressed",
      pad0: "pad0-unpressed",
      padq: "padq-unpressed",
      padw: "padw-unpressed",
      pade: "pade-unpressed",
      padr: "padr-unpressed",
      padt: "padt-unpressed",
      pady: "pady-unpressed",
      padu: "padu-unpressed",
      padi: "padi-unpressed",
      pado: "pado-unpressed",
      padp: "padp-unpressed",
      pada: "pada-unpressed",
      pads: "pads-unpressed",
      padd: "padd-unpressed",
      padf: "padf-unpressed",
      padg: "padg-unpressed",
      padh: "padh-unpressed",
      padj: "padj-unpressed",
      padk: "padk-unpressed",
      padl: "padl-unpressed",
      padz: "padz-unpressed",
      padx: "padx-unpressed",
      padc: "padc-unpressed",
      padv: "padv-unpressed",
      padb: "padb-unpressed",
      padn: "padn-unpressed",
      padm: "padm-unpressed"
    };

    this.handleKey = this.handleKey.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKey, false);
    document.addEventListener("keyup", this.handleKeyUp, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKey, false);
    document.removeEventListener("keyup", this.handleKeyUp, false);
  }

  playAudio = (link, playTime = 0) => {
    const audio = new Audio(link);
    audio.currentTime = playTime;
    // audio.playbackRate = 1;
    audio.play();
  };

  changeToDrums = () => {
    this.setState({
      index: 0,
      drumsSelected: "selected-button",
      hipHopSelected: "unselected-button",
      pianoSelected: "unselected-button"
    });
  };

  changeToHipHop = () => {
    this.setState({
      index: 1,
      drumsSelected: "unselected-button",
      hipHopSelected: "selected-button",
      pianoSelected: "unselected-button"
    });
  };

  changeToPiano = () => {
    this.setState({
      index: 2,
      drumsSelected: "unselected-button",
      hipHopSelected: "unselected-button",
      pianoSelected: "selected-button"
    });
  };

  handleKeyUp = event => {
    if (this.props.sound_kits) {
      switch (event.key) {
        case "1":
          this.setState({ pad1: "pad1-unpressed" });
          break;
        case "2":
          this.setState({ pad2: "pad2-unpressed" });
          break;
        case "3":
          this.setState({ pad3: "pad3-unpressed" });
          break;
        case "4":
          this.setState({ pad4: "pad4-unpressed" });
          break;
        case "5":
          this.setState({ pad5: "pad5-unpressed" });
          break;
        case "6":
          this.setState({ pad6: "pad6-unpressed" });
          break;
        case "7":
          this.setState({ pad7: "pad7-unpressed" });
          break;
        case "8":
          this.setState({ pad8: "pad8-unpressed" });
          break;
        case "9":
          this.setState({ pad9: "pad9-unpressed" });
          break;
        case "0":
          this.setState({ pad0: "pad0-unpressed" });
          break;
        case "q":
          this.setState({ padq: "padq-unpressed" });
          break;
        case "w":
          this.setState({ padw: "padw-unpressed" });
          break;
        case "e":
          this.setState({ pade: "pade-unpressed" });
          break;
        case "r":
          this.setState({ padr: "padr-unpressed" });
          break;
        case "t":
          this.setState({ padt: "padt-unpressed" });
          break;
        case "y":
          this.setState({ pady: "pady-unpressed" });
          break;
        case "u":
          this.setState({ padu: "padu-unpressed" });
          break;
        case "i":
          this.setState({ padi: "padi-unpressed" });
          break;
        case "o":
          this.setState({ pado: "pado-unpressed" });
          break;
        case "p":
          this.setState({ padp: "padp-unpressed" });
          break;
        case "a":
          this.setState({ pada: "pada-unpressed" });
          break;
        case "s":
          this.setState({ pads: "pads-unpressed" });
          break;
        case "d":
          this.setState({ padd: "padd-unpressed" });
          break;
        case "f":
          this.setState({ padf: "padf-unpressed" });
          break;
        case "g":
          this.setState({ padg: "padg-unpressed" });
          break;
        case "h":
          this.setState({ padh: "padh-unpressed" });
          break;
        case "j":
          this.setState({ padj: "padj-unpressed" });
          break;
        case "k":
          this.setState({ padk: "padk-unpressed" });
          break;
        case "l":
          this.setState({ padl: "padl-unpressed" });
          break;
        case "z":
          this.setState({ padz: "padz-unpressed" });
          break;
        case "x":
          this.setState({ padx: "padx-unpressed" });
          break;
        case "c":
          this.setState({ padc: "padc-unpressed" });
          break;
        case "v":
          this.setState({ padv: "padv-unpressed" });
          break;
        case "b":
          this.setState({ padb: "padb-unpressed" });
          break;
        case "n":
          this.setState({ padn: "padn-unpressed" });
          break;
        case "m":
          this.setState({ padm: "padm-unpressed" });
          break;
        default:
      }
    }
  };

  handleKey = event => {
    if (this.props.sound_kits) {
      switch (event.key) {
        case "1":
          this.playAudio(this.props.sound_kits[this.state.index].one_key);
          this.setState({
            color: "rgb(0, 115, 255)",
            pad1: "pad1-pressed"
          });
          break;
        case "2":
          this.playAudio(this.props.sound_kits[this.state.index].two_key);
          this.setState({
            color: "rgb(45, 157, 255)",
            pad2: "pad2-pressed"
          });
          break;
        case "3":
          this.playAudio(this.props.sound_kits[this.state.index].three_key);
          this.setState({
            color: "rgb(90, 197, 255)",
            pad3: "pad3-pressed"
          });
          break;
        case "4":
          this.playAudio(this.props.sound_kits[this.state.index].four_key);
          this.setState({
            color: "rgb(161, 244, 255)",
            pad4: "pad4-pressed"
          });
          break;
        case "5":
          this.playAudio(this.props.sound_kits[this.state.index].five_key);
          this.setState({
            color: "rgb(161, 244, 255)",
            pad5: "pad5-pressed"
          });
          break;
        case "6":
          this.playAudio(this.props.sound_kits[this.state.index].six_key);
          this.setState({
            color: "rgb(161, 244, 255)",
            pad6: "pad6-pressed"
          });
          break;
        case "7":
          this.playAudio(this.props.sound_kits[this.state.index].seven_key);
          this.setState({
            color: "rgb(43, 230, 255)",
            pad7: "pad7-pressed"
          });
          break;
        case "8":
          this.playAudio(this.props.sound_kits[this.state.index].eight_key);
          this.setState({
            color: "rgb(90, 197, 255)",
            pad8: "pad8-pressed"
          });
          break;
        case "9":
          this.playAudio(this.props.sound_kits[this.state.index].nine_key);
          this.setState({
            color: "rgb(45, 157, 255)",
            pad9: "pad9-pressed"
          });
          break;
        case "0":
          this.playAudio(this.props.sound_kits[this.state.index].zero_key);
          this.setState({
            color: "rgb(0, 115, 255)",
            pad0: "pad0-pressed"
          });
          break;
        case "q":
          this.playAudio(this.props.sound_kits[this.state.index].q_key);
          this.setState({
            color: "rgb(97, 152, 97)",
            padq: "padq-pressed"
          });
          break;
        case "w":
          this.playAudio(this.props.sound_kits[this.state.index].w_key);
          this.setState({
            color: "rgb(102, 201, 122)",
            padw: "padw-pressed"
          });
          break;
        case "e":
          this.playAudio(this.props.sound_kits[this.state.index].e_key);
          this.setState({
            color: "rgb(153, 220, 166)",
            pade: "pade-pressed"
          });
          break;
        case "r":
          this.playAudio(this.props.sound_kits[this.state.index].r_key);
          this.setState({
            color: "rgb(204, 252, 219)",
            padr: "padr-pressed"
          });
          break;
        case "t":
          this.playAudio(this.props.sound_kits[this.state.index].t_key);
          this.setState({
            color: "rgb(226, 254, 235)",
            padt: "padt-pressed"
          });
          break;
        case "y":
          this.playAudio(this.props.sound_kits[this.state.index].y_key);
          this.setState({
            color: "rgb(226, 254, 235)",
            pady: "pady-pressed"
          });
          break;
        case "u":
          this.playAudio(this.props.sound_kits[this.state.index].u_key);
          this.setState({
            color: "rgb(204, 252, 219)",
            padu: "padu-pressed"
          });
          break;
        case "i":
          this.playAudio(this.props.sound_kits[this.state.index].i_key);
          this.setState({
            color: "rgb(153, 220, 166)",
            padi: "padi-pressed"
          });
          break;
        case "o":
          this.playAudio(this.props.sound_kits[this.state.index].o_key);
          this.setState({
            color: "rgb(102, 201, 122)",
            pado: "pado-pressed"
          });
          break;
        case "p":
          this.playAudio(this.props.sound_kits[this.state.index].p_key);
          this.setState({
            color: "rgb(97, 152, 97)",
            padp: "padp-pressed"
          });
          break;
        case "a":
          this.playAudio(this.props.sound_kits[this.state.index].a_key);
          this.setState({
            color: "rgb(191, 191, 114)",
            pada: "pada-pressed"
          });
          break;
        case "s":
          this.playAudio(this.props.sound_kits[this.state.index].s_key);
          this.setState({
            color: "rgb(223, 223, 111)",
            pads: "pads-pressed"
          });
          break;
        case "d":
          this.playAudio(this.props.sound_kits[this.state.index].d_key);
          this.setState({
            color: "rgb(237, 237, 142)",
            padd: "padd-pressed"
          });
          break;
        case "f":
          this.playAudio(this.props.sound_kits[this.state.index].f_key);
          this.setState({
            color: "rgb(255, 255, 183)",
            padf: "padf-pressed"
          });
          break;
        case "g":
          this.playAudio(this.props.sound_kits[this.state.index].g_key);
          this.setState({
            color: "rgb(255, 255, 225)",
            padg: "padg-pressed"
          });
          break;
        case "h":
          this.playAudio(this.props.sound_kits[this.state.index].h_key);
          this.setState({
            color: "rgb(255, 255, 183)",
            padh: "padh-pressed"
          });
          break;
        case "j":
          this.playAudio(this.props.sound_kits[this.state.index].j_key);
          this.setState({
            color: "rgb(237, 237, 142)",
            padj: "padj-pressed"
          });
          break;
        case "k":
          this.playAudio(this.props.sound_kits[this.state.index].k_key);
          this.setState({
            color: "rgb(223, 223, 111)",
            padk: "padk-pressed"
          });
          break;
        case "l":
          this.playAudio(this.props.sound_kits[this.state.index].l_key);
          this.setState({
            color: "rgb(191, 191, 114)",
            padl: "padl-pressed"
          });
          break;
        case "z":
          this.playAudio(this.props.sound_kits[this.state.index].z_key);
          this.setState({
            color: "rgb(203, 115, 130)",
            padz: "padz-pressed"
          });
          break;
        case "x":
          this.playAudio(this.props.sound_kits[this.state.index].x_key);
          this.setState({
            color: "rgb(225, 144, 158)",
            padx: "padx-pressed"
          });
          break;
        case "c":
          this.playAudio(this.props.sound_kits[this.state.index].c_key);
          this.setState({
            color: "rgb(249, 188, 198)",
            padc: "padc-pressed"
          });
          break;
        case "v":
          this.playAudio(this.props.sound_kits[this.state.index].v_key);
          this.setState({
            color: "rgb(255, 217, 223)",
            padv: "padv-pressed"
          });
          break;
        case "b":
          this.playAudio(this.props.sound_kits[this.state.index].b_key);
          this.setState({
            color: "rgb(249, 188, 198)",
            padb: "padb-pressed"
          });
          break;
        case "n":
          this.playAudio(this.props.sound_kits[this.state.index].n_key);
          this.setState({
            color: "rgb(225, 144, 158)",
            padn: "padn-pressed"
          });
          break;
        case "m":
          this.playAudio(this.props.sound_kits[this.state.index].m_key);
          this.setState({
            color: "rgb(203, 115, 130)",
            padm: "padm-pressed"
          });
          break;
        default:
      }
    }
  };

  handleClick1 = () => {
    this.playAudio(this.props.sound_kits[this.state.index].one_key);
    this.setState({
      color: "rgb(0, 115, 255)"
    });
  };
  handleClick2 = () => {
    this.playAudio(this.props.sound_kits[this.state.index].two_key);
    this.setState({
      color: "rgb(45, 157, 255)"
    });
  };
  handleClick3 = () => {
    this.playAudio(this.props.sound_kits[this.state.index].three_key);
    this.setState({
      color: "rgb(90, 197, 255)"
    });
  };
  handleClick4 = () => {
    this.playAudio(this.props.sound_kits[this.state.index].four_key);
    this.setState({
      color: "rgb(43, 230, 255)"
    });
  };
  handleClick5 = () => {
    this.playAudio(this.props.sound_kits[this.state.index].five_key);
    this.setState({
      color: "rgb(161, 244, 255)"
    });
  };
  handleClick6 = () => {
    this.playAudio(this.props.sound_kits[this.state.index].six_key);
    this.setState({
      color: "rgb(161, 244, 255)"
    });
  };
  handleClick7 = () => {
    this.playAudio(this.props.sound_kits[this.state.index].seven_key);
    this.setState({
      color: "rgb(43, 230, 255)"
    });
  };
  handleClick8 = () => {
    this.playAudio(this.props.sound_kits[this.state.index].eight_key);
    this.setState({
      color: "rgb(90, 197, 255)"
    });
  };
  handleClick9 = () => {
    this.playAudio(this.props.sound_kits[this.state.index].nine_key);
    this.setState({
      color: "rgb(45, 157, 255)"
    });
  };
  handleClick0 = () => {
    this.playAudio(this.props.sound_kits[this.state.index].zero_key);
    this.setState({
      color: "rgb(0, 115, 255)"
    });
  };

  //   pad keys q-p on clicks
  handleClickQ = () => {
    this.playAudio(this.props.sound_kits[this.state.index].q_key);
    this.setState({
      color: "rgb(97, 152, 97)"
    });
  };
  handleClickW = () => {
    this.playAudio(this.props.sound_kits[this.state.index].w_key);
    this.setState({
      color: "rgb(102, 201, 122)"
    });
  };
  handleClickE = () => {
    this.playAudio(this.props.sound_kits[this.state.index].e_key);
    this.setState({
      color: "rgb(153, 220, 166)"
    });
  };
  handleClickR = () => {
    this.playAudio(this.props.sound_kits[this.state.index].r_key);
    this.setState({
      color: "rgb(204, 252, 219)"
    });
  };
  handleClickT = () => {
    this.playAudio(this.props.sound_kits[this.state.index].t_key);
    this.setState({
      color: "rgb(226, 254, 235)"
    });
  };
  handleClickY = () => {
    this.playAudio(this.props.sound_kits[this.state.index].y_key);
    this.setState({
      color: "rgb(226, 254, 235)"
    });
  };
  handleClickU = () => {
    this.playAudio(this.props.sound_kits[this.state.index].u_key);
    this.setState({
      color: "rgb(204, 252, 219)"
    });
  };
  handleClickI = () => {
    this.playAudio(this.props.sound_kits[this.state.index].i_key);
    this.setState({
      color: "rgb(153, 220, 166)"
    });
  };
  handleClickO = () => {
    this.playAudio(this.props.sound_kits[this.state.index].o_key);
    this.setState({
      color: "rgb(102, 201, 122)"
    });
  };
  handleClickP = () => {
    this.playAudio(this.props.sound_kits[this.state.index].p_key);
    this.setState({
      color: "rgb(97, 152, 97)"
    });
  };

  //   pad keys a-l on clicks
  handleClickA = () => {
    this.playAudio(this.props.sound_kits[this.state.index].a_key);
    this.setState({
      color: "rgb(191, 191, 114)"
    });
  };
  handleClickS = () => {
    this.playAudio(this.props.sound_kits[this.state.index].s_key);
    this.setState({
      color: "rgb(223, 223, 111)"
    });
  };
  handleClickD = () => {
    this.playAudio(this.props.sound_kits[this.state.index].d_key);
    this.setState({
      color: "rgb(237, 237, 142)"
    });
  };
  handleClickF = () => {
    this.playAudio(this.props.sound_kits[this.state.index].f_key);
    this.setState({
      color: "rgb(255, 255, 183)"
    });
  };
  handleClickG = () => {
    this.playAudio(this.props.sound_kits[this.state.index].g_key);
    this.setState({
      color: "rgb(255, 255, 225)"
    });
  };
  handleClickH = () => {
    this.playAudio(this.props.sound_kits[this.state.index].h_key);
    this.setState({
      color: "rgb(255, 255, 183)"
    });
  };
  handleClickJ = () => {
    this.playAudio(this.props.sound_kits[this.state.index].j_key);
    this.setState({
      color: "rgb(237, 237, 142)"
    });
  };
  handleClickK = () => {
    this.playAudio(this.props.sound_kits[this.state.index].k_key);
    this.setState({
      color: "rgb(223, 223, 111)"
    });
  };
  handleClickL = () => {
    this.playAudio(this.props.sound_kits[this.state.index].l_key);
    this.setState({
      color: "rgb(191, 191, 114)"
    });
  };

  // pad keys z-m on clicks
  handleClickZ = () => {
    this.playAudio(this.props.sound_kits[this.state.index].z_key);
    this.setState({
      color: "rgb(203, 115, 130)"
    });
  };
  handleClickX = () => {
    this.playAudio(this.props.sound_kits[this.state.index].x_key);
    this.setState({
      color: "rgb(225, 144, 158)"
    });
  };
  handleClickC = () => {
    this.playAudio(this.props.sound_kits[this.state.index].c_key);
    this.setState({
      color: "rgb(249, 188, 198)"
    });
  };
  handleClickV = () => {
    this.playAudio(this.props.sound_kits[this.state.index].v_key);
    this.setState({
      color: "rgb(255, 217, 223)"
    });
  };
  handleClickB = () => {
    this.playAudio(this.props.sound_kits[this.state.index].b_key);
    this.setState({
      color: "rgb(249, 188, 198)"
    });
  };
  handleClickN = () => {
    this.playAudio(this.props.sound_kits[this.state.index].n_key);
    this.setState({
      color: "rgb(225, 144, 158)"
    });
  };
  handleClickM = () => {
    this.playAudio(this.props.sound_kits[this.state.index].m_key);
    this.setState({
      color: "rgb(203, 115, 130)"
    });
  };

  render() {
    const styleObj = {
      color: this.state.color
    };
    const drums = this.state.drumsSelected;
    const hipHop = this.state.hipHopSelected;
    const piano = this.state.pianoSelected;
    return (
      <div>
        <div className="keyboard" style={styleObj}>
          {/* <Card sound_kits={this.props.sound_kits} /> */}
          <div className="buttons-and-metro">
            <button className={drums} onClick={this.changeToDrums}>
              Drum Kit
            </button>
            <button className={hipHop} onClick={this.changeToHipHop}>
              Hip Hop Kit
            </button>
            <button className={piano} onClick={this.changeToPiano}>
              Piano Kit
            </button>
            <Metronome />
          </div>
          <div className="pads">
            <div style={styleObj} className="num1-0">
              <div className={this.state.pad1} onClick={this.handleClick1}>
                <h1 className="key-text">1</h1>
              </div>
              <div className={this.state.pad2} onClick={this.handleClick2}>
                <h1 className="key-text">2</h1>
              </div>
              <div className={this.state.pad3} onClick={this.handleClick3}>
                <h1 className="key-text">3</h1>
              </div>
              <div className={this.state.pad4} onClick={this.handleClick4}>
                <h1 className="key-text">4</h1>
              </div>
              <div className={this.state.pad5} onClick={this.handleClick5}>
                <h1 className="key-text">5</h1>
              </div>
              <div className={this.state.pad6} onClick={this.handleClick6}>
                <h1 className="key-text">6</h1>
              </div>
              <div className={this.state.pad7} onClick={this.handleClick7}>
                <h1 className="key-text">7</h1>
              </div>
              <div className={this.state.pad8} onClick={this.handleClick8}>
                <h1 className="key-text">8</h1>
              </div>
              <div className={this.state.pad9} onClick={this.handleClick9}>
                <h1 className="key-text">9</h1>
              </div>
              <div className={this.state.pad0} onClick={this.handleClick0}>
                <h1 className="key-text">0</h1>
              </div>
            </div>
            <div style={styleObj} className="row-q">
              <div className={this.state.padq} onClick={this.handleClickQ}>
                <h1 className="key-text">Q</h1>
              </div>
              <div className={this.state.padw} onClick={this.handleClickW}>
                <h1 className="key-text">W</h1>
              </div>
              <div className={this.state.pade} onClick={this.handleClickE}>
                <h1 className="key-text">E</h1>
              </div>
              <div className={this.state.padr} onClick={this.handleClickR}>
                <h1 className="key-text">R</h1>
              </div>
              <div className={this.state.padt} onClick={this.handleClickT}>
                <h1 className="key-text">T</h1>
              </div>
              <div className={this.state.pady} onClick={this.handleClickY}>
                <h1 className="key-text">Y</h1>
              </div>
              <div className={this.state.padu} onClick={this.handleClickU}>
                <h1 className="key-text">U</h1>
              </div>
              <div className={this.state.padi} onClick={this.handleClickI}>
                <h1 className="key-text">I</h1>
              </div>
              <div className={this.state.pado} onClick={this.handleClickO}>
                <h1 className="key-text">O</h1>
              </div>
              <div className={this.state.padp} onClick={this.handleClickP}>
                <h1 className="key-text">P</h1>
              </div>
            </div>
            <div style={styleObj} className="row-a">
              <div className={this.state.pada} onClick={this.handleClickA}>
                <h1 className="key-text">A</h1>
              </div>
              <div className={this.state.pads} onClick={this.handleClickS}>
                <h1 className="key-text">S</h1>
              </div>
              <div className={this.state.padd} onClick={this.handleClickD}>
                <h1 className="key-text">D</h1>
              </div>
              <div className={this.state.padf} onClick={this.handleClickF}>
                <h1 className="key-text">F</h1>
              </div>
              <div className={this.state.padg} onClick={this.handleClickG}>
                <h1 className="key-text">G</h1>
              </div>
              <div className={this.state.padh} onClick={this.handleClickH}>
                <h1 className="key-text">H</h1>
              </div>
              <div className={this.state.padj} onClick={this.handleClickJ}>
                <h1 className="key-text">J</h1>
              </div>
              <div className={this.state.padk} onClick={this.handleClickK}>
                <h1 className="key-text">K</h1>
              </div>
              <div className={this.state.padl} onClick={this.handleClickL}>
                <h1 className="key-text">L</h1>
              </div>
            </div>
            <div style={styleObj} className="row-z">
              <div className={this.state.padz} onClick={this.handleClickZ}>
                <h1 className="key-text">Z</h1>
              </div>
              <div className={this.state.padx} onClick={this.handleClickX}>
                <h1 className="key-text">X</h1>
              </div>
              <div className={this.state.padc} onClick={this.handleClickC}>
                <h1 className="key-text">C</h1>
              </div>
              <div className={this.state.padv} onClick={this.handleClickV}>
                <h1 className="key-text">V</h1>
              </div>
              <div className={this.state.padb} onClick={this.handleClickB}>
                <h1 className="key-text">B</h1>
              </div>
              <div className={this.state.padn} onClick={this.handleClickN}>
                <h1 className="key-text">N</h1>
              </div>
              <div className={this.state.padm} onClick={this.handleClickM}>
                <h1 className="key-text">M</h1>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="square"></div> */}
      </div>
    );
  }
}

export default Keyboard;
