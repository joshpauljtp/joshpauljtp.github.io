import Sky1 from "../../../assets/RC-1.png";
import Sky2 from "../../../assets/RC-2.png";
import Sky3 from "../../../assets/RC-3.png";
import Sky4 from "../../../assets/RC-4.png";
import Sky5 from "../../../assets/RC-5.png";
import Dune from "../../../assets/RC-Dune.png";
import Stars from "../../../assets/RC-Stars.png";

function HeroAnim() {
  return (
    <div id="rcHeroAnim">
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
