import MagCard from "@/assets/Magnifi/MagCard.png";
import { For } from "solid-js";
import MagHeroImage from "../../../assets/MagHero.png";
import "./styles.scss";

type Props = {
  homeAnim?: boolean;
};

function HeroAnim({ homeAnim = false }: Props) {
  return (
    <div id="magHeroAnim" classList={{ heroAnim: true, homeAnim: homeAnim }}>
      <For each={new Array(8)}>
        {() => <img src={MagCard} alt="" class="magCard"></img>}
      </For>
      <div class="imgContainer">
        <img src={MagHeroImage} alt="" />
      </div>
    </div>
  );
}

export default HeroAnim;
