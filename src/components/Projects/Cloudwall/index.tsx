import Snapshot from "../common/Snapshot";
import HeroAnim from "./HeroAnim";
import "./styles.scss";

import Intro from "@/assets/Cloudwall/Intro.png";
import MobileMocks from "@/assets/Cloudwall/Mobile Mocks.png";
import Nav from "@/assets/Cloudwall/Nav.png";
import Values from "@/assets/Cloudwall/Values.png";
import Gallery from "../common/Gallery";

function Cloudwall() {
  const title = "Cloudwall Capital";
  const subtitle = "Risk platform technology provider";
  const details = {
    Role: "Lead Frontend Developer",
    Duration: `Dec '22`,
    Team: "2 devs, 1 design, 1 product",
  };
  const tech = [
    "Gatsby",
    "Sanity",
    "Formspree",
    "styled-components",
    "Bootstrap",
  ];

  const responsibilities = (
    <>
      <p>
        Cloudwall Capital's marketing site was the first project I was tasked
        with a lead development role.
      </p>
      <p>
        Though in a technical sense, there's nothing outstanding about this
        project, it served as a valuable learning experience in leading the
        development side, from working direclty with the client in creating and
        iterating the site, to managing the team.
      </p>
    </>
  );

  const snapshotProps = { title, subtitle, details, tech, responsibilities };

  return (
    <>
      <Snapshot {...snapshotProps}>
        <HeroAnim />
      </Snapshot>
      <Gallery images={[Intro, Values, MobileMocks, Nav]} />
    </>
  );
}

export default Cloudwall;
