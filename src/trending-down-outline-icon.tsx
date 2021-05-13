import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface TrendingDownOutlineIconProps {
  color?: string
  size?: IconSize
}

export function TrendingDownOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: TrendingDownOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M16.5 17.25H21.75V12'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M2.25 6.75L7.93922 12.4392C8.07851 12.5785 8.24388 12.6891 8.4259 12.7645C8.60791 12.8399 8.80299 12.8787 9 12.8787C9.19701 12.8787 9.39209 12.8399 9.5741 12.7645C9.75612 12.6891 9.92149 12.5785 10.0608 12.4392L12.4392 10.0608C12.5785 9.92146 12.7439 9.81094 12.9259 9.73553C13.1079 9.66013 13.303 9.62132 13.5 9.62132C13.697 9.62132 13.8921 9.66013 14.0741 9.73553C14.2561 9.81094 14.4215 9.92146 14.5608 10.0608L21 16.5'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </Svg>
  )
}
