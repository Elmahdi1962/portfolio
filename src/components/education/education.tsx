import "./education.css";
import { useEffect, useState } from "react";
import { antiPropagator } from "../../utils/utils";
import { EducationItem, IEducationItemProps } from "../education/EducationItem";

export interface EducationProps {}

interface IEducations {
  [key: string]: IEducationItemProps;
}

export default function Education(props: EducationProps) {
  const [educations, setEducations] = useState<IEducations>({});
  const [tech, setTech] = useState<boolean>(false);
  const [nonTech, setNonTech] = useState<boolean>(false);

  // fetch educations
  useEffect(() => {
    fetch("data/educations.json")
      .then((res) => res.json())
      .then((data) => {
        setEducations(data);
        Object.keys(data).forEach((key) => {
          if (!tech && data[key].type === "tech") {
            setTech(true);
          } else if (!nonTech && data[key].type !== "tech") {
            setNonTech(true);
          }
        });
      })
      .catch((err) => {
        console.log("Failed to fetch educations ERR: ", err);
      });
  }, []);

  // stop Propagation of the scroll event in the experience wrapper
  useEffect(() => {
    // get the elm
    const wrapper = document.getElementsByClassName("education-wrapper")[0];
    wrapper.addEventListener("wheel", antiPropagator);

    // cleanup
    return () => {
      wrapper.removeEventListener("wheel", antiPropagator);
    };
  }, []);

  return (
    <section id="education" className="education-container">
      <div className="education-wrapper">
        {tech && <h2 className="educations-headers">Tech Educations</h2>}

        {Object.keys(educations).length <= 0 ? (
          <h2>Loading</h2>
        ) : (
          Object.keys(educations).map(
            (key) =>
              educations[key].type === "tech" && (
                <EducationItem {...educations[key]} key={key} />
              )
          )
        )}

        {nonTech && <h2 className="educations-headers">Non-Tech Educations</h2>}

        {Object.keys(educations).length <= 0 ? (
          <h2>Loading</h2>
        ) : (
          Object.keys(educations).map(
            (key) =>
              educations[key].type !== "tech" && (
                <EducationItem {...educations[key]} key={key} />
              )
          )
        )}
      </div>
    </section>
  );
}
