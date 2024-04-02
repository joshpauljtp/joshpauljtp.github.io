import Logo from "../../../assets/RL-logo.svg";
import Sigil from "../../../assets/RL-Sigil.svg";
import Background from "./Background/Background";
import "./styles.scss";

type Props = {
  homeAnim?: boolean;
};
function HeroAnim({ homeAnim = false }: Props) {
  return (
    <div
      id="rayaLucariaHeroAnim"
      classList={{ heroAnim: true, homeAnim: homeAnim }}
    >
      <Background />
      <img src={homeAnim ? Sigil : Logo} alt="" />
    </div>
  );
}

export default HeroAnim;
