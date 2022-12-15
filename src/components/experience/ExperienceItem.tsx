import * as React from "react";
import "./experienceItem.css";

export interface IExperienceItemProps {
  title: String;
  company: string;
  from: string;
  to: string;
  description: string;
  type: string;
}

export function ExperienceItem(props: IExperienceItemProps) {
  return (
    <div className="experience-item">
      <p className="experience-title">{props.title}</p>
      <p className="experience-company">at {props.company}</p>
      <p className="experience-time">
        from {props.from} to {props.to}
      </p>
      <p className="experience-description">{props.description}</p>
    </div>
  );
}
