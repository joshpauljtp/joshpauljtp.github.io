import CloudwallHero from "../../../assets/CloudwallHero.png";
import CloudwallHeroPhone from "../../../assets/CloudwallHeroPhone.png";

function HeroAnim() {
  return (
    <div id="cloudwallHeroAnim">
      <img src={CloudwallHero} id="cloudwall-hero-bg" alt="" />
      <img src={CloudwallHeroPhone} id="cloudwall-hero-phone" alt="" />
    </div>
  );
}

export default HeroAnim;
