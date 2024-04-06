import { A } from "@solidjs/router";
import { Index } from "solid-js";
import Sig from "../.../../../assets/Sig.tsx";

function Navbar() {
  const LINKS = ["About"];

  return (
    <footer>
      <a href="/">
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
