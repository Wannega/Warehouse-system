import * as React from 'react'
import { memo, SVGProps } from 'react'

const NearestDelivery = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 50 50"
    width="3em"
    height="3em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <rect width={50} height={50} rx={20} fill="#C7F4F0" />
    <path
      d="M22.69 12.695a3.626 3.626 0 0 1 3.62 0l.002.002 8.459 4.833c.197.114.382.245.553.393L24.5 24.108l-10.825-6.185c.172-.147.357-.28.554-.393l.005-.003 8.456-4.832ZM12.475 20.02a3.63 3.63 0 0 0-.058.646v9.669a3.626 3.626 0 0 0 1.812 3.135l.005.003 8.454 4.83.002.002c.192.111.394.203.602.277v-12.38L12.475 20.02ZM25.708 38.582c.208-.073.41-.166.602-.277l.002-.001 8.454-4.83.005-.003a3.626 3.626 0 0 0 1.812-3.136v-9.67c0-.217-.02-.432-.058-.645l-10.817 6.181v12.381Z"
      fill="#69DAC8"
    />
  </svg>
)

export const NearestDeliveryIcon = memo(NearestDelivery)
