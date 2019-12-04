import React from "react";

class Title extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "white",
      title: "title-unpressed"
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

  handleKey = event => {
    switch (event.key) {
      case "1":
        this.setState({
          color: "rgb(0, 115, 255)",
          title: "title-pressed"
        });
        break;
      case "2":
        this.setState({
          color: "rgb(45, 157, 255)",
          title: "title-pressed"
        });
        break;
      case "3":
        this.setState({
          color: "rgb(90, 197, 255)",
          title: "title-pressed"
        });
        break;
      case "4":
        this.setState({
          color: "rgb(43, 230, 255)",
          title: "title-pressed"
        });
        break;
      case "5":
        this.setState({
          color: "rgb(161, 244, 255)",
          title: "title-pressed"
        });
        break;
      case "6":
        this.setState({
          color: "rgb(161, 244, 255)",
          title: "title-pressed"
        });
        break;
      case "7":
        this.setState({
          color: "rgb(43, 230, 255)",
          title: "title-pressed"
        });
        break;
      case "8":
        this.setState({
          color: "rgb(90, 197, 255)",
          title: "title-pressed"
        });
        break;
      case "9":
        this.setState({
          color: "rgb(45, 157, 255)",
          title: "title-pressed"
        });
        break;
      case "0":
        this.setState({
          color: "rgb(0, 115, 255)",
          title: "title-pressed"
        });
        break;
      case "q":
        this.setState({
          color: "rgb(97, 152, 97)",
          title: "title-pressed"
        });
        break;
      case "w":
        this.setState({
          color: "rgb(102, 201, 122)",
          title: "title-pressed"
        });
        break;
      case "e":
        this.setState({
          color: "rgb(153, 220, 166)",
          title: "title-pressed"
        });
        break;
      case "r":
        this.setState({
          color: "rgb(204, 252, 219)",
          title: "title-pressed"
        });
        break;
      case "t":
        this.setState({
          color: "rgb(226, 254, 235)",
          title: "title-pressed"
        });
        break;
      case "y":
        this.setState({
          color: "rgb(226, 254, 235)",
          title: "title-pressed"
        });
        break;
      case "u":
        this.setState({
          color: "rgb(204, 252, 219)",
          title: "title-pressed"
        });
        break;
      case "i":
        this.setState({
          color: "rgb(153, 220, 166)",
          title: "title-pressed"
        });
        break;
      case "o":
        this.setState({
          color: "rgb(102, 201, 122)",
          title: "title-pressed"
        });
        break;
      case "p":
        this.setState({
          color: "rgb(97, 152, 97)",
          title: "title-pressed"
        });
        break;
      case "a":
        this.setState({
          color: "rgb(191, 191, 114)",
          title: "title-pressed"
        });
        break;
      case "s":
        this.setState({
          color: "rgb(223, 223, 111)",
          title: "title-pressed"
        });
        break;
      case "d":
        this.setState({
          color: "rgb(237, 237, 142)",
          title: "title-pressed"
        });
        break;
      case "f":
        this.setState({
          color: "rgb(255, 255, 183)",
          title: "title-pressed"
        });
        break;
      case "g":
        this.setState({
          color: "rgb(255, 255, 225)",
          title: "title-pressed"
        });
        break;
      case "h":
        this.setState({
          color: "rgb(255, 255, 183)",
          title: "title-pressed"
        });
        break;
      case "j":
        this.setState({
          color: "rgb(237, 237, 142)",
          title: "title-pressed"
        });
        break;
      case "k":
        this.setState({
          color: "rgb(223, 223, 111)",
          title: "title-pressed"
        });
        break;
      case "l":
        this.setState({
          color: "rgb(191, 191, 114)",
          title: "title-pressed"
        });
        break;
      case "z":
        this.setState({
          color: "rgb(203, 115, 130)",
          title: "title-pressed"
        });
        break;
      case "x":
        this.setState({
          color: "rgb(225, 144, 158)",
          title: "title-pressed"
        });
        break;
      case "c":
        this.setState({
          color: "rgb(249, 188, 198)",
          title: "title-pressed"
        });
        break;
      case "v":
        this.setState({
          color: "rgb(255, 217, 223)",
          title: "title-pressed"
        });
        break;
      case "b":
        this.setState({
          color: "rgb(249, 188, 198)",
          title: "title-pressed"
        });
        break;
      case "n":
        this.setState({
          color: "rgb(225, 144, 158)",
          title: "title-pressed"
        });
        break;
      case "m":
        this.setState({
          color: "rgb(203, 115, 130)",
          title: "title-pressed"
        });
        break;
      default:
        console.log("nothing");
    }
  };

  handleKeyUp = event => {
    switch (event.key) {
      case "1":
        this.setState({
          title: "title-unpressed"
        });
        break;
      case "2":
        this.setState({
          title: "title-unpressed"
        });
        break;
      case "3":
        this.setState({
          title: "title-unpressed"
        });
        break;
      case "4":
        this.setState({
          title: "title-unpressed"
        });
        break;
      case "5":
        this.setState({
          title: "title-unpressed"
        });
        break;
      case "6":
        this.setState({
          title: "title-unpressed"
        });
        break;
      case "7":
        this.setState({
          title: "title-unpressed"
        });
        break;
      case "8":
        this.setState({
          title: "title-unpressed"
        });
        break;
      case "9":
        this.setState({
          title: "title-unpressed"
        });
        break;
      case "0":
        this.setState({
          title: "title-unpressed"
        });
        break;
      case "q":
        this.setState({
          title: "title-unpressed"
        });
        break;
      case "w":
        this.setState({
          title: "title-unpressed"
        });
        break;
      case "e":
        this.setState({
          title: "title-unpressed"
        });
        break;
      case "r":
        this.setState({
          title: "title-unpressed"
        });
        break;
      case "t":
        this.setState({
          title: "title-unpressed"
        });
        break;
      case "y":
        this.setState({
          title: "title-unpressed"
        });
        break;
      case "u":
        this.setState({
          title: "title-unpressed"
        });
        break;
      case "i":
        this.setState({
          title: "title-unpressed"
        });
        break;
      case "o":
        this.setState({
          title: "title-unpressed"
        });
        break;
      case "p":
        this.setState({
          title: "title-unpressed"
        });
        break;
      case "a":
        this.setState({
          title: "title-unpressed"
        });
        break;
      case "s":
        this.setState({
          title: "title-unpressed"
        });
        break;
      case "d":
        this.setState({
          title: "title-unpressed"
        });
        break;
      case "f":
        this.setState({
          title: "title-unpressed"
        });
        break;
      case "g":
        this.setState({
          title: "title-unpressed"
        });
        break;
      case "h":
        this.setState({
          title: "title-unpressed"
        });
        break;
      case "j":
        this.setState({
          title: "title-unpressed"
        });
        break;
      case "k":
        this.setState({
          title: "title-unpressed"
        });
        break;
      case "l":
        this.setState({
          title: "title-unpressed"
        });
        break;
      case "z":
        this.setState({
          title: "title-unpressed"
        });
        break;
      case "x":
        this.setState({
          title: "title-unpressed"
        });
        break;
      case "c":
        this.setState({
          title: "title-unpressed"
        });
        break;
      case "v":
        this.setState({
          title: "title-unpressed"
        });
        break;
      case "b":
        this.setState({
          title: "title-unpressed"
        });
        break;
      case "n":
        this.setState({
          title: "title-unpressed"
        });
        break;
      case "m":
        this.setState({
          title: "title-unpressed"
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
    return (
      <header>
        <h1 className={this.state.title} style={styleObj}>
          Buttons That Make Noises
        </h1>
      </header>
    );
  }
}

export default Title;
