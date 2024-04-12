import Gallery from "../common/Gallery";
import Snapshot from "../common/Snapshot";
import HeroAnim from "./HeroAnim";
import "./styles.scss";

import Conspectuses from "@/assets/RayaLucaria/Conspectuses.png";
import Explore from "@/assets/RayaLucaria/Explore.png";
import Intro from "@/assets/RayaLucaria/Intro.gif";
import Rennala from "@/assets/RayaLucaria/Rennala.png";
import Rennala2 from "@/assets/RayaLucaria/Rennala2.png";
import Welcome from "@/assets/RayaLucaria/Welcome.gif";

function RayaLucaria() {
  const title = (
    <>
      The Academy of <br />
      Raya Lucaria
    </>
  );
  const subtitle = "Visual narrative desktop experience";
  const details = {
    Role: "Developer, Designer",
    Duration: `Aug '23 - Sep '23`,
  };
  const tech = [
    "React",
    "TypeScript",
    "Vite",
    "Sass",
    "React Router",
    "Web Animations API",
  ];
  const responsibilities = (
    <>
      Worked on Rooted Objects' rebrand into Rooted Company.
      <br />
      Worked on various article pages.
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
      <Gallery
        images={[Intro, Rennala, Conspectuses, Explore, Welcome, Rennala2]}
      />
    </>
  );
}

export default RayaLucaria;
