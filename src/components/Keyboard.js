import React from "react";
import Card from "./Card";
// pads 1-0 sounds
import Banjoa3f from "../assets/Banjo/banjo-a3-forte.mp3";
import Banjoa3p from "../assets/Banjo/banjo-a3-piano.mp3";
import Banjoa4f from "../assets/Banjo/banjo-a4-forte.mp3";
import Banjoa4p from "../assets/Banjo/banjo-a4-piano.mp3";
import Banjoa5f from "../assets/Banjo/banjo-a5-forte.mp3";
import Banjoa5p from "../assets/Banjo/banjo-a5-piano.mp3";
import Banjoas3f from "../assets/Banjo/banjo-as3-forte.mp3";
import Banjoas3p from "../assets/Banjo/banjo-as3-piano.mp3";
import Banjoas4f from "../assets/Banjo/banjo-as4-forte.mp3";
import Banjoas4p from "../assets/Banjo/banjo-as4-piano.mp3";
// pads q-p sounds
import Banjoas5f from "../assets/Banjo/banjo-as5-forte.mp3";
import Banjoas5p from "../assets/Banjo/banjo-as5-piano.mp3";
import Banjob3f from "../assets/Banjo/banjo-b3-forte.mp3";
import Banjob3p from "../assets/Banjo/banjo-b3-piano.mp3";
import Banjob4f from "../assets/Banjo/banjo-b4-forte.mp3";
import Banjob4p from "../assets/Banjo/banjo-b4-piano.mp3";
import Banjob5f from "../assets/Banjo/banjo-b5-forte.mp3";
import Banjob5p from "../assets/Banjo/banjo-b5-piano.mp3";
import Banjoc3f from "../assets/Banjo/banjo-c3-forte.mp3";
import Banjoc3p from "../assets/Banjo/banjo-c3-piano.mp3";
// pads a-l sounds
import Banjoc4f from "../assets/Banjo/banjo-c4-forte.mp3";
import Banjoc4p from "../assets/Banjo/banjo-c4-piano.mp3";
import Banjoc5f from "../assets/Banjo/banjo-c5-forte.mp3";
import Banjoc5p from "../assets/Banjo/banjo-c5-piano.mp3";
import Banjoc6f from "../assets/Banjo/banjo-c6-forte.mp3";
import Banjocs3f from "../assets/Banjo/banjo-cs3-forte.mp3";
import Banjocs3p from "../assets/Banjo/banjo-cs3-piano.mp3";
import Banjocs4f from "../assets/Banjo/banjo-cs4-forte.mp3";
import Banjocs4p from "../assets/Banjo/banjo-cs4-piano.mp3";
// pads z-m sounds
import Banjocs5f from "../assets/Banjo/banjo-cs5-forte.mp3";
import Banjocs6f from "../assets/Banjo/banjo-cs6-forte.mp3";
import Banjod3f from "../assets/Banjo/banjo-d3-forte.mp3";
import Banjod3p from "../assets/Banjo/banjo-d3-piano.mp3";
import Banjod4f from "../assets/Banjo/banjo-d4-forte.mp3";
import Banjod4p from "../assets/Banjo/banjo-d4-piano.mp3";
import Banjod5f from "../assets/Banjo/banjo-d5-forte.mp3";
// pads 1-0 consts
const banjoa3f = new Audio(Banjoa3f);
const banjoa3p = new Audio(Banjoa3p);
const banjoa4f = new Audio(Banjoa4f);
const banjoa4p = new Audio(Banjoa4p);
const banjoa5f = new Audio(Banjoa5f);
const banjoa5p = new Audio(Banjoa5p);
const banjoas3f = new Audio(Banjoas3f);
const banjoas3p = new Audio(Banjoas3p);
const banjoas4f = new Audio(Banjoas4f);
const banjoas4p = new Audio(Banjoas4p);
// pads q-p consts
const banjoas5f = new Audio(Banjoas5f);
const banjoas5p = new Audio(Banjoas5p);
const banjob3f = new Audio(Banjob3f);
const banjob3p = new Audio(Banjob3p);
const banjob4f = new Audio(Banjob4f);
const banjob4p = new Audio(Banjob4p);
const banjob5f = new Audio(Banjob5f);
const banjob5p = new Audio(Banjob5p);
const banjoc3f = new Audio(Banjoc3f);
const banjoc3p = new Audio(Banjoc3p);
// pads a=l consts
const banjoc4f = new Audio(Banjoc4f);
const banjoc4p = new Audio(Banjoc4p);
const banjoc5f = new Audio(Banjoc5f);
const banjoc5p = new Audio(Banjoc5p);
const banjoc6f = new Audio(Banjoc6f);
const banjocs3f = new Audio(Banjocs3f);
const banjocs3p = new Audio(Banjocs3p);
const banjocs4f = new Audio(Banjocs4f);
const banjocs4p = new Audio(Banjocs4p);
// pads z-m consts
const banjocs5f = new Audio(Banjocs5f);
const banjocs6f = new Audio(Banjocs6f);
const banjod3f = new Audio(Banjod3f);
const banjod3p = new Audio(Banjod3p);
const banjod4f = new Audio(Banjod4f);
const banjod4p = new Audio(Banjod4p);
const banjod5f = new Audio(Banjod5f);

class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  escFunction(event) {
    if (event.key === "g") {
      console.log("hello");
      //Do whatever when esc is pressed
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleClick, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleClick, false);
  }

  handleClick(event) {
    if (event.key === "1") {
      banjoa3f.currentTime = 0.1;
      banjoa3f.play();
    }
    if (event.key === "2") {
      banjoa3p.currentTime = 0.1;
      banjoa3p.play();
    }
    if (event.key === "3") {
      banjoa4f.currentTime = 0.1;
      banjoa4f.play();
    }
    if (event.key === "4") {
      banjoa4p.currentTime = 0.1;
      banjoa4p.play();
    }
    if (event.key === "5") {
      banjoa5f.currentTime = 0.1;
      banjoa5f.play();
    }
    if (event.key === "6") {
      banjoa5p.currentTime = 0.1;
      banjoa5p.play();
    }
    if (event.key === "7") {
      banjoas3f.currentTime = 0.1;
      banjoas3f.play();
    }
    if (event.key === "8") {
      banjoas3p.currentTime = 0.1;
      banjoas3p.play();
    }
    if (event.key === "9") {
      banjoas3p.currentTime = 0.1;
      banjoas3p.play();
    }
    if (event.key === "0") {
      banjoas4f.currentTime = 0.1;
      banjoas4f.play();
    }
    if (event.key === "q") {
      banjoas4p.currentTime = 0.1;
      banjoas4p.play();
    }
    if (event.key === "w") {
      banjoas5f.currentTime = 0.1;
      banjoas5f.play();
    }
    if (event.key === "e") {
      banjoas5p.currentTime = 0.1;
      banjoas5p.play();
    }
    if (event.key === "r") {
      banjob3f.currentTime = 0.1;
      banjob3f.play();
    }
    if (event.key === "t") {
      banjob3p.currentTime = 0.1;
      banjob3p.play();
    }
    if (event.key === "y") {
      banjob4f.currentTime = 0.1;
      banjob4f.play();
    }
    if (event.key === "u") {
      banjob4p.currentTime = 0.1;
      banjob4p.play();
    }
    if (event.key === "i") {
      banjob5f.currentTime = 0.1;
      banjob5f.play();
    }
    if (event.key === "o") {
      banjob5p.currentTime = 0.1;
      banjob5p.play();
    }
    if (event.key === "p") {
      banjoc3f.currentTime = 0.1;
      banjoc3f.play();
    }
    if (event.key === "a") {
      banjoc3p.currentTime = 0.1;
      banjoc3p.play();
    }
    if (event.key === "s") {
      banjoc4f.currentTime = 0.1;
      banjoc4f.play();
    }
    if (event.key === "d") {
      banjoc4p.currentTime = 0.1;
      banjoc4p.play();
    }
    if (event.key === "f") {
      banjoc5f.currentTime = 0.1;
      banjoc5f.play();
    }
    if (event.key === "g") {
      banjoc5p.currentTime = 0.1;
      banjoc5p.play();
    }
    if (event.key === "h") {
      banjoc6f.currentTime = 0.1;
      banjoc6f.play();
    }
    if (event.key === "j") {
      banjocs3f.currentTime = 0.1;
      banjocs3f.play();
    }
    if (event.key === "k") {
      banjocs3p.currentTime = 0.1;
      banjocs3p.play();
    }
    if (event.key === "l") {
      banjocs4f.currentTime = 0.1;
      banjocs4f.play();
    }
    if (event.key === "z") {
      banjocs4p.currentTime = 0.1;
      banjocs4p.play();
    }
    if (event.key === "x") {
      banjocs5f.currentTime = 0.1;
      banjocs5f.play();
    }
    if (event.key === "c") {
      banjocs6f.currentTime = 0.1;
      banjocs6f.play();
    }
    if (event.key === "v") {
      banjod3f.currentTime = 0.1;
      banjod3f.play();
    }
    if (event.key === "b") {
      banjod3p.currentTime = 0.1;
      banjod3p.play();
    }
    if (event.key === "n") {
      banjod4f.currentTime = 0.1;
      banjod4f.play();
    }
    if (event.key === "m") {
      banjod4p.currentTime = 0.1;
      banjod4p.play();
    }
  }

  handleClick1 = event => {
    banjoa3f.currentTime = 0.1;
    banjoa3f.play();
  };
  handleClick2 = event => {
    banjoa3p.currentTime = 0.1;
    banjoa3p.play();
  };
  handleClick3 = event => {
    banjoa4f.currentTime = 0.1;
    banjoa4f.play();
  };
  handleClick4 = event => {
    banjoa4p.currentTime = 0.1;
    banjoa4p.play();
  };
  handleClick5 = event => {
    banjoa5f.currentTime = 0.1;
    banjoa5f.play();
  };
  handleClick6 = event => {
    banjoa5p.currentTime = 0.1;
    banjoa5p.play();
  };
  handleClick7 = event => {
    banjoas3f.currentTime = 0.1;
    banjoas3f.play();
  };
  handleClick8 = event => {
    banjoas3p.currentTime = 0.1;
    banjoas3p.play();
  };
  handleClick9 = event => {
    banjoas4f.currentTime = 0.1;
    banjoas4f.play();
  };
  handleClick0 = event => {
    banjoas4p.currentTime = 0.1;
    banjoas4p.play();
  };

  //   pad keys q-p on clicks
  handleClickQ = event => {
    banjoas5f.currentTime = 0.1;
    banjoas5f.play();
  };
  handleClickW = event => {
    banjoas5p.currentTime = 0.1;
    banjoas5p.play();
  };
  handleClickE = event => {
    banjob3f.currentTime = 0.1;
    banjob3f.play();
  };
  handleClickR = event => {
    banjob3p.currentTime = 0.1;
    banjob3p.play();
  };
  handleClickT = event => {
    banjob4f.currentTime = 0.1;
    banjob4f.play();
  };
  handleClickY = event => {
    banjob4p.currentTime = 0.1;
    banjob4p.play();
  };
  handleClickU = event => {
    banjob5f.currentTime = 0.1;
    banjob5f.play();
  };
  handleClickI = event => {
    banjob5p.currentTime = 0.1;
    banjob5p.play();
  };
  handleClickO = event => {
    banjoc3f.currentTime = 0.1;
    banjoc3f.play();
  };
  handleClickP = event => {
    banjoc3p.currentTime = 0.1;
    banjoc3p.play();
  };

  //   pad keys a-l on clicks
  handleClickA = event => {
    banjoc4f.currentTime = 0.1;
    banjoc4f.play();
  };
  handleClickS = event => {
    banjoc4p.currentTime = 0.1;
    banjoc4p.play();
  };
  handleClickD = event => {
    banjoc5f.currentTime = 0.1;
    banjoc5f.play();
  };
  handleClickF = event => {
    banjoc5p.currentTime = 0.1;
    banjoc5p.play();
  };
  handleClickG = event => {
    banjoc6f.currentTime = 0.1;
    banjoc6f.play();
  };
  handleClickH = event => {
    banjocs3f.currentTime = 0.1;
    banjocs3f.play();
  };
  handleClickJ = event => {
    banjocs3p.currentTime = 0.1;
    banjocs3p.play();
  };
  handleClickK = event => {
    banjocs4f.currentTime = 0.1;
    banjocs4f.play();
  };
  handleClickL = event => {
    banjocs4p.currentTime = 0.1;
    banjocs4p.play();
  };

  // pad keys z-m on clicks
  handleClickZ = event => {
    banjocs5f.currentTime = 0.1;
    banjocs5f.play();
  };
  handleClickX = event => {
    banjocs6f.currentTime = 0.1;
    banjocs6f.play();
  };
  handleClickC = event => {
    banjod3f.currentTime = 0.1;
    banjod3f.play();
  };
  handleClickV = event => {
    banjod3p.currentTime = 0.1;
    banjod3p.play();
  };
  handleClickB = event => {
    banjod4f.currentTime = 0.1;
    banjod4f.play();
  };
  handleClickN = event => {
    banjod4p.currentTime = 0.1;
    banjod4p.play();
  };
  handleClickM = key => {
    banjod5f.currentTime = 0.1;
    banjod5f.play();
  };

  render() {
    console.log(this.props.sound_kits);
    return (
      <div>
        <div className="animations">Animations Container</div>
        <div className="recording">Recording</div>
        <Card sound_kits={this.props.sound_kits} />
        <div className="pads">
          <div className="num1-0">
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
          <div className="row-q">
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
          <div className="row-a">
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
          <div className="row-z">
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
        <div className="beat-mapping">Beat Map</div>
      </div>
    );
  }
}

export default Keyboard;
