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
        {/* <Show when={!isMobile()}></Show> */}
        {heroAnimMap(selectedProject().id)}
      </aside>
      <Show when={selectedProject().name !== ""}>
        <div id="projectInfo">
          <h3>{selectedProject().name}</h3>
          <p>{selectedProject().subtitle}</p>
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
