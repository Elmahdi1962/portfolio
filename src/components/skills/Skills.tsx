import "./skills.css";
import { useState, useEffect } from "react";
import { ISkillItemProps, SkillItem } from "./SkillItem";
import { antiPropagator } from "../../utils/utils";

export interface SkillsProps {}

interface iSkills {
  [key: string]: ISkillItemProps;
}

export default function Skills(props: SkillsProps) {
  const [skills, setSkills] = useState<iSkills>({});
  const [tech, setTech] = useState<boolean>(false);
  const [nonTech, setNonTech] = useState<boolean>(false);

  // fetch skills
  useEffect(() => {
    fetch("data/skills.json")
      .then((res) => res.json())
      .then((data) => {
        setSkills(data);
        Object.keys(data).forEach((key) => {
          if (!tech && data[key].type === "tech") {
            setTech(true);
          } else if (!nonTech && data[key].type !== "tech") {
            setNonTech(true);
          }
        });
      })
      .catch((err) => {
        console.log("Failed to fetch skills ERR: ", err);
      });
  }, []);

  // stop Propagation of the scroll event in the skills wrapper
  useEffect(() => {
    // get the elm
    const wrapper = document.getElementsByClassName("skills-wrapper")[0];
    wrapper.addEventListener("wheel", antiPropagator);

    // cleanup
    return () => {
      wrapper.removeEventListener("wheel", antiPropagator);
    };
  }, []);

  return (
    <section id="skills" className="skills-container">
      <div className="skills-wrapper">
        {tech && <h2 className="skillset-header">Tech Skills</h2>}

        {Object.keys(skills).length <= 0 ? (
          <h2>Loading</h2>
        ) : (
          Object.keys(skills).map(
            (key) =>
              skills[key].type === "tech" && (
                <SkillItem {...skills[key]} key={key} />
              )
          )
        )}

        {nonTech && <h2 className="skillset-header">Non-Tech Skills</h2>}

        {Object.keys(skills).length <= 0 ? (
          <h2>Loading</h2>
        ) : (
          Object.keys(skills).map(
            (key) =>
              skills[key].type !== "tech" && (
                <SkillItem {...skills[key]} key={key} />
              )
          )
        )}
      </div>
    </section>
  );
}
