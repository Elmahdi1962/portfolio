import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import "./app.css";

import { useEffect } from "react";

export let clickedLink = "#home";

function App() {
  const scrollSnaper = (e: any | null) => {
    e.preventDefault();
    // get all nav bar links that link to an id
    const links = Array.from(document.querySelectorAll('a[href^="#"]'));
    // loop thru the anchors while keeping track of index
    for (let i = 0; i < links.length; i++) {
      // if found the link that was alredy clicked
      if (links[i].getAttribute("href") === clickedLink) {
        // if there is a next link in the list then click that next link
        // and update clicked link variable
        if (i + 1 < links.length) {
          clickedLink = links[i + 1].getAttribute("href") || "";
          document?.querySelector(clickedLink)?.scrollIntoView({
            behavior: "smooth",
          });
        } else {
          // else click the first link
          clickedLink = links[0].getAttribute("href") || "";
          document?.querySelector(clickedLink)?.scrollIntoView({
            behavior: "smooth",
          });
        }
        break;
      }
    }
  };

  useEffect(() => {
    // get scrollable elm
    const elm = document.getElementById("content-container");
    // add scroll event listener
    (elm as HTMLElement).addEventListener("mousewheel", scrollSnaper);

    // remove listener on cleanUp
    return document.removeEventListener("mousewheel", scrollSnaper);
  }, []);
  return (
    <div className="App">
      <Navbar />
      <div id="content-container">
        <Home />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
