import { For } from "solid-js";
import "./styles.scss";

type Props = {
  images: Array<string>;
};

// function LazyLoadingImage({ src }: { src: string }) {
//   let imgRef!: HTMLImageElement;

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
//           if (imgRef) {
//             imgRef.src = src;
//           }
//           observer.disconnect();
//         }
//       });
//     },
//     { threshold: 0.3 }
//   );

//   createEffect(() => {
//     if (imgRef) {
//       observer.observe(imgRef);
//     }
//   });

//   onCleanup(() => {
//     if (imgRef) {
//       observer.unobserve(imgRef);
//     }
//   });

//   return <img ref={imgRef} src="" alt="" loading="lazy" />;
// }

function Gallery({ images = [] }: Props) {
  return (
    <section id="gallery">
      <For each={images}>
        {(img) => <img src={img} alt="" loading="lazy" />}
      </For>
    </section>
  );
}

export default Gallery;
