import "./home.css";

export interface HomeProps {}

export default function Home(props: HomeProps) {
  return (
    <section id="home" className="home-container">
      <div className="home-wrapper">
        <img
          src="images/mypic.jpg"
          alt="just my face :3"
          id="profile-picture"
        />
        <div id="info-headers">
          <h1>Elmahdi Mamoun</h1>
          <h2>Software Engineer, Frontend Developer</h2>
        </div>
        <p>
          I’m a self taugh programmer and an Alx-africa Software engineer
          Program Graduate. i have a background in electrical installation, game
          development, Agricultural and dairy farming. Seeking to get my dream
          job as a Frontend developer.
        </p>
        <a
          href={"data/resume.pdf"}
          download="resume.pdf"
          className="download-btn"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
