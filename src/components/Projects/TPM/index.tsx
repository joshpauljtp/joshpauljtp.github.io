import Gallery from "../common/Gallery";
import Snapshot from "../common/Snapshot";
import HeroAnim from "./HeroAnim";
import "./styles.scss";

import Client from "@/assets/TPM/Client.png";
import Home from "@/assets/TPM/Home.png";
import Modals from "@/assets/TPM/Modals.png";
import Order from "@/assets/TPM/Order.png";

function TPM() {
  const title = "Tifin Private Markets";
  const subtitle = `Alternative investment platform`;
  const details = {
    Role: "Frontend Developer",
    Duration: `Feb '22 - Oct '22`,
    Employer: "TIFIN",
    Link: (
      <a
        href="https://app.tifinprivatemarkets.com"
        rel="noreferrer noopener"
        target="_blank"
      >
        app.tifinprivatemarkets.com
      </a>
    ),
  };
  const tech = [
    "Next.js",
    "Sanity",
    "Emotion/Styled",
    "React Query",
    "React Hook Form",
    "Yup",
    "Recharts",
    "WebSocket",
    "Server-Sent Events",
    "Redux",
    "Material UI",
  ];
  const responsibilities = (
    <>
      <p>
        In a team of 3 FE developers, we took Qualis Capital from an Angular
        codebase to a React codebase, massively increaasing its performance,
        later being renamed to Tifin Private Markets.
      </p>
      <p>
        I was responsible for all of TPM's UI styling. When I wasn't working on
        end-to-end features, I was tasked with making a styling pass on the
        other devs' unstyled features.
      </p>
      <p>
        I also created a robust core components for component composition, and
        dynamic theming systems for handling styling of colours, typography,
        breakpoints, etc.
      </p>
    </>
  );

  const snapshotProps = {
    title,
    subtitle,
    details,
    tech,
    responsibilities,
  };

  return (
    <>
      <Snapshot {...snapshotProps}>
        <HeroAnim />
      </Snapshot>
      <Gallery images={[Home, Order, Modals, Client]} />
    </>
  );
}

export default TPM;
