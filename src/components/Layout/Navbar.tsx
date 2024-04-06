import { A } from "@solidjs/router";
import { Index } from "solid-js";
import Sig from "../.../../../assets/Sig.tsx";

function Navbar() {
  const LINKS = ["About", "Projects", "Contact"];

  return (
    <footer>
      <a href="/">
        {/* <div>JP</div> */}
        <div>
          <Sig />
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
