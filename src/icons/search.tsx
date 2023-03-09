import { SVGProps } from "react";

export const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      opacity={0.1}
      d="M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
      fill="#323232"
    />
    <path
      d="m15 15 6 6"
      stroke="#323232"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
      stroke="#323232"
      strokeWidth={2}
    />
  </svg>
);
