import Dev from "../../../assets/OrionDev.svg";
import Figma from "../../../assets/OrionFigma.svg";
import OrionScale from "../../../assets/OrionScaleCenter.svg";

function HeroAnim() {
  return (
    <div class="heroAnim">
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
