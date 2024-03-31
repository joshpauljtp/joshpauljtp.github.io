import Snapshot from "../common/Snapshot";
import HeroAnim from "./HeroAnim";
import "./styles.scss";

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
    </>
  );
}

export default RayaLucaria;
