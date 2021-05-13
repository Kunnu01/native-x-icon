import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LogoYahooIconProps {
  color?: string
  size?: IconSize
}

export function LogoYahooIcon({ size = 'normal', color = COLOR.SECONDARY }: LogoYahooIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M19.2337 1.74047C18.5981 1.74047 17.9681 1.69687 17.4 1.5L12 10.2502L6.6 1.5C6.03188 1.69687 5.43563 1.74047 4.8 1.74047C4.17563 1.74047 3.55687 1.69125 3 1.5L10.2 13.132V22.5C10.7625 22.3088 11.3719 22.2595 12 22.2595C12.6281 22.2595 13.2375 22.3088 13.8 22.5V13.1484L21 1.5C20.4431 1.6875 19.8581 1.74047 19.2337 1.74047Z'
        fill={contentColor}
      />
    </Svg>
  )
}
