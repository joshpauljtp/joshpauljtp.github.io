import { JSX } from "solid-js";

type Props = JSX.IntrinsicAttributes &
  JSX.SvgSVGAttributes<SVGSVGElement> & {
    dir?: "left" | "right";
  };

function Arrow(props: Props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 18 16" fill="none" {...props}>
      <path
        d={
          props.dir === "left"
            ? "M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM1 9H19V7H1V9Z"
            : "M1 7H0v2h1V7zm16.707 1.707a1 1 0 000-1.414L11.343.929A1 1 0 109.93 2.343L15.586 8l-5.657 5.657a1 1 0 001.414 1.414l6.364-6.364zM1 9h16V7H1v2z"
        }
        fill="currentColor"
      />
    </svg>
  );
}

export default Arrow;
