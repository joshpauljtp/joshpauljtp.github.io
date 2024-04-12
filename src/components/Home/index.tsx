import Arrow from "@/assets/Arrow";
import { A } from "@solidjs/router";
import { Show, createEffect, createSignal, on, onCleanup } from "solid-js";
import HeroAnim from "./HeroAnim";
import "./styles.scss";
import { INITIAL_SELECTED_PROJECT, heroAnimMap } from "./utils";

function HomePage() {
  const [selectedProject, setSelectedProject] = createSignal(
    INITIAL_SELECTED_PROJECT
  );

  createEffect(
    on(selectedProject, () => {
      const main = document.getElementsByTagName("main")[0];
      main.setAttribute("class", `colors-${selectedProject().className}`);
    })
  );

  const [isMobile, setIsMobile] = createSignal(window.innerWidth <= 800);

  createEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    window.addEventListener("resize", handleResize);

    onCleanup(() => {
      window.removeEventListener("resize", handleResize);
    });
  });

  return (
    <>
      <section>
        <HeroAnim
          isMobile={isMobile}
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
      </section>
      <aside
        class={`colors-${selectedProject().className}`}
        {...(isMobile()
          ? { onClick: () => setSelectedProject(INITIAL_SELECTED_PROJECT) }
          : {})}
      >
        {heroAnimMap(selectedProject().id)}
      </aside>
      <Show when={selectedProject().name !== ""}>
        <div
          id="projectInfo"
          class={`projectInfo ${selectedProject().className} `}
        >
          <h3>
            <strong>{selectedProject().name}</strong>
          </h3>
          <Show when={selectedProject().subtitle}>
            <p>{selectedProject().subtitle}</p>
          </Show>
          <Show when={selectedProject().link && isMobile()}>
            <A href={selectedProject().link}>
              <Arrow />
            </A>
          </Show>
        </div>
      </Show>
    </>
  );
}

export default HomePage;
