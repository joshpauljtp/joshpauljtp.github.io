import Snapshot from "../common/Snapshot";
import HeroAnim from "./HeroAnim";
import "./styles.scss";

function RootedCompany() {
  const title = "Rooted Company";
  const subtitle = `Online boutique and publication`;
  const details = {
    Role: "Junior Frontend Developer",
    Duration: `May '21 - Jun '21`,
  };
  const tech = [
    "Next.js",
    "styled-components",
    "Formspree",
    "Bootstrap",
    "Shopify CMS",
    "GSAP",
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

export default RootedCompany;
