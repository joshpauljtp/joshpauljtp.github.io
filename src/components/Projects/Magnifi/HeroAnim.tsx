import MagHeroImage from "../../../assets/MagHero.png";

function HeroAnim() {
  return (
    <div id="magHeroAnim">
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
