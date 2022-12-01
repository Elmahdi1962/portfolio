import "./navbar.css";

export interface NavbarProps {}

export default function Navbar(props: NavbarProps) {
  return (
    <header className="navbar">
      <nav>
        <a href="/">Home</a>
        <a href="/skills">Skills</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}
