import Arrow from "@/assets/Arrow.tsx";
import { A, useLocation } from "@solidjs/router";
import { Index } from "solid-js";
import Sig from "../.../../../assets/Sig.tsx";

function Navbar() {
  const LINKS = ["About"];
  const location = useLocation();

  return (
    <footer>
      <a href="/">
        <div>
          {location.pathname.includes("projects/") ? (
            <Arrow dir="left" id="navBackArrow" />
          ) : (
            <Sig />
          )}
        </div>
      </a>
      <nav>
        <Index each={LINKS}>
          {(name) => {
            const link = "/" + name().toLowerCase();
            return (
              <A href={link} activeClass="active">
                {name()}
              </A>
            );
          }}
        </Index>
      </nav>
    </footer>
  );
}

export default Navbar;
