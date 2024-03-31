import Snapshot from "../common/Snapshot";
import HeroAnim from "./HeroAnim";
import "./styles.scss";

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

  const responsibilities = `Led UI development for Cloudwall's marketing website, which served as their digital foothold into launching their company. Set up Github actions along with Sanity CMS to trigger CI/CD to minimize agency dependancy.`;

  const snapshotProps = { title, subtitle, details, tech, responsibilities };

  return (
    <Snapshot {...snapshotProps}>
      <HeroAnim />
    </Snapshot>
  );
}

export default Cloudwall;
