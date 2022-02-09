import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import MainTitle from "./components/MainTitle/MainTitle";
import AwardsRecognition from "./components/AwardsRecognition/AwardsRecognition";
import data from "./data/raw-data.json";
import proud_coder from "./images/proud_coder.svg";
import Parallax from "./components/Parallax/Parallax";
import IconSpiderWeb from "./components/IconSpiderWeb/IconSpiderWeb";
import Skills from "./components/Skills/Skills";
import ContactUs from "./components/ContactUs/ContactUs";
import MyProjects from "./components/MyProjects/MyProjects";
import IceBreaker from "./components/IceBreaker/IceBreaker";
// import ContactMe from "./components/ContactMe/ContactMe";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollState: null,
    };
  }

  handleScroll = (event) => {
    this.setState({
      scrollState: event,
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // shouldComponentUpdate()

  render() {
    return (
      <div className="app">
        <Header items={data["nav-header"]} />
        <Parallax scrollEvent={this.state.scrollState} />
        <MainTitle
          className="parallax-blend"
          items={data["job-front-title"]}
          scrollEvent={this.state.scrollState}
        />
        {/* <AwardsRecognition items={data["awards-recognition"]} /> */}
        <IconSpiderWeb>
          <Skills items={data["tech-stack"]} />
        </IconSpiderWeb>
        {/* <Skills /> */}

        <AwardsRecognition items={data["awards-recognition"]} />
        <MyProjects items={data["featured-projects"]} />
        <IceBreaker items={data["ice-breaker"]} />
        <ContactUs items={data["contact-me"]} />
        {/* <ContactMe items={data["contact-me"]} /> */}
        {/* <MainTitle
          items={data["job-front-title"]}
          scrollEvent={this.state.scrollState}
        />
        <MainTitle
          items={data["job-front-title"]}
          scrollEvent={this.state.scrollState}
        /> */}
      </div>
    );
  }
}

export default App;
