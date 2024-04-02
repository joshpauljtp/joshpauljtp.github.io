import { Index, createSignal } from "solid-js";
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

function HeroAnim() {
  const getIcon = (name: string, reverse = false) => {
    const className = reverse ? "reverse" : "";
    switch (name) {
      case "Raya Lucaria":
        return <img src={RLsigil} alt="" class={className} />;

      case "Orion":
        return <img src={OrionLogo} alt="" class={className} />;

      case "Magnifi":
        return <img src={Maglogo} alt="" class={className} />;

      case "Cloudwall":
        return <img src={Cloudwalllogo} alt="" class={className} />;

      case "TPM":
      case "Tifin Private Markets":
        return <img src={TPMlogo} alt="" class={className} />;

      case "Niro":
        return <img src={Nirologo} alt="" class={className} />;

      case "Rooted Company":
        return <img src={RClogo} alt="" class={className} />;

      default:
        return <img src={Sig} alt="" class={className} />;
    }
  };

  const arr = [
    {
      name: "",
      link: "#",
      className: "",
    },
    {
      name: "Magnifi",
      link: "/projects/magnifi",
      className: "magnifi",
    },
    {
      name: "Tifin Private Markets",
      link: "/projects/tpm",
      className: "tpm",
    },
    {
      name: "Cloudwall",
      link: "/projects/cloudwall",
      className: "cloudwall",
    },
    {
      name: "Niro",
      link: "/projects/niro",
      className: "niro",
    },
    {
      name: "Rooted Company",
      link: "/projects/rooted-company",
      className: "rootedCompany",
    },
    {
      name: "Orion",
      link: "/projects/orion",
      className: "orion",
    },
    {
      name: "Raya Lucaria",
      link: "/projects/raya-lucaria",
      className: "rayaLucaria",
    },
  ];

  const INITIAL_HOVERED_PROJECT = { name: "", class: "" };

  const [hoveredProject, setHoveredProject] = createSignal(
    INITIAL_HOVERED_PROJECT
  );

  return (
    <div id="homeHeroAnim" class="heroAnim">
      <Index each={arr}>
        {(item) => {
          const { name, className, link } = item();
          return (
            <a
              class="circle"
              classList={{
                circle: true,
                active:
                  hoveredProject().class === className
                    ? hoveredProject().class === className
                    : hoveredProject().class === "" || name === "",
              }}
              href={link}
              onMouseOver={() => setHoveredProject({ name, class: className })}
              onMouseLeave={() => setHoveredProject(INITIAL_HOVERED_PROJECT)}
            >
              {getIcon(name)}
              <span class="reverse">{getIcon(name, true)}</span>
            </a>
          );
        }}
      </Index>
      <aside class={`colors-${hoveredProject().class}`}>
        <section>
          <h1>{hoveredProject().name}</h1>
          <h3>wasd wasd wasd</h3>
        </section>

        {/* {true && <MagHeroAnim homeAnim />} */}
        {hoveredProject().name === "Cloudwall" && (
          <CloudwallHeroAnim homeAnim />
        )}
        {hoveredProject().name === "Rooted Company" && (
          <RootedCompanyHeroAnim homeAnim />
        )}
        {hoveredProject().name === "Niro" && <NiroHeroAnim homeAnim />}
        {hoveredProject().name === "Magnifi" && <MagHeroAnim homeAnim />}
        {hoveredProject().name === "Orion" && <OrionHeroAnim />}
        {hoveredProject().name === "Raya Lucaria" && (
          <RayaLucariaHeroAnim homeAnim />
        )}

        <br />
      </aside>
    </div>
  );
}

export default HeroAnim;
