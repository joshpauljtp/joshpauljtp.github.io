import { A } from "@solidjs/router";
import {
  Match,
  Switch,
  createEffect,
  createSignal,
  on,
  onCleanup,
} from "solid-js";
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
      <aside class={`colors-${selectedProject().className}`}>
        <Switch>
          <Match when={isMobile()}>
            <section>
              <h1>{selectedProject().name}</h1>
              <h3>{selectedProject().subtitle}</h3>
              {selectedProject().link && (
                <A href={selectedProject().link}>(arrow)</A>
              )}
            </section>
          </Match>
          <Match when={!isMobile()}>
            {heroAnimMap(selectedProject().name)}
          </Match>
        </Switch>
      </aside>
    </>
  );
}

export default HomePage;
