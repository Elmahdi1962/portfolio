import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import "./app.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content-container">
        <Home />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
