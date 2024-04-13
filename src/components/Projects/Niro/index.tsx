import Gallery from "../common/Gallery";
import Snapshot from "../common/Snapshot";
import HeroAnim from "./HeroAnim";
import "./styles.scss";

import Icons from "@/assets/Niro/Icons.png";
import Intro from "@/assets/Niro/Intro.gif";
import MwebApp from "@/assets/Niro/Mweb App.png";

function Niro() {
  const title = "Niro";
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
      <p>
        I was the sole developer for Niro's marketing site, working directly
        with the client in creating and iterating the site, to finally assisting
        their tech team in its deployment.
      </p>
      <p>
        I also worked on Niro's m-web app, from cleaning up its UI as per the
        designs, to integrating various form validations and restrictions,
        keeping in line with the requirements.
      </p>
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
