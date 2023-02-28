import * as React from 'react'
import { memo, SVGProps } from 'react'

const Actions = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="1.8em"
    height="1.8em"
    {...props}>
    <g fillRule="evenodd" clipRule="evenodd" fill="#949494">
      <path d="M2.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM5 11.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM9.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Zm2.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM16.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Zm2.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z" />
    </g>
  </svg>
)

export const ActionsIcon = memo(Actions)
