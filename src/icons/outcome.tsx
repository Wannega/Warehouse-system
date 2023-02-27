import { memo, SVGProps } from 'react'

const Outcome = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 50 50"
    width="3em"
    height="3em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <rect width={50} height={50} rx={20} fill="#F5D8DD" />
    <path
      d="M22.385 23.12c0 .652.182.749.592.894l.617.217v-2.054h-.363c-.459 0-.846.423-.846.943ZM25.406 28.824h.363c.471 0 .846-.423.846-.943 0-.652-.182-.749-.592-.894l-.617-.217v2.054Z"
      fill="#D3505E"
    />
    <path
      d="m33.66 17.622-2.478 2.477a.896.896 0 0 1-.64.266.896.896 0 0 1-.64-.266.912.912 0 0 1 0-1.281l2.476-2.477c-2.126-1.813-4.87-2.924-7.878-2.924-6.67 0-12.083 5.413-12.083 12.083S17.83 37.583 24.5 37.583 36.583 32.17 36.583 25.5c0-3.009-1.111-5.752-2.924-7.878Zm-7.045 7.66c.773.279 1.812.834 1.812 2.61 0 1.511-1.196 2.756-2.658 2.756h-.363v.302c0 .495-.41.906-.906.906a.913.913 0 0 1-.906-.906v-.302h-.097c-1.607 0-2.924-1.354-2.924-3.021 0-.508.41-.919.906-.919.495 0 .906.411.906.907 0 .664.496 1.208 1.112 1.208h.097V26.14l-1.209-.422c-.773-.278-1.812-.834-1.812-2.61 0-1.51 1.196-2.755 2.658-2.755h.363v-.29c0-.496.41-.907.906-.907.495 0 .906.411.906.907v.302h.097c1.607 0 2.924 1.353 2.924 3.02 0 .496-.41.907-.906.907a.913.913 0 0 1-.907-.907c0-.664-.495-1.208-1.111-1.208h-.097v2.683l1.209.423ZM37.417 13.066a.946.946 0 0 0-.495-.495 1.05 1.05 0 0 0-.339-.06H31.75a.913.913 0 0 0-.906.906c0 .495.41.906.906.906h2.646l-2.018 2.018c.46.399.882.822 1.281 1.28l2.018-2.017v2.646c0 .495.41.906.906.906.496 0 .907-.41.907-.906v-4.833c0-.121-.025-.23-.073-.35Z"
      fill="#D3505E"
    />
  </svg>
)

export const OutcomeIcon = memo(Outcome)
