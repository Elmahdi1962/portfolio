import "./educationItem.css";

export interface IEducationItemProps {
  title: String;
  school: string;
  from: string;
  to: string;
  description: string;
  type: string;
  certs: [string];
}

export function EducationItem(props: IEducationItemProps) {
  return (
    <div className="education-item">
      <p className="education-title">{props.title}</p>
      <p className="education-school">at {props.school}</p>
      <p className="education-time">
        from {props.from} to {props.to}
      </p>
      <p className="education-certs">
        {props.certs.map((path, idx) => (
          <a href={"data/certifications/" + path} key={path} download>
            {path}
          </a>
        ))}
      </p>
      <p className="education-description">{props.description}</p>
    </div>
  );
}
