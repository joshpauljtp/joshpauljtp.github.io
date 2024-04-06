/* @refresh reload */
import { Route, Router } from "@solidjs/router";
import { render } from "solid-js/web";
import AboutPage from "./components/About";
import HomePage from "./components/Home";
import Layout from "./components/Layout";

import Cloudwall from "./components/Projects/Cloudwall";
import Magnifi from "./components/Projects/Magnifi";
import Niro from "./components/Projects/Niro";
import Orion from "./components/Projects/Orion";
import RayaLucaria from "./components/Projects/RayaLucaria";
import RootedCompany from "./components/Projects/RootedCompany";
import TPM from "./components/Projects/TPM";
import "./styles/globalStyles.scss";
import "./styles/reset.scss";
import "./styles/typography.scss";

import { inject } from "@vercel/analytics";
import { injectSpeedInsights } from "@vercel/speed-insights";

inject();
injectSpeedInsights();

const root = document.getElementById("root");

render(
  () => (
    <Router root={Layout}>
      <Route path="/" component={HomePage} />
      <Route path="*404" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/projects/magnifi" component={Magnifi} />
      <Route path="/projects/tifin-private-markets" component={TPM} />
      <Route path="/projects/cloudwall" component={Cloudwall} />
      <Route path="/projects/rooted-company" component={RootedCompany} />
      <Route path="/projects/niro" component={Niro} />
      <Route path="/projects/orion" component={Orion} />
      <Route path="/projects/raya-lucaria" component={RayaLucaria} />
    </Router>
  ),
  root!
);
