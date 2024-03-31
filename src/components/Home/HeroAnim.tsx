import { Index } from "solid-js";
import Cloudwalllogo from "../.../../../assets/Cloudwall-Logo.svg";
import Maglogo from "../.../../../assets/Mag-Logo.svg";
import Nirologo from "../.../../../assets/Niro-Logo.svg";
import OrionLogo from "../.../../../assets/Orion-Logo.svg";
import RClogo from "../.../../../assets/RC-Logo.svg";
import RLsigil from "../.../../../assets/RL-Sigil.svg";
import Sig from "../.../../../assets/Sig.svg";
import TPMlogo from "../.../../../assets/TPM-Logo.svg";

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
        return <img src={TPMlogo} alt="" class={className} />;

      case "Niro":
        return <img src={Nirologo} alt="" class={className} />;

      case "Rooted Company":
        return <img src={RClogo} alt="" class={className} />;

      case "JP":
        return <img src={Sig} alt="" class={className} />;
    }
    return <img src={RLsigil} alt="" class={className} />;
  };

  const arr = [
    "JP",
    "Magnifi",
    "TPM",
    "Cloudwall",
    "Niro",
    "Rooted Company",
    "Orion",
    "Raya Lucaria",
  ];

  return (
    <div class="heroAnim">
      <Index each={arr}>
        {(name) => (
          <a class="circle" href="/projects/magnifi">
            {getIcon(name())}
            <span class="reverse">{getIcon(name(), true)}</span>
          </a>
        )}
      </Index>
    </div>
  );
}

export default HeroAnim;
