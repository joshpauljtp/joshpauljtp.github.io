import Gallery from "../common/Gallery";
import Snapshot from "../common/Snapshot";
import HeroAnim from "./HeroAnim";
import "./styles.scss";

import Collage from "@/assets/Orion/Collage.png";
import Intro from "@/assets/Orion/Intro.png";
import ProjectFlow from "@/assets/Orion/Project Flow.png";
import ScoreCards from "@/assets/Orion/Score Cards.png";

function Orion() {
  const title = "Orion";
  const subtitle = `AI design audit tool`;
  const details = {
    Role: "Developer, UX Designer",
    Duration: `Aug '23`,
    Link: (
      <a
        href="https://orion-ai-six.vercel.app/"
        rel="noreferrer noopener"
        target="_blank"
      >
        orion-ai-six.vercel.app
      </a>
    ),
  };
  const tech = [
    "Next.js",
    "Open AI APIs",
    "styled-components",
    "Axios",
    "React Query",
    "Recharts",
  ];
  const responsibilities = (
    <>
      <p>
        Orion is a POC, created in 2 days, and ultimately the winner of TIFIN's
        AI Hackathon in 2023.
      </p>
      <p>
        Orion automates the traditionally manual design audit process with
        pinpoint accuracy, allowing to meet tight project deadlines with utmost
        confidence, along with comprehensive insights via its scoring and
        component breakdown systems.
      </p>
      <p>
        In addition to its development, I helped with its designs, from the
        basic UX flow, to aiding in its visual design style guide.
      </p>
    </>
  );

  const snapshotProps = {
    title,
    subtitle,
    details,
    tech,
    responsibilities,
    descriptionTitle: "Summary",
  };

  return (
    <>
      <Snapshot {...snapshotProps}>
        <HeroAnim />
      </Snapshot>
      <Gallery images={[Intro, Collage, ScoreCards, ProjectFlow]} />
    </>
  );
}

export default Orion;
