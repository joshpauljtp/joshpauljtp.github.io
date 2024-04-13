import CloudwallHero from "@/assets/Cloudwall/CloudwallHero.png";
import CloudwallHeroPhone from "@/assets/Cloudwall/CloudwallHeroPhone.png";
import "./styles.scss";

type Props = {
  homeAnim?: boolean;
};
function HeroAnim({ homeAnim = false }: Props) {
  return (
    <div
      id="cloudwallHeroAnim"
      classList={{ heroAnim: true, homeAnim: homeAnim }}
    >
      <img src={CloudwallHero} id="cloudwall-hero-bg" alt="" />
      <img src={CloudwallHeroPhone} id="cloudwall-hero-phone" alt="" />
    </div>
  );
}

export default HeroAnim;
