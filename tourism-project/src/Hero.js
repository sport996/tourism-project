import React from "react";
import { Component } from "react";
import "../src/App.css";
import logo from "./logo.png";

var img = [
  "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fintelilight.eu%2Fwp-content%2Fuploads%2F2014%2F04%2FinteliLIGHT%25C2%25AE-PLC-Streetlight-Control-in-Riyadh-the-capital-of-the-Kingdom-of-Saudi-Arabia.jpg&f=1&nofb=1",
  "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwaldorfastoria3.hilton.com%2Fresources%2Fmedia%2Fwa%2FJEDWAWA%2Fen_US%2Fimg%2Fshared%2Fbasic_content_item%2FWA_exterior02.jpg&f=1&nofb=1"
];
// var i = 0;

class Hero extends Component {
  state = {
    img: [
      "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fintelilight.eu%2Fwp-content%2Fuploads%2F2014%2F04%2FinteliLIGHT%25C2%25AE-PLC-Streetlight-Control-in-Riyadh-the-capital-of-the-Kingdom-of-Saudi-Arabia.jpg&f=1&nofb=1",
      "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwaldorfastoria3.hilton.com%2Fresources%2Fmedia%2Fwa%2FJEDWAWA%2Fen_US%2Fimg%2Fshared%2Fbasic_content_item%2FWA_exterior02.jpg&f=1&nofb=1",
      "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.lstatic.org%2FUserFiles%2Fimages%2F2017%2Fdivert2018%2F10-oct%2FDqm6x5ZW4AAB3EB.jpg&f=1&nofb=1"
    ],
    i: ""
  };

  time = () => {
    if (this.state.i === 2) {
      this.setState({
        i: 0
      });

      // console.log("is zero " + this.state.i);
    } else {
      var i = Number(this.state.i) + 1;
      this.setState({
        i: i
      });
      // console.log("is one " + this.state.i);
    }
    return img[i];
  };
  componentDidMount() {
    setInterval(this.time, 2000);
  }

  render() {
    return (
      <div>
        <main
          style={{ backgroundImage: `url(${this.state.img[this.state.i]})` }}
          className="cover-page"
          id="hero"
        >
          <section className="wrapped-page">
            <div className="item-center">
              <h1>
                <img src={'https://i.postimg.cc/Qxg0FJbs/logo.png'} width="60" height="70" /> Tourism in Saudi
                Arabia
              </h1>
              <br></br>
              <h3>Tours | Travel | Guide</h3>
              <br></br>
              <div className="active-pink-3 active-pink-4 mb-4">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Where To (:"
                  aria-label="Search"
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Hero;
