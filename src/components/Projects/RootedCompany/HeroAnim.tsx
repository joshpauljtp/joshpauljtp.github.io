import Sky1 from "@/assets/Rooted Company/RC-1.png";
import Sky2 from "@/assets/Rooted Company/RC-2.png";
import Sky3 from "@/assets/Rooted Company/RC-3.png";
import Sky4 from "@/assets/Rooted Company/RC-4.png";
import Sky5 from "@/assets/Rooted Company/RC-5.png";
import Dune from "@/assets/Rooted Company/RC-Dune.png";
import Stars from "@/assets/Rooted Company/RC-Stars.png";
import "./styles.scss";

type Props = {
  homeAnim?: boolean;
};
function HeroAnim({ homeAnim = false }: Props) {
  return (
    <div id="rcHeroAnim" classList={{ heroAnim: true, homeAnim: homeAnim }}>
      <img src={Stars} id="stars" alt="" />
      <img src={Sky1} id="sky1" alt="" />
      <img src={Sky2} id="sky2" alt="" />
      <img src={Sky3} id="sky3" alt="" />
      <img src={Sky4} id="sky4" alt="" />
      <img src={Sky5} id="sky5" alt="" />
      <img src={Dune} id="dune" alt="" />
    </div>
  );
}

export default HeroAnim;
