import Snapshot from "../common/Snapshot";
import HeroAnim from "./HeroAnim";
import "./styles.scss";

import Home from "@/assets/Rooted Company/Home.png";
import MobileNav from "@/assets/Rooted Company/MobileNav.png";
import MobileVersus from "@/assets/Rooted Company/MobileVersus.png";
import PDP from "@/assets/Rooted Company/PDP.png";
import Gallery from "../common/Gallery";

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
      <p>
        The project that kickstarted my professional journey, and will forever
        have a special place in my heart. Shame it's dead now.
      </p>
      <p>
        Initially joining Rooted Objects (the former name of Rooted Company), my
        early tasks revolved around bug fixes and assisting in crafting engaging
        blog posts. One article in particular - "Pursuing Beauty", which
        featured a scrollytelling animation. As a novice frontend developer, the
        complexity of this animation was daunting, resembling a more intricate
        version of the hero animation on this page. However, despite initial
        trepidation, my aptitude for CSS and meticulous attention to design
        details soon became evident to the team.
      </p>{" "}
      This led to me being the natural choice when Rooted Company embarked on
      its rebranding journey. The rebranding initiative necessitated a
      comprehensive overhaul of the UI to align with the new brand guidelines.
      Transitioning from tackling bugs and crafting blog posts to leading a UI
      overhaul was a significant leap, one that reflected both the trust placed
      in me by the team and my evolving skills as a frontend developer. It
      marked a pivotal moment in my professional growth, reinforcing my passion
      for frontend development and design accuracy.
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
      <Gallery images={[Home, MobileVersus, MobileNav, PDP]} />
    </>
  );
}

export default RootedCompany;
