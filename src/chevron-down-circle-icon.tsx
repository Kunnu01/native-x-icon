import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ChevronDownCircleIconProps {
  color?: string
  size?: IconSize
}

export function ChevronDownCircleIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ChevronDownCircleIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M21.75 12C21.75 6.61547 17.3845 2.25 12 2.25C6.61547 2.25 2.25 6.61547 2.25 12C2.25 17.3845 6.61547 21.75 12 21.75C17.3845 21.75 21.75 17.3845 21.75 12ZM17.0302 10.6552L12.5302 15.1552C12.3895 15.2957 12.1988 15.3747 12 15.3747C11.8012 15.3747 11.6105 15.2957 11.4698 15.1552L6.96984 10.6552C6.83513 10.5134 6.76114 10.3245 6.76364 10.129C6.76614 9.9334 6.84495 9.74655 6.98325 9.60825C7.12155 9.46995 7.3084 9.39114 7.50398 9.38864C7.69955 9.38614 7.88836 9.46013 8.03016 9.59484L12 13.5642L15.9698 9.59484C16.1116 9.46013 16.3005 9.38614 16.496 9.38864C16.6916 9.39114 16.8785 9.46995 17.0168 9.60825C17.1551 9.74655 17.2339 9.9334 17.2364 10.129C17.2389 10.3245 17.1649 10.5134 17.0302 10.6552Z'
        fill={contentColor}
      />
    </Svg>
  )
}
