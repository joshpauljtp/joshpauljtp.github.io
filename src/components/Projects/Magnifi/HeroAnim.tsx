import MagHeroImage from "../../../assets/MagHero.png";
import "./styles.scss";

type Props = {
  homeAnim?: boolean;
};

function HeroAnim({ homeAnim = false }: Props) {
  return (
    <div id="magHeroAnim" classList={{ heroAnim: true, homeAnim: homeAnim }}>
      <div class="magCard"></div>
      <div class="magCard"></div>
      <div class="magCard"></div>
      <div class="magCard"></div>
      <div class="magCard"></div>
      <div class="magCard"></div>
      <div class="magCard"></div>
      <div class="magCard"></div>
      <div class="imgContainer">
        <img src={MagHeroImage} alt="" />
      </div>
    </div>
  );
}

export default HeroAnim;
