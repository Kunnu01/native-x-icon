import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ReorderTwoIconProps {
  color?: string
  size?: IconSize
}

export function ReorderTwoIcon({ size = 'normal', color = COLOR.SECONDARY }: ReorderTwoIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M4.5 14.25C4.5 13.6805 4.96171 13.2188 5.53125 13.2188H18.4688C19.0383 13.2188 19.5 13.6805 19.5 14.25C19.5 14.8195 19.0383 15.2812 18.4688 15.2812H5.53125C4.96171 15.2812 4.5 14.8195 4.5 14.25Z'
        fill={contentColor}
      />
      <Path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M4.5 9.75C4.5 9.18046 4.96171 8.71875 5.53125 8.71875H18.4688C19.0383 8.71875 19.5 9.18046 19.5 9.75C19.5 10.3195 19.0383 10.7812 18.4688 10.7812H5.53125C4.96171 10.7812 4.5 10.3195 4.5 9.75Z'
        fill={contentColor}
      />
    </Svg>
  )
}
