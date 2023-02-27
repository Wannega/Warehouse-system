import * as React from 'react'
import { memo, SVGProps } from 'react'

const Filter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="-5.5 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    width="1.5em"
    height="1.5em"
    stroke="#949494"
    {...props}>
    <title>{'filter'}</title>
    <path d="M8.48 25.72c-.16 0-.32-.04-.44-.12a.894.894 0 0 1-.4-.72v-8.72L.16 7.68c-.2-.24-.28-.6-.12-.88s.44-.48.76-.48h19.8c.32 0 .64.2.76.48.12.32.08.64-.12.92l-7.8 8.8v6.32c0 .32-.2.6-.48.76l-4.08 2c-.08.08-.24.12-.4.12zM2.64 7.96l6.48 7.32c.12.16.2.36.2.56v7.64l2.4-1.2V16.2c0-.2.08-.4.2-.56l6.8-7.68H2.64z" />
  </svg>
)

export const FilterIcon = memo(Filter)
