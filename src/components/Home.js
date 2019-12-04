import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="title-div">
          <p className="welcome-title">Welcome to</p>
          <h1 className="home-title">Buttons That Make Noises</h1>
        </div>
        <p className="continue-text">Select an option above to continue...</p>
      </div>
    );
  }
}

export default Home;
