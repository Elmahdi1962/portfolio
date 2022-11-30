import "./navbar.css";
import { Link } from "react-router-dom";

export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  return (
    <header className="navbar">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
