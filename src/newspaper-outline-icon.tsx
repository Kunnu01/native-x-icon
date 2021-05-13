import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface NewspaperOutlineIconProps {
  color?: string
  size?: IconSize
}

export function NewspaperOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: NewspaperOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M17.25 19.4934V3.375C17.2491 3.0769 17.1303 2.79125 16.9195 2.58046C16.7087 2.36967 16.4231 2.25087 16.125 2.25H3.375C3.0769 2.25087 2.79125 2.36967 2.58046 2.58046C2.36967 2.79125 2.25087 3.0769 2.25 3.375V19.875C2.25148 20.3718 2.4495 20.8479 2.80081 21.1992C3.15212 21.5505 3.62818 21.7485 4.125 21.75H19.5'
        stroke={contentColor}
        stroke-linejoin='round'
      />
      <Path
        d='M19.5 21.75C18.9033 21.75 18.331 21.5129 17.909 21.091C17.4871 20.669 17.25 20.0967 17.25 19.5V6H20.625C20.9234 6 21.2095 6.11853 21.4205 6.3295C21.6315 6.54048 21.75 6.82663 21.75 7.125V19.5C21.75 20.0967 21.5129 20.669 21.091 21.091C20.669 21.5129 20.0967 21.75 19.5 21.75Z'
        stroke={contentColor}
        stroke-linejoin='round'
      />
      <Path
        d='M11.25 6H14.25'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M11.25 9H14.25'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M5.25 12H14.25'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M5.25 15H14.25'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M5.25 18H14.25'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M8.25 9.75H5.25C5.05109 9.75 4.86032 9.67098 4.71967 9.53033C4.57902 9.38968 4.5 9.19891 4.5 9V6C4.5 5.80109 4.57902 5.61032 4.71967 5.46967C4.86032 5.32902 5.05109 5.25 5.25 5.25H8.25C8.44891 5.25 8.63968 5.32902 8.78033 5.46967C8.92098 5.61032 9 5.80109 9 6V9C9 9.19891 8.92098 9.38968 8.78033 9.53033C8.63968 9.67098 8.44891 9.75 8.25 9.75Z'
        fill={contentColor}
      />
    </Svg>
  )
}
