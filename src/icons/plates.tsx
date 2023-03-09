import * as React from "react"
import { SVGProps } from "react"

export const PlatesIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
  viewBox="0 0 18 18"
    width="1.2em"
    height="1.2em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 10h8V0H0v10Zm0 8h8v-6H0v6Zm10 0h8V8h-8v10Zm0-18v6h8V0h-8Z"
      fill="#775DA6"
    />
  </svg>
)
