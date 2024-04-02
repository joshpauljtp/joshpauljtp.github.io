import { For, createEffect, onCleanup } from "solid-js";
import NiroHero from "../../../assets/NiroHero.gif";
import "./styles.scss";

const AnimatedImage = () => {
  let imgRef: HTMLImageElement | undefined = undefined;

  const startAnimationOnLoad = (imgRef: HTMLImageElement | undefined) => {
    const img = imgRef;
    if (!img) return;

    const handleLoad = () => {
      img.classList.add("startAnim");
    };

    img.addEventListener("load", handleLoad);

    onCleanup(() => {
      img.removeEventListener("load", handleLoad);
    });
  };

  createEffect(() => {
    startAnimationOnLoad(imgRef);
  });

  return <img ref={imgRef} src={NiroHero} alt="Animated Image" />;
};

type Props = {
  homeAnim?: boolean;
};
function HeroAnim({ homeAnim = false }: Props) {
  return (
    <div id="niroHeroAnim" classList={{ heroAnim: true, homeAnim: homeAnim }}>
      <For each={new Array(10)}>{() => <div class="niroCircle"></div>}</For>
      <AnimatedImage />
    </div>
  );
}

export default HeroAnim;
