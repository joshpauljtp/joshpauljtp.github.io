import { For } from "solid-js";
import "./styles.scss";

function Background() {
  return (
    <div id="spaceBackground">
      <div class="space">
        <For each={[...new Array(250)]}>{() => <div class="star" />}</For>
        <For each={[...new Array(20)]}>
          {(_, i) => <div class={`streak-${i()}`} />}
        </For>
      </div>
      <svg viewBox="0 0 180 100">
        <filter id="noise" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            baseFrequency="0.01 0.04"
            result="NOISE"
            numOctaves="20"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="NOISE"
            scale="800"
            xChannelSelector="R"
            yChannelSelector="R"
          ></feDisplacementMap>
        </filter>
      </svg>
    </div>
  );
}

export default Background;
