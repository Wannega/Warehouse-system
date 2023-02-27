import * as React from 'react'
import { memo, SVGProps } from 'react'

const Gear = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 32 32"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    width="2em"
    height="2em"
    {...props}>
    <g
      fill="none"
      stroke="#949494"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}>
      <circle cx={16} cy={16} r={4} />
      <path d="m27.758 10.366-1-1.732a2 2 0 0 0-2.732-.732l-.526.304c-2 1.154-4.5-.289-4.5-2.598V5a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v.608c0 2.309-2.5 3.753-4.5 2.598l-.526-.304a2 2 0 0 0-2.732.732l-1 1.732a2 2 0 0 0 .732 2.732l.526.304c2 1.155 2 4.041 0 5.196l-.526.304a2 2 0 0 0-.732 2.732l1 1.732a2 2 0 0 0 2.732.732l.526-.304c2-1.155 4.5.289 4.5 2.598V27a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-.608c0-2.309 2.5-3.753 4.5-2.598l.526.304a2 2 0 0 0 2.732-.732l1-1.732a2 2 0 0 0-.732-2.732l-.526-.304c-2-1.155-2-4.041 0-5.196l.526-.304a1.999 1.999 0 0 0 .732-2.732z" />
    </g>
  </svg>
)

export const GearIcon = memo(Gear)
