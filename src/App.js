import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <section id="Intro">
        <header className="App-header">
          <h2>Hi!!!</h2>
        </header>
      </section>
      <section id="AboutMe">
        <header className="App-header">
          <h2>About Me</h2>
        </header>
      </section>
      <section id="MeraThoughts">
        <header className="App-header">
          <h2>Mera Thoughts</h2>
        </header>
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
