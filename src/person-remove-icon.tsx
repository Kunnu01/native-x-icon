import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface PersonRemoveIconProps {
  color?: string
  size?: IconSize
}

export function PersonRemoveIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: PersonRemoveIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M13.5 12C15.9745 12 18.1608 9.66984 18.375 6.80531C18.4814 5.36625 18.03 4.02422 17.1038 3.02719C16.1874 2.04234 14.9063 1.5 13.5 1.5C12.0825 1.5 10.8005 2.03906 9.89062 3.01781C8.97047 4.00734 8.52187 5.35219 8.625 6.80438C8.83547 9.66938 11.0213 12 13.5 12Z'
        fill={contentColor}
      />
      <Path
        d='M23.221 20.6137C22.8253 18.4191 21.5902 16.5755 19.6496 15.2817C17.926 14.1328 15.7421 13.5 13.5 13.5C11.258 13.5 9.07409 14.1328 7.35049 15.2812C5.40987 16.575 4.17471 18.4186 3.77909 20.6133C3.68862 21.1162 3.81143 21.6136 4.11612 21.9778C4.25432 22.1438 4.42784 22.2768 4.62401 22.3672C4.82019 22.4575 5.03407 22.5029 5.25003 22.5H21.75C21.9661 22.5031 22.1801 22.4578 22.3765 22.3676C22.5728 22.2773 22.7465 22.1443 22.8849 21.9783C23.1886 21.6141 23.3114 21.1167 23.221 20.6137Z'
        fill={contentColor}
      />
      <Path
        d='M6.75 10.125H1.5C1.30109 10.125 1.11032 10.204 0.96967 10.3447C0.829018 10.4853 0.75 10.6761 0.75 10.875C0.75 11.0739 0.829018 11.2647 0.96967 11.4053C1.11032 11.546 1.30109 11.625 1.5 11.625H6.75C6.94891 11.625 7.13968 11.546 7.28033 11.4053C7.42098 11.2647 7.5 11.0739 7.5 10.875C7.5 10.6761 7.42098 10.4853 7.28033 10.3447C7.13968 10.204 6.94891 10.125 6.75 10.125Z'
        fill={contentColor}
      />
    </Svg>
  )
}
