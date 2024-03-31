import Snapshot from "../common/Snapshot";
import HeroAnim from "./HeroAnim";
import "./styles.scss";

function Orion() {
  const title = "Orion";
  const subtitle = `AI design audit tool`;
  const details = {
    Role: "Developer, UX Designer",
    Duration: `May '21 - Jun '21`,
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
    <Snapshot {...snapshotProps}>
      <HeroAnim />
    </Snapshot>
  );
}

export default Orion;
