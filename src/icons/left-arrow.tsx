import { memo } from 'react'

import { RightArrowIcon } from './right-arrow'

const LeftArrow = ({ ...props }) => (
  <RightArrowIcon {...props} transform="rotate(-180)" />
)

export const LeftArrowIcon = memo(LeftArrow)
