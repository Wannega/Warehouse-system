import { SVGProps } from "react";

export const LogoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="2em"
    height="2em"
    {...props}
  >
    <g id="SVGRepo_iconCarrier">
      <defs>
        <style>
          {
            ".cls-1{fill:none;stroke:#020202;stroke-miterlimit:10;stroke-width:1.6px}"
          }
        </style>
      </defs>
      <g id="roll_brush" data-name="roll brush">
        <circle className="cls-1" cx={15.8} cy={14.91} r={6.71} />
        <circle className="cls-1" cx={8.13} cy={14.91} r={6.71} />
        <circle className="cls-1" cx={11.96} cy={8.19} r={6.71} />
      </g>
    </g>
  </svg>
);
