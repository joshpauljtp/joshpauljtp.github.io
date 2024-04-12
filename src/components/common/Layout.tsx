import { RouteSectionProps, useLocation } from "@solidjs/router";
import { createMemo } from "solid-js";
import Navbar from "./Navbar";

type Props = RouteSectionProps<unknown>;

function Layout(props: Props) {
  const location = useLocation();

  const idMap: Record<string, string> = {
    "/about": "about",
    "/projects/cloudwall": "cloudwall",
    "/projects/magnifi": "magnifi",
    "/projects/rooted-company": "rootedCompany",
    "/projects/niro": "niro",
    "/projects/tifin-private-markets": "tpm",
    "/projects/orion": "orion",
    "/projects/raya-lucaria": "rayaLucaria",
  };

  const id = createMemo(() => idMap[location.pathname]);
  const showNavbar = createMemo(() => !!id());

  return (
    <main id={id() ?? "home"} class={`colors-${id()}`}>
      {props.children}
      {showNavbar() && <Navbar />}
    </main>
  );
}

export default Layout;
