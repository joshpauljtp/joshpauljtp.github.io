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
      <p>
        An homage to one of my favourite video games, "Elden Ring", and a side
        project to explore visual and motion design, and creative programming.
      </p>
      <p>
        One of the self-imposed challenges for this project was to avoid using
        third-party animation libraries, and to handcraft the animations myself
        using CSS and the built-in Web Animations API.
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
        images={[Intro, Rennala, Conspectuses, Explore, Welcome, Rennala2]}
      />
    </>
  );
}

export default RayaLucaria;
