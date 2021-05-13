import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface CafeOutlineIconProps {
  color?: string
  size?: IconSize
}

export function CafeOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: CafeOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M17.25 3.75H20.25C20.4489 3.75 20.6397 3.82902 20.7803 3.96967C20.921 4.11032 21 4.30109 21 4.5V6.09375C21 6.66562 20.7728 7.21407 20.3684 7.61845C19.9641 8.02282 19.4156 8.25 18.8438 8.25H17.25'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M4.5 3.75H17.25V12.75C17.25 13.2425 17.153 13.7301 16.9645 14.1851C16.7761 14.64 16.4999 15.0534 16.1517 15.4017C15.8034 15.7499 15.39 16.0261 14.9351 16.2145C14.4801 16.403 13.9925 16.5 13.5 16.5H8.25C7.25544 16.5 6.30161 16.1049 5.59835 15.4017C4.89509 14.6984 4.5 13.7446 4.5 12.75V3.75Z'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M3 19.5H18.75'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </Svg>
  )
}
