import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LogoGoogleIconProps {
  color?: string
  size?: IconSize
}

export function LogoGoogleIcon({ size = 'normal', color = COLOR.SECONDARY }: LogoGoogleIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M22.1794 10.3819L22.0734 9.93234H12.3028V14.0677H18.1406C17.5345 16.9458 14.722 18.4608 12.4247 18.4608C10.7531 18.4608 8.99109 17.7577 7.82484 16.6275C7.20953 16.0217 6.71974 15.3005 6.38353 14.5051C6.04731 13.7098 5.87126 12.856 5.86547 11.9925C5.86547 10.2506 6.64828 8.50828 7.78734 7.36219C8.92641 6.21609 10.6467 5.57484 12.3572 5.57484C14.3161 5.57484 15.72 6.615 16.245 7.08938L19.1836 4.16625C18.3216 3.40875 15.9534 1.5 12.2625 1.5C9.41484 1.5 6.68437 2.59078 4.68844 4.58016C2.71875 6.53906 1.69922 9.37172 1.69922 12C1.69922 14.6283 2.66391 17.3194 4.57266 19.2938C6.61219 21.3994 9.50063 22.5 12.4748 22.5C15.1809 22.5 17.7459 21.4397 19.5741 19.5159C21.3713 17.6222 22.3008 15.0019 22.3008 12.255C22.3008 11.0986 22.1845 10.4119 22.1794 10.3819Z'
        fill={contentColor}
      />
    </Svg>
  )
}
