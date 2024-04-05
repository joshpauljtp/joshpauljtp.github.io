import { JSX } from "solid-js";
import Cloudwalllogo from "../.../../../assets/Cloudwall-Logo.svg";
import Maglogo from "../.../../../assets/Mag-Logo.svg";
import Nirologo from "../.../../../assets/Niro-Logo.svg";
import OrionLogo from "../.../../../assets/Orion-Logo.svg";
import RClogo from "../.../../../assets/RC-Logo.svg";
import RLsigil from "../.../../../assets/RL-Sigil.svg";
import Sig from "../.../../../assets/Sig.svg";
import TPMlogo from "../.../../../assets/TPM-Logo.svg";

import { default as CloudwallHeroAnim } from "../Projects/Cloudwall/HeroAnim";
import { default as MagHeroAnim } from "../Projects/Magnifi/HeroAnim";
import { default as NiroHeroAnim } from "../Projects/Niro/HeroAnim";
import { default as OrionHeroAnim } from "../Projects/Orion/HeroAnim";
import { default as RayaLucariaHeroAnim } from "../Projects/RayaLucaria/HeroAnim";
import { default as RootedCompanyHeroAnim } from "../Projects/RootedCompany/HeroAnim";

export enum PROJECT_NAMES {
  home = "",
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
    name: PROJECT_NAMES.home,
    link: "",
    className: "",
    icon: Sig,
    subtitle: "",
  },
  {
    name: PROJECT_NAMES.magnifi,
    link: "/projects/magnifi",
    className: "magnifi",
    icon: Maglogo,
    subtitle: "AI assisted trading platform",
  },
  {
    name: PROJECT_NAMES.tpm,
    link: "/projects/tpm",
    className: "tpm",
    icon: TPMlogo,
    subtitle: "Alternative investments platform",
  },
  {
    name: PROJECT_NAMES.cloudwall,
    link: "/projects/cloudwall",
    className: "cloudwall",
    icon: Cloudwalllogo,
    subtitle: "Marketing site",
  },
  {
    name: PROJECT_NAMES.niro,
    link: "/projects/niro",
    className: "niro",
    icon: Nirologo,
    subtitle: "Marketing site and web app",
  },
  {
    name: PROJECT_NAMES.rootedCompany,
    link: "/projects/rooted-company",
    className: "rootedCompany",
    icon: RClogo,
    subtitle: "E-commerce web app",
  },
  {
    name: PROJECT_NAMES.orion,
    link: "/projects/orion",
    className: "orion",
    icon: OrionLogo,
    subtitle: "AI-assisted design audit tool",
  },
  {
    name: PROJECT_NAMES.rayaLucaria,
    link: "/projects/raya-lucaria",
    className: "rayaLucaria",
    icon: RLsigil,
    subtitle: "Visual narrative desktop experience",
  },
];

export type SelectedProject = (typeof HOME_ANIM_DATA)[number];

export const INITIAL_SELECTED_PROJECT: SelectedProject = {
  name: PROJECT_NAMES.home,
  className: "",
  link: "",
  icon: "",
  subtitle: "",
};

export const heroAnimMap = (name: SelectedProject["name"]) => {
  const map: Record<SelectedProject["name"], JSX.Element> = {
    [PROJECT_NAMES.home]: <></>,
    [PROJECT_NAMES.magnifi]: <MagHeroAnim homeAnim />,
    [PROJECT_NAMES.tpm]: <></>,
    [PROJECT_NAMES.cloudwall]: <CloudwallHeroAnim homeAnim />,
    [PROJECT_NAMES.niro]: <NiroHeroAnim homeAnim />,
    [PROJECT_NAMES.rootedCompany]: <RootedCompanyHeroAnim homeAnim />,
    [PROJECT_NAMES.orion]: <OrionHeroAnim homeAnim />,
    [PROJECT_NAMES.rayaLucaria]: <RayaLucariaHeroAnim homeAnim />,
  };

  return map[name];
};
