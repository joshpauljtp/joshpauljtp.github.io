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
      Led UI development of Niro Money's marketing site.
      <br />
      Worked directly with the Niro Money's mobile-only web-app.
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
