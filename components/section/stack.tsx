import {
  HTML5,
  CSS3,
  JavaScript,
  TypeScript,
  React as ReacIcon,
  NextJs,
  Dart,
  Flutter,
  NodeJs,
  ExpressJsDark,
  MySQL,
  PostgreSQL,
} from "developer-icons";

const stackItems = [
  {
    label: "HTML",
    icons: HTML5,
    taux: "95%",
  },
  {
    label: "CSS",
    icons: CSS3,
    taux: "95%",
  },
  {
    label: "JavaScript",
    icons: JavaScript,
    taux: "95%",
  },
  {
    label: "TypeScript",
    icons: TypeScript,
    taux: "95%",
  },
  {
    label: "React",
    icons: ReacIcon,
    taux: "95%",
  },
  {
    label: "Next JS",
    icons: NextJs,
    taux: "95%",
  },
  {
    label: "React Native",
    icons: ReacIcon,
    taux: "95%",
  },
  {
    label: "Dart",
    icons: Dart,
    taux: "95%",
  },
  {
    label: "Flutter",
    icons: Flutter,
    taux: "95%",
  },
  {
    label: "Adonis JS",
    icons: Flutter,
    taux: "95%",
  },
  {
    label: "Node JS",
    icons: NodeJs,
    taux: "95%",
  },
  {
    label: "Express",
    icons: ExpressJsDark,
    taux: "95%",
  },
  {
    label: "MySQL",
    icons: MySQL,
    taux: "95%",
  },
  {
    label: "Postgres",
    icons: PostgreSQL,
    taux: "95%",
  },
];

function Stack() {
  return (
    <section>
      <h3>Mon expertise</h3>
      {stackItems.map((el) => (
        <StackComponent key={el.label} />
      ))}
    </section>
  );
}

export default Stack;

const StackComponent = ({ ...props }) => {
  return (
    <div>
      <img src="" alt="" />
      <h3>{props.label}</h3>
      <span>Taux de maintrise: {props.taux}</span>
    </div>
  );
};
