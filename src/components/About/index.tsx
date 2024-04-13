import { For } from "solid-js";
import "./styles.scss";

const LINKS = [
  {
    name: "Résumé",
    url: "https://drive.google.com/file/d/1y-EDLXhwhBfyPFzf1Jy2v6If05y0jOoR/view?usp=sharing",
  },
  {
    name: "Codepen",
    url: "https://codepen.io/joshtpaul",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/joshpauljtp/",
  },
  {
    name: "Github",
    url: "https://github.com/JoshTPaul",
  },
  {
    name: "Email",
    url: "mailto:joshpauljtp@gmail.com",
  },
];

function AboutPage() {
  return (
    <section id="aboutSection">
      <p>Hey there! Thanks for taking the time to visit my site.</p>
      <p>
        I'm Joshua Thomas Paul—performing guitarist with{" "}
        <a
          href="https://www.instagram.com/bannedbloodline/"
          rel="noreferrer noopener"
          target="_blank"
        >
          Banned Bloodline
        </a>
        , automotive enthusiast, and avid video gamer based in the south Indian
        city of Bengaluru.
      </p>
      <p>
        Professionally, I'm a software engineer at the GenAI Fintech startup,{" "}
        <a
          href="https://www.tifin.com"
          rel="noreferrer noopener"
          target="_blank"
        >
          TIFIN
        </a>
        , where I specialize in frontend web development of React and
        React-based websites and web apps. My journey includes over 3 years of
        experience in fast-paced startup environments, including at TIFIN and
        1stMain (acquired by TIFIN).
      </p>
      <p>
        I'm currently on the lookout for new opportunities. If you need a UI
        developer who combines precision and creativity to every project, don't
        hesitate to get in touch!
      </p>

      <ul>
        <For each={LINKS}>
          {(link) => (
            <li>
              <a href={link.url} rel="noreferrer noopener" target="_blank">
                {link.name}
              </a>
            </li>
          )}
        </For>
      </ul>
    </section>
  );
}

export default AboutPage;
