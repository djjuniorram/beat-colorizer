import React from "react";

class Title extends React.Component {
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
          color: "rgb(255, 200, 200)"
        });
        break;
      case "2":
        this.setState({
          color: "rgb(255, 150, 150)"
        });
        break;
      case "3":
        this.setState({
          color: "rgb(255, 100, 100)"
        });
        break;
      case "4":
        this.setState({
          color: "rgb(161, 244, 255)"
        });
        break;
      case "5":
        this.setState({
          color: "rgb(185, 131, 175)"
        });
        break;
      case "6":
        this.setState({
          color: "rgb(187, 255, 187)"
        });
        break;
      case "7":
        this.setState({
          color: "pink"
        });
        break;
      case "8":
        this.setState({
          color: "rgb(140, 140, 255)"
        });
        break;
      case "9":
        this.setState({
          color: "rgb(255, 150, 150)"
        });
        break;
      case "0":
        this.setState({
          color: "rgb(255, 200, 200)"
        });
        break;
      case "q":
        this.setState({
          color: "rgb(161, 244, 255)"
        });
        break;
      case "w":
        this.setState({
          color: "rgb(255, 255, 0)"
        });
        break;
      case "e":
        this.setState({
          color: "rgb(187, 255, 187)"
        });
        break;
      case "r":
        this.setState({
          color: "rgb(140, 140, 255)"
        });
        break;
      case "t":
        this.setState({
          color: "rgb(255, 168, 168)"
        });
        break;
      case "y":
        this.setState({
          color: "rgb(255, 255, 196)"
        });
        break;
      case "u":
        this.setState({
          color: "rgb(255, 220, 155)"
        });
        break;
      case "i":
        this.setState({
          color: "pink"
        });
        break;
      case "o":
        this.setState({
          color: "rgb(185, 131, 175)"
        });
        break;
      case "p":
        this.setState({
          color: "pink"
        });
        break;
      case "a":
        this.setState({
          color: "rgb(185, 131, 175)"
        });
        break;
      case "s":
        this.setState({
          color: "pink"
        });
        break;
      case "d":
        this.setState({
          color: "rgb(140, 140, 255)"
        });
        break;
      case "f":
        this.setState({
          color: "rgb(255, 168, 168)"
        });
        break;
      case "g":
        this.setState({
          color: "rgb(255, 255, 196)"
        });
        break;
      case "h":
        this.setState({
          color: "rgb(140, 140, 255)"
        });
        break;
      case "j":
        this.setState({
          color: "rgb(187, 255, 187)"
        });
        break;
      case "k":
        this.setState({
          color: "rgb(161, 244, 255)"
        });
        break;
      case "l":
        this.setState({
          color: "rgb(185, 131, 175)"
        });
        break;
      case "z":
        this.setState({
          color: "rgb(161, 244, 255)"
        });
        break;
      case "x":
        this.setState({
          color: "rgb(255, 220, 155)"
        });
        break;
      case "c":
        this.setState({
          color: "rgb(187, 255, 187)"
        });
        break;
      case "v":
        this.setState({
          color: "pink"
        });
        break;
      case "b":
        this.setState({
          color: "rgb(185, 131, 175)"
        });
        break;
      case "n":
        this.setState({
          color: "rgb(140, 140, 255)"
        });
        break;
      case "m":
        this.setState({
          color: "rgb(255, 168, 168)"
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
        <h1 className="title" style={styleObj}>
          Buttons That Make Noises
        </h1>
      </header>
    );
  }
}

export default Title;
