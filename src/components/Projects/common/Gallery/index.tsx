import { For } from "solid-js";
import "./styles.scss";

type Props = {
  images?: Array<string>;
};

function Gallery({ images = [] }: Props) {
  return (
    <section id="gallery">
      <For each={images}>{(img) => <img src={img} alt="" />}</For>
    </section>
  );
}

export default Gallery;
