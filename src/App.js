import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Particles from "react-particles-js";
import merapic from "./Assets/me.jpg";
import MeraTypewriter from "./components/Intro/MeraTypewriter";
function App() {
  return (
    <div className="App">
      <Particles
        className="background"
        width="100vw"
        height="100vh"
        params={{
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 10,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "left",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "grab",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
        }}
      />
      <Header />
      <section id="Intro">
        <header className="App-header">
          <div className="introcontainer">
            <div className="empty"></div>
            <div className="meraphoto">
              <img className="merapic" src={merapic} alt="Smiley face" />
            </div>
            <div className="meradescription">
                <MeraTypewriter/>
            </div>
          </div>
        </header>
      </section>
      <section id="AboutMe">
        <header className="App-header">
          <h2>About Me</h2>
        </header>
      </section>
      <section id="MeraThoughts">
        <header className="App-header">Mera Thoughts</header>
      </section>
      <section id="MeraExperience">
        <header className="App-header">
          <h2>Mera Experience</h2>
        </header>
      </section>
      <section id="MeraProjects">
        <header className="App-header">
          <h2>Mera Projects</h2>
        </header>
      </section>
      <section id="ContactMe">
        <header className="App-header">
          <h2>Contact Me</h2>
        </header>
      </section>
    </div>
  );
}

export default App;
