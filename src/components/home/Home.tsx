import "./home.css";

export interface HomeProps {}

export default function Home(props: HomeProps) {
  return (
    <section id="home" className="home-container">
      <div className="home-wrapper">
        <img src="images/mypic.jpg" alt="my picture" id="profile-picture" />
        <h1>Software Engineer, Frontend Developer</h1>
        <p>
          I’m a self taugh programmer and an Alx-africa Software engineer
          Program Graduate. i have a background in electrical installation, game
          development, Agricultural and dairy farming. Seeking to get my dream
          job as a Frontend developer.
        </p>
        <a
          href={process.env.PUBLIC_URL + "data/resume.pdf"}
          download="resume.pdf"
          className="download-btn"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
