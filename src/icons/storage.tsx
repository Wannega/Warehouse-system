import * as React from 'react'
import { SVGProps, memo } from 'react'

const Storage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1.8em"
    height="1.8em"
    {...props}>
    <path
      fill="none"
      stroke="#949494"
      strokeWidth={1.5}
      d="M2 5.077S3.667 2 12 2s10 3.077 10 3.077v13.846S20.333 22 12 22 2 18.923 2 18.923V5.077ZM2 13s3.333 3 10 3 10-3 10-3M2 7s3.333 3 10 3 10-3 10-3"
    />
  </svg>
)

export const StorageIcon = memo(Storage)
