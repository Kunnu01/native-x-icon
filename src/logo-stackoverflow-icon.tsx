import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LogoStackoverflowIconProps {
  color?: string
  size?: IconSize
}

export function LogoStackoverflowIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: LogoStackoverflowIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path d='M18.375 20.625V15H20.25V22.5H3V15H4.875V20.625H18.375Z' fill={contentColor} />
      <Path
        d='M6.98906 14.4736L16.297 16.3894L16.6908 14.5463L7.38281 12.6305L6.98906 14.4736ZM8.22047 10.1086L16.8384 14.0625L17.625 12.3638L9.00844 8.38688L8.22047 10.1086ZM10.6088 5.93672L17.9213 11.9264L19.1278 10.4958L11.8153 4.50609L10.6088 5.93672ZM15.375 1.5L13.8098 2.61562L19.4733 10.133L21 9L15.375 1.5ZM6.75 18.75H16.3125V16.875H6.75V18.75Z'
        fill={contentColor}
      />
    </Svg>
  )
}
