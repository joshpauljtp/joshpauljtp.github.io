import { For } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";
import "./styles.scss";

type DetailsKey = "Role" | "Duration";

type Props = {
  title: string | JSX.Element;
  subtitle: string;
  details: Record<DetailsKey, string>;
  tech: string[];
  responsibilities: string | JSX.Element;
  children: JSX.Element;
};

function Details(details: Props["details"]) {
  const keys = Object.keys(details) as DetailsKey[];
  return (
    <section>
      <h2>Details</h2>
      <For each={keys}>
        {(key) => (
          <div class="detail">
            {key} <hr /> {details[key]}
          </div>
        )}
      </For>
    </section>
  );
}

function Tech(tech: Props["tech"]) {
  return (
    <section>
      <h2>Tech</h2>
      <div class="pillContainer">
        <For each={tech}>{(item) => <div class="pill">{item}</div>}</For>
      </div>
    </section>
  );
}

function Snapshot({
  title,
  subtitle,
  tech,
  details,
  responsibilities,
  children,
}: Props) {
  return (
    <section class="snapshot">
      <section>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
      </section>
      <Details {...details} />
      <Tech {...tech} />
      <section>
        <h2>Responsibilities</h2>
        <p>{responsibilities}</p>
      </section>
      <figure>{children}</figure>
    </section>
  );
}

export default Snapshot;
