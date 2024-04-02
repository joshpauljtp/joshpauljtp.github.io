import Dev from "../../../assets/OrionDev.svg";
import Figma from "../../../assets/OrionFigma.svg";
import OrionScale from "../../../assets/OrionScaleCenter.svg";
import "./styles.scss";

type Props = {
  homeAnim?: boolean;
};
function HeroAnim({ homeAnim = false }: Props) {
  return (
    <div id="orionHeroAnim" classList={{ heroAnim: true, homeAnim: homeAnim }}>
      <div id="scaleBody">
        <img src={OrionScale} alt="" id="orionScale" />
      </div>
      <div id="weights">
        <img src={Figma} alt="" id="figma" />
        <img src={Dev} alt="" id="dev" />
      </div>
    </div>
  );
}

export default HeroAnim;
