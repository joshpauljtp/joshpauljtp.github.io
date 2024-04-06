import { JSX } from "solid-js";

function Arrow(
  props: JSX.IntrinsicAttributes & JSX.SvgSVGAttributes<SVGSVGElement>
) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 18 16" fill="none" {...props}>
      <path
        d="M1 7H0v2h1V7zm16.707 1.707a1 1 0 000-1.414L11.343.929A1 1 0 109.93 2.343L15.586 8l-5.657 5.657a1 1 0 001.414 1.414l6.364-6.364zM1 9h16V7H1v2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default Arrow;
