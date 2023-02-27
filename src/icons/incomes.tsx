import * as React from 'react'
import { memo, SVGProps } from 'react'

const Incomes = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 50 50"
    width="3em"
    height="3em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <rect width={50} height={50} rx={20} fill="#D7F4D5" />
    <path
      d="M32.727 18.553h1.643c-.23-.326-.47-.629-.725-.93l-.918.93ZM32.378 16.341a13.717 13.717 0 0 0-.93-.725v1.643l.93-.918ZM33.658 17.623l3.565-3.564c.35-.35.35-.93 0-1.281a.912.912 0 0 0-1.28 0l-3.565 3.565c.459.398.882.833 1.28 1.28ZM31.45 14.625a.913.913 0 0 0-.906-.906.901.901 0 0 0-.895.858c.629.302 1.233.64 1.801 1.039v-.991ZM36.284 19.458a.913.913 0 0 0-.907-.906h-1.003c.4.568.75 1.172 1.04 1.8a.903.903 0 0 0 .87-.894ZM25.406 28.824h.363c.471 0 .846-.423.846-.943 0-.652-.182-.749-.592-.894l-.617-.217v2.054Z"
      fill="#5EC83B"
    />
    <path
      d="M35.423 20.353c-.012 0-.024.012-.048.012h-4.833a.91.91 0 0 1-.35-.073.946.946 0 0 1-.496-.495 1.047 1.047 0 0 1-.06-.339v-4.833c0-.012.012-.024.012-.048a12.082 12.082 0 0 0-5.148-1.16c-6.67 0-12.083 5.413-12.083 12.083S17.83 37.583 24.5 37.583 36.583 32.17 36.583 25.5a12.08 12.08 0 0 0-1.16-5.147Zm-8.809 4.93c.774.265 1.813.833 1.813 2.61 0 1.51-1.196 2.755-2.658 2.755h-.363v.302c0 .495-.41.906-.906.906a.913.913 0 0 1-.906-.906v-.302h-.097c-1.607 0-2.924-1.354-2.924-3.021 0-.508.41-.919.906-.919.495 0 .906.411.906.907 0 .664.496 1.208 1.112 1.208h.097V26.14l-1.209-.422c-.773-.266-1.812-.834-1.812-2.61 0-1.51 1.196-2.755 2.658-2.755h.363v-.29c0-.496.41-.907.906-.907.495 0 .906.411.906.907v.302h.097c1.607 0 2.924 1.353 2.924 3.02 0 .496-.41.907-.906.907a.913.913 0 0 1-.907-.907c0-.664-.495-1.208-1.111-1.208h-.097v2.683l1.209.423Z"
      fill="#5EC83B"
    />
    <path
      d="M22.385 23.12c0 .652.182.749.592.894l.617.217v-2.054h-.363c-.459 0-.846.423-.846.942Z"
      fill="#5EC83B"
    />
  </svg>
)

export const IncomesIcon = memo(Incomes)
