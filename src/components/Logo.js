import React from "react";
import { NavLink } from "react-router-dom";

const link = {
  width: "475px",
  padding: "2px",
  margin: "10px 6px 6px",
  fontSize: "15px",
  fontWeight: "bold",
  // background: "",
  textDecoration: "none",
  color: "white"
};

// class Logo extends React.Component {
//   render() {
//     return (
// {
/* <div className="links">
        <h1 className="logo">BTMN</h1>
      </div> */
// }
//     );
//   }
// }
class Logo extends React.Component {
  constructor(props) {
    super(props);
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
      borderColor: this.state.color
    };
    return (
      <div className="nav-bar" style={styleObj}>
        <div>
          <h1 className="logo" style={{ color: this.state.color }}>
            BTMN
          </h1>
        </div>
        <NavLink className="navbar-link" to="/home" exact style={link}>
          Home
        </NavLink>
        <NavLink className="navbar-link" to="/keyboard" exact style={link}>
          Keyboard
        </NavLink>
        <NavLink className="navbar-link" to="/signup" exact style={link}>
          Signup
        </NavLink>
        {/* <NavLink className="route-buttons" to="/keyboard" exact>
      <button className="keyboard-route-button">Keyboard</button>
    </NavLink> */}
      </div>
    );
  }
}

export default Logo;
