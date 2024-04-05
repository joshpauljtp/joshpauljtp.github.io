import { useNavigate } from "@solidjs/router";
import { Accessor, Index, Setter } from "solid-js";
import {
  HOME_ANIM_DATA,
  INITIAL_SELECTED_PROJECT,
  SelectedProject,
} from "./utils";

type Props = {
  isMobile: Accessor<boolean>;
  selectedProject: Accessor<SelectedProject>;
  setSelectedProject: Setter<SelectedProject>;
};

function HeroAnim({ isMobile, selectedProject, setSelectedProject }: Props) {
  const navigate = useNavigate();
  return (
    <div id="homeHeroAnim" class="heroAnim">
      <Index each={HOME_ANIM_DATA}>
        {(item) => {
          const { link, className, icon, name } = item();
          return (
            <div
              classList={{
                circle: true,
                active:
                  selectedProject().className === className
                    ? selectedProject().className === className
                    : selectedProject().className === "",
              }}
              {...(isMobile()
                ? {
                    onClick: () => setSelectedProject(item),
                  }
                : {
                    onClick: () => navigate(link),
                    onMouseOver: () => setSelectedProject(item),
                    onMouseLeave: () =>
                      setSelectedProject(INITIAL_SELECTED_PROJECT),
                  })}
            >
              <img src={icon} alt="" />
              {name}
              <span class="reverse">
                <img src={icon} alt="" class="reverse" />
              </span>
            </div>
          );
        }}
      </Index>
    </div>
  );
}

export default HeroAnim;
