import * as React from "react";
import { SVGProps } from "react";

export const CompaniesIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 18"
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 4V0H0v18h20V4H10ZM4 16H2v-2h2v2Zm0-4H2v-2h2v2Zm0-4H2V6h2v2Zm0-4H2V2h2v2Zm4 12H6v-2h2v2Zm0-4H6v-2h2v2Zm0-4H6V6h2v2Zm0-4H6V2h2v2Zm10 12h-8v-2h2v-2h-2v-2h2V8h-2V6h8v10Zm-2-8h-2v2h2V8Zm0 4h-2v2h2v-2Z"
      fill="#898989"
    />
  </svg>
);
