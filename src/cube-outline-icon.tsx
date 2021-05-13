import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface CubeOutlineIconProps {
  color?: string
  size?: IconSize
}

export function CubeOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: CubeOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M21 16.0018V7.99739C20.9997 7.73541 20.9308 7.47807 20.8001 7.25101C20.6694 7.02394 20.4815 6.83506 20.2552 6.70317L13.1302 2.55661C12.7869 2.35675 12.3968 2.25146 11.9995 2.25146C11.6023 2.25146 11.2122 2.35675 10.8689 2.55661L3.74484 6.70317C3.51848 6.83506 3.33061 7.02394 3.19993 7.25101C3.06925 7.47807 3.00032 7.73541 3 7.99739V16.0018C3.00016 16.2639 3.06901 16.5214 3.1997 16.7487C3.33038 16.9759 3.51834 17.1649 3.74484 17.2969L10.8698 21.4435C11.2132 21.6431 11.6033 21.7482 12.0005 21.7482C12.3976 21.7482 12.7877 21.6431 13.1311 21.4435L20.2561 17.2969C20.4824 17.1648 20.6702 16.9758 20.8007 16.7485C20.9312 16.5213 20.9999 16.2638 21 16.0018Z'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M3.23438 7.21802L12 12.3743L20.7656 7.21802'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M12 21.7493V12.3743'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </Svg>
  )
}
