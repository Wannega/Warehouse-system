import * as React from 'react'
import { memo, SVGProps } from 'react'

const Delivery = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    strokeWidth={3}
    stroke="#949494"
    fill="none"
    width="2em"
    height="2em"
    {...props}>
    <path d="M19.55 43.93H38.1a2 2 0 0 0 2-2V16.28a2 2 0 0 0-2-2H8.68a2 2 0 0 0-2 2v25.63a2 2 0 0 0 2 2h2.6M44.33 43.93h-4.14v-20.7H50a1 1 0 0 1 .76.35l6.3 7.55a1 1 0 0 1 .23.64v12.16H53" />
    <ellipse cx={15.53} cy={45.23} rx={4.44} ry={4.5} />
    <ellipse cx={48.58} cy={45.23} rx={4.44} ry={4.5} />
  </svg>
)

export const DeliveryIcon = memo(Delivery)
