import { memo, SVGProps } from 'react'

const RightArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 -6.5 36 36"
    xmlns="http://www.w3.org/2000/svg"
    width="1.5em"
    height="1.5em"
    {...props}>
    <title>{'right-arrow'}</title>
    <path
      d="M25.108.29 35.65 10.742l.059.054c.18.179.277.408.291.642v.124a.984.984 0 0 1-.291.642l-.052.044L25.108 22.71a1.005 1.005 0 0 1-1.413 0 .985.985 0 0 1 0-1.402l9.008-8.934H.999c-.552 0-.999-.443-.999-.99a.995.995 0 0 1 1-.992h31.468l-8.773-8.7a.985.985 0 0 1 0-1.402 1.005 1.005 0 0 1 1.413 0Zm10.007 11.093L24.401 22.009 35.002 11.5v-.004l-.059-.053-.06-.06h.232Z"
      fill="#4872D2"
      fillRule="nonzero"
    />
  </svg>
)

export const RightArrowIcon = memo(RightArrow)
