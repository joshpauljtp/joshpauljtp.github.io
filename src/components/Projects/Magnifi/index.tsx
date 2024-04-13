import Gallery from "../common/Gallery";
import Snapshot from "../common/Snapshot";
import HeroAnim from "./HeroAnim";
import "./styles.scss";

import Assistant2 from "@/assets/Magnifi/Assistant 2.jpg";
import Assistant3 from "@/assets/Magnifi/Assistant 3.png";
import Charts from "@/assets/Magnifi/Charts.png";
import DiscoverPDP from "@/assets/Magnifi/Discover+PDP.png";
import LoggedInHomePage from "@/assets/Magnifi/LIHP.png";
import Treemap from "@/assets/Magnifi/Treemap.png";

function Magnifi() {
  const title = "Magnifi";
  const subtitle = `GenAI Trading Platform`;
  const details = {
    Role: "Frontend Developer",
    Duration: `Nov '22 - Present`,
    Employer: "TIFIN",
    Link: (
      <a
        href="https://www.magnifi.com"
        rel="noreferrer noopener"
        target="_blank"
      >
        magnifi.com
      </a>
    ),
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
      <p>
        I own roughly 70% of the UI side of Magnifi, including it's Cart,
        trading functionalities, realtime pricing integration, majority of its
        dynamic charts, and many more.
      </p>
      <p>
        I've also created a robust core components for component composition,
        and dynamic theming systems for handling styling of colours, typography,
        breakpoints, etc.
      </p>
      <p>
        Over the time I've spent working on Magnifi, I've worked directly with
        various stakeholders in creating many of these features, delivered in
        record time as MVPs, to later providing maintenance and scalability
        support.
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
      <Gallery
        images={[
          LoggedInHomePage,
          Assistant2,
          Charts,
          DiscoverPDP,
          Treemap,
          Assistant3,
        ]}
      />
    </>
  );
}

export default Magnifi;
