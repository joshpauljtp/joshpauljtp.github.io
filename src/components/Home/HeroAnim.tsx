import { For } from "solid-js";

function HeroAnim() {
  return (
    <div class="heroAnim">
      <For each={new Array(8)}>{() => <div class="circle"></div>}</For>
    </div>
  );
}

export default HeroAnim;
