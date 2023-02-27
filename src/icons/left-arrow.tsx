import { memo } from 'react'

import { RightArrowIcon } from './right-arrow'

const LeftArrow = () => <RightArrowIcon transform="rotate(-180)" />

export const LeftArrowIcon = memo(LeftArrow)
