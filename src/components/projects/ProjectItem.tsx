import "./projectItem.css";
import { RiComputerFill, RiGithubFill } from "react-icons/ri";

export interface IProjectItemProps {
  title: string;
  description: string;
  thumbnail: string;
  demo: string;
  github: string;
}

export function ProjectItem(props: IProjectItemProps) {
  return (
    <div className="project-item">
      <img
        src={"images/projects/" + props.thumbnail}
        className="project-thumbnail"
      />
      <h2 className="project-title">{props.title}</h2>
      <p className="project-desc">{props.description}</p>
      <div className="project-links">
        {props.demo !== "" && (
          <a title="Live Demo" href={props.demo} target="_blank">
            <RiComputerFill style={{ fontSize: "25px" }} />
          </a>
        )}

        {props.github !== "" && (
          <a title="Github Repo" href={props.github} target="_blank">
            <RiGithubFill style={{ fontSize: "25px" }} />
          </a>
        )}
      </div>
    </div>
  );
}
