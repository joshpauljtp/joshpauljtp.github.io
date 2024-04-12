import Gallery from "../common/Gallery";
import Snapshot from "../common/Snapshot";
import HeroAnim from "./HeroAnim";
import "./styles.scss";

import Icons from "@/assets/Niro/Icons.png";
import Intro from "@/assets/Niro/Intro.gif";
import MwebApp from "@/assets/Niro/Mweb App.png";

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
      <Gallery images={[Intro, Icons, Icons, MwebApp]} />
    </>
  );
}

export default Niro;
