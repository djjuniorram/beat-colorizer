import React, { Component } from "react";
// import { Link } from "react-router-dom";

class Card extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.showMenu}>Show menu</button>

        {this.state.showMenu ? (
          <div
            className="menu"
            ref={element => {
              this.dropdownMenu = element;
            }}
          >
            {this.props.sound_kits.map((kit, index) => (
              <button key={index} onClick={this.props.changeKit1()}>
                {kit.name}
              </button>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Card;
