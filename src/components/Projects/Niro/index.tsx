import Snapshot from "../common/Snapshot";
import HeroAnim from "./HeroAnim";
import "./styles.scss";

function Niro() {
  const title = "Niro Money";
  const subtitle = `“Personalised, Embedded, Frictionless Finance”`;
  const details = {
    Role: "Frontend Developer",
    Duration: `Aug '21 - Sep '21`,
  };
  const tech = [
    "Gatsby",
    "styled-components",
    "Formspree",
    "Bootstrap",
    "GSAP",
  ];
  const responsibilities = (
    <>
      Sole frontend developer for Niro Money's marketing site.
      <br />
      Developed the UI for Niro Money's web app, built to integrate with other
      products such as Quikr, etc.
      <br />
      Worked directly with Niro Money's tech team for deployments.
      <br />
      Actively participated in strategy meetings with Niro Money's teams for
      both projects
    </>
  );

  const snapshotProps = {
    title,
    subtitle,
    details,
    tech,
    responsibilities,
  };

  return (
    <>
      <Snapshot {...snapshotProps}>
        <HeroAnim />
      </Snapshot>
    </>
  );
}

export default Niro;
