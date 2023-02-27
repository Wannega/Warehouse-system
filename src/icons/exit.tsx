import * as React from 'react'
import { memo, SVGProps } from 'react'

const Exit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    strokeWidth={3}
    stroke="#D5505D"
    fill="none"
    width="2em"
    height="2em"
    {...props}>
    <path d="m46.02 21.95 9.91 9.91-9.91 9.91M55.93 31.86H19.59M40 38.18V52a2.8 2.8 0 0 1-2.81 2.8H12A2.8 2.8 0 0 1 9.16 52V11.77A2.8 2.8 0 0 1 12 9h25.19A2.8 2.8 0 0 1 40 11.77V25" />
  </svg>
)

export const ExitIcon = memo(Exit)
