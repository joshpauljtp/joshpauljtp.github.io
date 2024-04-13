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
        Initially I was responsible for bug fixes and creating blog posts. My
        eye for design accuracy caught the attention of others, and I was chosen
        as the ideal candidate to assist with the product's rebrand.
      </p>
      <p>
        I mainly handled the UI styling of Rooted Company, whereas the other dev
        worked on its functionalities.
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
      <Gallery images={[Home, MobileVersus, MobileNav, PDP]} />
    </>
  );
}

export default RootedCompany;
