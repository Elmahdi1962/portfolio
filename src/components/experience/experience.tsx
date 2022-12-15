import "./experience.css";
import { useState, useEffect } from "react";
import { ExperienceItem, IExperienceItemProps } from "./ExperienceItem";

export interface ExperienceProps {}

interface IExperiences {
  [key: string]: IExperienceItemProps;
}

export default function Experience(props: ExperienceProps) {
  const [experiences, setExperiences] = useState<IExperiences>({});
  const [tech, setTech] = useState<boolean>(false);
  const [nonTech, setNonTech] = useState<boolean>(false);

  // fetch experiences
  useEffect(() => {
    fetch("data/experiences.json")
      .then((res) => res.json())
      .then((data) => {
        setExperiences(data);
        Object.keys(data).forEach((key) => {
          if (!tech && data[key].type === "tech") {
            setTech(true);
          } else if (!nonTech && data[key].type !== "tech") {
            setNonTech(true);
          }
        });
      })
      .catch((err) => {
        console.log("Failed to fetch experiences ERR: ", err);
      });
  }, []);

  return (
    <section id="experience" className="experience-container">
      <div className="experience-wrapper">
        {tech && <h2 className="experiences-headers">Tech Experiences</h2>}

        {Object.keys(experiences).length <= 0 ? (
          <h2>Loading</h2>
        ) : (
          Object.keys(experiences).map((key) =>
            experiences[key].type === "tech" ? (
              <ExperienceItem {...experiences[key]} />
            ) : (
              <></>
            )
          )
        )}

        {nonTech && (
          <h2 className="experiences-headers">Non-Tech Experiences</h2>
        )}

        {Object.keys(experiences).length <= 0 ? (
          <h2>Loading</h2>
        ) : (
          Object.keys(experiences).map((key) =>
            experiences[key].type !== "tech" ? (
              <ExperienceItem {...experiences[key]} />
            ) : (
              <></>
            )
          )
        )}
      </div>
    </section>
  );
}
