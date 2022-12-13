import "./skillitem.css";

export interface ISkillItemProps {
  title: string;
  experience: string;
  icon: string;
  type: string;
}

export function SkillItem(props: ISkillItemProps) {
  return (
    <div className="skill-item">
      <img
        className="skill-icon"
        src={"images/skills/" + props.icon}
        alt="icon of the skill"
      />
      <div className="skill-info">
        <p>{props.title}</p>
        <p>Exp ~ {props.experience}</p>
      </div>
    </div>
  );
}
