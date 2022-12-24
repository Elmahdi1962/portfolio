import "./projects.css";
import { useEffect, useState } from "react";
import { antiPropagator } from "../../utils/utils";
import { IProjectItemProps, ProjectItem } from "./ProjectItem";

export interface ProjectsProps {}

interface IProjects {
  [key: string]: IProjectItemProps;
}

export default function Projects(props: ProjectsProps) {
  const [projects, setProjects] = useState<IProjects>({});

  // fetch experiences
  useEffect(() => {
    fetch("data/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      })
      .catch((err) => {
        console.log("Failed to fetch projects ERR: ", err);
      });
  }, []);

  // stop Propagation of the scroll event in the projects wrapper
  useEffect(() => {
    // get the elm
    const wrapper = document.getElementsByClassName("projects-wrapper")[0];
    wrapper.addEventListener("wheel", antiPropagator);

    // cleanup
    return () => {
      wrapper.removeEventListener("wheel", antiPropagator);
    };
  }, []);
  return (
    <section id="projects" className="projects-container">
      <div className="projects-wrapper">
        <h1 className="projects-header">Projects</h1>
        {Object.keys(projects).map((key) => (
          <ProjectItem {...projects[key]} key={key} />
        ))}
      </div>
    </section>
  );
}
