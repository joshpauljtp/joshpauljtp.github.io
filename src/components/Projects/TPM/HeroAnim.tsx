import TpmLaptop from "@/assets/TPM-Laptop.png";
import TpmLogo from "@/assets/TPM-Logo.svg";
import { Index } from "solid-js";
import "./styles.scss";

type Props = {
  homeAnim?: boolean;
};
function HeroAnim({ homeAnim = false }: Props) {
  return (
    <div id="tpmHeroAnim" classList={{ heroAnim: true, homeAnim: homeAnim }}>
      <div id="tpmLogoGrid">
        <Index each={[...new Array(16)]}>
          {() => <img src={TpmLogo} alt="" class="tpmLogo" />}
        </Index>
      </div>

      <img src={TpmLaptop} alt="" class="laptop" />
    </div>
  );
}

export default HeroAnim;
