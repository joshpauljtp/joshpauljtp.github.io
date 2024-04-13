import Cloudwalllogo from "@/assets/Cloudwall/Cloudwall-Logo.svg";
import Maglogo from "@/assets/Magnifi/Mag-Logo.svg";
import Nirologo from "@/assets/Niro/Niro-Logo.svg";
import OrionLogo from "@/assets/Orion/Orion-Logo.svg";
import RLsigil from "@/assets/RayaLucaria/RL-Sigil.svg";
import RClogo from "@/assets/Rooted Company/RC-Logo.svg";
import TPMlogo from "@/assets/TPM/TPM-Logo.svg";
import { JSX } from "solid-js";

import AboutPage from "../About";
import { default as CloudwallHeroAnim } from "../Projects/Cloudwall/HeroAnim";
import { default as MagHeroAnim } from "../Projects/Magnifi/HeroAnim";
import { default as NiroHeroAnim } from "../Projects/Niro/HeroAnim";
import { default as OrionHeroAnim } from "../Projects/Orion/HeroAnim";
import { default as RayaLucariaHeroAnim } from "../Projects/RayaLucaria/HeroAnim";
import { default as RootedCompanyHeroAnim } from "../Projects/RootedCompany/HeroAnim";
import { default as TpmHeroAnim } from "../Projects/TPM/HeroAnim";

export enum PAGES {
  home = "",
  about = "About",
  magnifi = "Magnifi",
  tpm = "Tifin Private Markets",
  cloudwall = "Cloudwall Capital",
  niro = "Niro",
  rootedCompany = "Rooted Company",
  orion = "Orion",
  rayaLucaria = "The Academy of Raya Lucaria",
}

export const HOME_ANIM_DATA = [
  {
    id: PAGES.about,
    name: "About",
    link: "/about",
    className: "about",
    icon: "",
    subtitle: "",
  },
  {
    id: PAGES.magnifi,
    name: PAGES.magnifi,
    link: "/projects/magnifi",
    className: "magnifi",
    icon: Maglogo,
    subtitle: "AI assisted trading platform",
  },
  {
    id: PAGES.tpm,
    name: PAGES.tpm,
    link: "/projects/tifin-private-markets",
    className: "tpm",
    icon: TPMlogo,
    subtitle: "Alternative investments platform",
  },
  {
    id: PAGES.cloudwall,
    name: PAGES.cloudwall,
    link: "/projects/cloudwall",
    className: "cloudwall",
    icon: Cloudwalllogo,
    subtitle: "Marketing site",
  },
  {
    id: PAGES.niro,
    name: PAGES.niro,
    link: "/projects/niro",
    className: "niro",
    icon: Nirologo,
    subtitle: "Marketing site and web app",
  },
  {
    id: PAGES.rootedCompany,
    name: PAGES.rootedCompany,
    link: "/projects/rooted-company",
    className: "rootedCompany",
    icon: RClogo,
    subtitle: "E-commerce web app",
  },
  {
    id: PAGES.orion,
    name: PAGES.orion,
    link: "/projects/orion",
    className: "orion",
    icon: OrionLogo,
    subtitle: "AI-assisted design audit tool",
  },
  {
    id: PAGES.rayaLucaria,
    name: PAGES.rayaLucaria,
    link: "/projects/raya-lucaria",
    className: "rayaLucaria",
    icon: RLsigil,
    subtitle: "Visual narrative desktop experience",
  },
];

export type SelectedProject = (typeof HOME_ANIM_DATA)[number];

export const INITIAL_SELECTED_PROJECT: SelectedProject = {
  id: PAGES.home,
  name: "",
  className: "",
  link: "",
  icon: "",
  subtitle: "",
};

export const heroAnimMap = (name: SelectedProject["name"]) => {
  const map: Record<SelectedProject["name"], JSX.Element> = {
    [PAGES.home]: <></>,
    [PAGES.about]: <AboutPage />,
    [PAGES.magnifi]: <MagHeroAnim homeAnim />,
    [PAGES.tpm]: <TpmHeroAnim homeAnim />,
    [PAGES.cloudwall]: <CloudwallHeroAnim homeAnim />,
    [PAGES.niro]: <NiroHeroAnim homeAnim />,
    [PAGES.rootedCompany]: <RootedCompanyHeroAnim homeAnim />,
    [PAGES.orion]: <OrionHeroAnim homeAnim />,
    [PAGES.rayaLucaria]: <RayaLucariaHeroAnim homeAnim />,
  };

  return map[name];
};

/*
1. Content
2. Fix navbar colors - Done
3. Image/gif optimization
4. About - Done
5. Contact 
6. Resume
7. Fix jpaul svg on mobile - Done
8. Fix jpaul svg white/black flipping - Done
9. Mobile home arrow - Done
10. Fix icon placements in mandela
*/
