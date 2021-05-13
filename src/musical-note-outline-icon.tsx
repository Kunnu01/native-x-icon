import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface MusicalNoteOutlineIconProps {
  color?: string
  size?: IconSize
}

export function MusicalNoteOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: MusicalNoteOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M11.25 16.0927V19.875C11.2509 20.1917 11.1524 20.5007 10.9684 20.7585C10.7844 21.0162 10.5242 21.2097 10.2244 21.3118L9.21798 21.6507C8.00391 22.059 6.75001 21.1468 6.75001 19.8544C6.74907 19.518 6.85373 19.1897 7.04926 18.9159C7.24478 18.6421 7.52131 18.4365 7.83985 18.3282L10.2244 17.5257C10.5241 17.4236 10.7842 17.2301 10.9682 16.9725C11.1522 16.7149 11.2507 16.406 11.25 16.0894V4.31254C11.2495 4.14482 11.3047 3.98167 11.4071 3.84878C11.5094 3.71589 11.653 3.6208 11.8153 3.57848L16.898 2.25942C16.9395 2.24861 16.983 2.24746 17.0251 2.25606C17.0672 2.26466 17.1067 2.28278 17.1407 2.30902C17.1747 2.33527 17.2022 2.36894 17.2211 2.40747C17.2401 2.446 17.25 2.48836 17.25 2.53129V5.23879C17.2505 5.40698 17.1949 5.57052 17.092 5.70355C16.9891 5.83658 16.8448 5.93151 16.6819 5.97333L12.3863 7.05754C12.0603 7.14111 11.7716 7.33102 11.5658 7.5972C11.36 7.86338 11.2489 8.19061 11.25 8.52708V10.3735'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </Svg>
  )
}
