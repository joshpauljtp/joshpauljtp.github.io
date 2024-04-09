import Gallery from "../common/Gallery";
import Snapshot from "../common/Snapshot";
import HeroAnim from "./HeroAnim";
import "./styles.scss";

import Assistant2 from "@/assets/Magnifi/Assistant 2.jpg";
import Charts from "@/assets/Magnifi/Charts.png";
import DiscoverPDP from "@/assets/Magnifi/Discover+PDP.png";
import LoggedInHomePage from "@/assets/Magnifi/LIHP.png";

function Magnifi() {
  const title = "Magnifi";
  const subtitle = `“AI for your financial future”`;
  const details = {
    Role: "Frontend Developer",
    Duration: `Oct '22 - Present`,
  };
  const tech = [
    "Next.js",
    "Sanity",
    "Emotion/Styled",
    "React Query",
    "React Hook Form",
    "Yup",
    "Recharts",
    "WebSocket",
    "Server-Sent Events",
    "Redux",
    "Material UI",
  ];
  const responsibilities = (
    <>
      I'm currently working on Magnifi, working directly with product, design,
      backend and QA teams in creating numerous features for users - including
      dynamic charts, realtime data parsing, etc.
      <br />
      Jointly led UI development of rebrand/refactor of Magnifi, moving from a
      CRA codebase to Next.js, increasing performance by x% and user traffic by
      x%.
      <br />
      Led UI development of Franklin Templeton partner site - a unique slice of
      the Magnifi universe, for select Franklin Templeton customers.
      <br />
      Crafted robust core components for component composition, and dynamic
      theming systems for handling styling of colours, typography, breakpoints,
      etc.
      <br />
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
      <Gallery images={[LoggedInHomePage, Assistant2, Charts, DiscoverPDP]} />
    </>
  );
}

export default Magnifi;
