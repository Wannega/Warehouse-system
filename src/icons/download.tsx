import { memo, SVGProps } from 'react'

const Download = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="2em"
    height="2em"
    {...props}>
    <path
      d="M20 15v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3m4-4 4 4m0 0 4-4m-4 4V3"
      stroke="#949494"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const DownloadIcon = memo(Download)
