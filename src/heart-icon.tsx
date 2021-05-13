import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface HeartIconProps {
  color?: string
  size?: IconSize
}

export function HeartIcon({ size = 'normal', color = COLOR.SECONDARY }: HeartIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 21C11.699 20.9996 11.405 20.9086 11.1563 20.7389C7.47238 18.2381 5.87722 16.5234 4.99738 15.4514C3.12238 13.1663 2.22472 10.8202 2.25003 8.27953C2.27956 5.36813 4.61534 3 7.45691 3C9.52316 3 10.9543 4.16391 11.7877 5.13328C11.8141 5.16368 11.8467 5.18805 11.8833 5.20476C11.92 5.22146 11.9598 5.23011 12 5.23011C12.0403 5.23011 12.0801 5.22146 12.1167 5.20476C12.1534 5.18805 12.186 5.16368 12.2124 5.13328C13.0458 4.16297 14.4769 3 16.5432 3C19.3847 3 21.7205 5.36812 21.75 8.28C21.7753 10.8211 20.8768 13.1672 19.0027 15.4519C18.1228 16.5239 16.5277 18.2386 12.8438 20.7394C12.5951 20.9089 12.3011 20.9998 12 21Z'
        fill={contentColor}
      />
    </Svg>
  )
}
