import React from "react";

class AudioAnimation extends React.Component {
  constructor() {
    super();
    this.state = {
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
  render() {
    const styleObj = {
      color: this.state.color
    };
    if (this.props.playing) {
      return (
        <div>
          <div className="audio-animation" style={styleObj}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="equilizer"
              viewBox="0 0 128 128"
            >
              <g>
                <title>Audio Equilizer</title>
                <rect className="bar" transform="translate(0,0)" y="15"></rect>
                <rect className="bar" transform="translate(25,0)" y="15"></rect>
                <rect className="bar" transform="translate(50,0)" y="15"></rect>
                <rect className="bar" transform="translate(75,0)" y="15"></rect>
                <rect
                  className="bar"
                  transform="translate(100,0)"
                  y="15"
                ></rect>
              </g>
            </svg>
          </div>
          <div className="audio-animation2" style={styleObj}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="equilizer"
              viewBox="0 0 128 128"
            >
              <g>
                <title>Audio Equilizer</title>
                <rect className="bar" transform="translate(0,0)" y="15"></rect>
                <rect className="bar" transform="translate(25,0)" y="15"></rect>
                <rect className="bar" transform="translate(50,0)" y="15"></rect>
                <rect className="bar" transform="translate(75,0)" y="15"></rect>
                <rect
                  className="bar"
                  transform="translate(100,0)"
                  y="15"
                ></rect>
              </g>
            </svg>
          </div>
          <div className="speaker-images">
            <img
              className="speaker1-play"
              src="http://pluspng.com/img-png/speaker-hd-png-audio-speaker-png-2560.png"
              alt=""
            />
            <img
              className="speaker2-play"
              src="http://pluspng.com/img-png/speaker-hd-png-audio-speaker-png-2560.png"
              alt=""
            />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="audio-animation" style={styleObj}></div>
          <div className="audio-animation2" style={styleObj}></div>
          <div className="speaker-images">
            <img
              className="speaker1"
              src="http://pluspng.com/img-png/speaker-hd-png-audio-speaker-png-2560.png"
              alt=""
            />
            <img
              className="speaker2"
              src="http://pluspng.com/img-png/speaker-hd-png-audio-speaker-png-2560.png"
              alt=""
            />
          </div>
        </div>
      );
    }
  }
}

export default AudioAnimation;
