import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LogoFigmaIconProps {
  color?: string
  size?: IconSize
}

export function LogoFigmaIcon({ size = 'normal', color = COLOR.SECONDARY }: LogoFigmaIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M15.75 8.25C16.7446 8.25 17.6984 7.85491 18.4017 7.15165C19.1049 6.44839 19.5 5.49456 19.5 4.5C19.5 3.50544 19.1049 2.55161 18.4017 1.84835C17.6984 1.14509 16.7446 0.75 15.75 0.75H8.25C7.25544 0.75 6.30161 1.14509 5.59835 1.84835C4.89509 2.55161 4.5 3.50544 4.5 4.5C4.5 5.49456 4.89509 6.44839 5.59835 7.15165C6.30161 7.85491 7.25544 8.25 8.25 8.25C7.25544 8.25 6.30161 8.64509 5.59835 9.34835C4.89509 10.0516 4.5 11.0054 4.5 12C4.5 12.9946 4.89509 13.9484 5.59835 14.6517C6.30161 15.3549 7.25544 15.75 8.25 15.75C7.50832 15.75 6.7833 15.9699 6.16661 16.382C5.54993 16.794 5.06928 17.3797 4.78545 18.0649C4.50162 18.7502 4.42736 19.5042 4.57206 20.2316C4.71675 20.959 5.0739 21.6272 5.59835 22.1516C6.1228 22.6761 6.79098 23.0333 7.51841 23.1779C8.24584 23.3226 8.99984 23.2484 9.68506 22.9645C10.3703 22.6807 10.956 22.2001 11.368 21.5834C11.7801 20.9667 12 20.2417 12 19.5V8.25H15.75Z'
        fill={contentColor}
      />
      <Path
        d='M15.75 15.75C17.8211 15.75 19.5 14.0711 19.5 12C19.5 9.92893 17.8211 8.25 15.75 8.25C13.6789 8.25 12 9.92893 12 12C12 14.0711 13.6789 15.75 15.75 15.75Z'
        fill={contentColor}
      />
    </Svg>
  )
}
