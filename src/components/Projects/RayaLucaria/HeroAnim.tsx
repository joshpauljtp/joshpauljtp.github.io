import Sigil from "@/assets/RayaLucaria/RL-Sigil.svg";
import Logo from "@/assets/RayaLucaria/RL-logo.svg";
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
