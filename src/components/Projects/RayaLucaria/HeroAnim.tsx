import Logo from "../../../assets/RL-logo.svg";
import Background from "./Background/Background";

function HeroAnim() {
  return (
    <div class="heroAnim">
      <Background />
      <img src={Logo} alt="" />
    </div>
  );
}

export default HeroAnim;
