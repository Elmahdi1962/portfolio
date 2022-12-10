import Home from "./components/home/Home";
import Navbar, { clickedLink } from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import "./app.css";

import { useEffect } from "react";
import Experience from "./components/experience/experience";

// copy of the clickedLink imported variable to be able to change it
let clickedLinkC = clickedLink;

export const angles = {
  "#home": "30deg",
  "#skills": "73deg",
  "#experience": "100deg",
  "#projects": "125deg",
  "#contact": "150deg",
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
        // check if scrolled forward or backward
        let c = 1;
        if (e.wheelDelta > 0) {
          c = -1;
        }
        // if there is a next link in the list then click that next link
        // and update clicked link variable
        if (i + c < links.length && i + c >= 0) {
          // focus the anchor
          (links[i + c] as HTMLAnchorElement).focus();
          // update clickedLinkC "clicked Link copy"
          clickedLinkC = links[i + c].getAttribute("href") || "#home";
          document?.querySelector(clickedLinkC)?.scrollIntoView({
            behavior: "smooth",
          });
          // also rotate grandient
          (container as HTMLElement).style.setProperty(
            "--angle",
            angles[clickedLinkC as keyof typeof angles]
          );
        } else {
          // else click the first link if c is 1 or last if c is -1
          if (c === 1) {
            // focus the anchor
            (links[0] as HTMLAnchorElement).focus();
            // update clickedLinkC "clicked Link copy"
            clickedLinkC = links[0].getAttribute("href") || "#home";
            document?.querySelector(clickedLinkC)?.scrollIntoView({
              behavior: "smooth",
            });
          } else {
            // focus the anchor
            (links[links.length - 1] as HTMLAnchorElement).focus();
            // update clickedLinkC "clicked Link copy"
            clickedLinkC =
              links[links.length - 1].getAttribute("href") || "#home";
            document?.querySelector(clickedLinkC)?.scrollIntoView({
              behavior: "smooth",
            });
          }
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
    (elm as HTMLElement).addEventListener("wheel", scrollSnaper);

    // remove listener on cleanUp
    return document.removeEventListener("wheel", scrollSnaper);
  }, []);
  return (
    <div className="App">
      <Navbar />
      <div id="content-container">
        <Home />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
