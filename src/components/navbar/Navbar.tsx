import "./navbar.css";
import { useEffect } from "react";

export interface NavbarProps {}

export default function Navbar(props: NavbarProps) {
  const scrollSmoothner = (e: any | null) => {
    e?.preventDefault();
    if (e !== null && e.target !== null) {
      document
        ?.querySelector(
          (e.target as HTMLAnchorElement).getAttribute("href") || ""
        )
        ?.scrollIntoView({
          behavior: "smooth",
        });
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
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
