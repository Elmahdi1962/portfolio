import Home from "./components/home/Home";
import Navbar, { clickedLink } from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import "./app.css";

import { useEffect } from "react";

let clickedLinkC = clickedLink;

export const angles = {
  "#home": "53deg",
  "#skills": "73deg",
  "#projects": "100deg",
  "#contact": "125deg",
};

function App() {
  const scrollSnaper = (e: any | null) => {
    e.preventDefault();
    const container = document.querySelector("#content-container");
    // get all nav bar links that link to an id
    const links = Array.from(document.querySelectorAll('a[href^="#"]'));
    // loop thru the anchors while keeping track of index
    for (let i = 0; i < links.length; i++) {
      // if found the link that was alredy clicked
      if (links[i].getAttribute("href") === clickedLinkC) {
        // if there is a next link in the list then click that next link
        // and update clicked link variable
        if (i + 1 < links.length) {
          clickedLinkC = links[i + 1].getAttribute("href") || "";
          document?.querySelector(clickedLinkC)?.scrollIntoView({
            behavior: "smooth",
          });
          // also rotate grandient
          (container as HTMLElement).style.setProperty(
            "--angle",
            angles[clickedLinkC as keyof typeof angles]
          );
        } else {
          // else click the first link
          clickedLinkC = links[0].getAttribute("href") || "";
          document?.querySelector(clickedLinkC)?.scrollIntoView({
            behavior: "smooth",
          });
          // also rotate grandient
          (container as HTMLElement).style.setProperty(
            "--angle",
            angles[clickedLinkC as keyof typeof angles]
          );
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
