import "./navbar.css";
import { angles } from "../../App";
import { useEffect } from "react";

export interface NavbarProps {}

export let clickedLink = "#home";

export default function Navbar(props: NavbarProps) {
  const scrollSmoothner = (e: any | null) => {
    e?.preventDefault();
    // focus the anchor
    e.target.focus();
    // get container of all the main sections
    const container = document.querySelector("#content-container");
    // scroll to the appropriate section
    if (e !== null && e.target !== null) {
      const id = (e.target as HTMLAnchorElement).getAttribute("href") || "";
      document?.querySelector(id)?.scrollIntoView({
        behavior: "smooth",
      });
      // update clickedLink
      clickedLink = id;
      // also rotate grandient
      (container as HTMLElement).style.setProperty(
        "--angle",
        angles[clickedLink as keyof typeof angles]
      );
    }
  };

  useEffect(() => {
    // get all anchor tags that link to an id
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      // add click event listener with the scroll smoothner handler
      anchor.addEventListener("click", scrollSmoothner);
    });

    // remove listeners
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", scrollSmoothner);
      });
    };
  }, []);
  return (
    <header className="navbar">
      <nav>
        <a href="#home">Home</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
