import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ChevronUpCircleOutlineIconProps {
  color?: string
  size?: IconSize
}

export function ChevronUpCircleOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ChevronUpCircleOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M16.5 13.875L12 9.375L7.5 13.875'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M12 3C7.03125 3 3 7.03125 3 12C3 16.9688 7.03125 21 12 21C16.9688 21 21 16.9688 21 12C21 7.03125 16.9688 3 12 3Z'
        stroke={contentColor}
        stroke-miterlimit='10'
      />
    </Svg>
  )
}