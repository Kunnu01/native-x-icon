import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface AlbumsIconProps {
  color?: string
  size?: IconSize
}

export function AlbumsIcon({ size = 'normal', color = COLOR.SECONDARY }: AlbumsIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M17.25 4.5H6.75C6.55109 4.5 6.36032 4.42098 6.21967 4.28033C6.07902 4.13968 6 3.94891 6 3.75C6 3.55109 6.07902 3.36032 6.21967 3.21967C6.36032 3.07902 6.55109 3 6.75 3H17.25C17.4489 3 17.6397 3.07902 17.7803 3.21967C17.921 3.36032 18 3.55109 18 3.75C18 3.94891 17.921 4.13968 17.7803 4.28033C17.6397 4.42098 17.4489 4.5 17.25 4.5Z'
        fill={contentColor}
      />
      <Path
        d='M18.75 6.75H5.25C5.05109 6.75 4.86032 6.67098 4.71967 6.53033C4.57902 6.38968 4.5 6.19891 4.5 6C4.5 5.80109 4.57902 5.61032 4.71967 5.46967C4.86032 5.32902 5.05109 5.25 5.25 5.25H18.75C18.9489 5.25 19.1397 5.32902 19.2803 5.46967C19.421 5.61032 19.5 5.80109 19.5 6C19.5 6.19891 19.421 6.38968 19.2803 6.53033C19.1397 6.67098 18.9489 6.75 18.75 6.75Z'
        fill={contentColor}
      />
      <Path
        d='M19.6467 21H4.35328C3.79565 20.9994 3.26103 20.7776 2.86672 20.3833C2.47241 19.989 2.25062 19.4544 2.25 18.8967V9.60328C2.25062 9.04565 2.47241 8.51103 2.86672 8.11672C3.26103 7.72241 3.79565 7.50062 4.35328 7.5H19.6467C20.2044 7.50062 20.739 7.72241 21.1333 8.11672C21.5276 8.51103 21.7494 9.04565 21.75 9.60328V18.8967C21.7494 19.4544 21.5276 19.989 21.1333 20.3833C20.739 20.7776 20.2044 20.9994 19.6467 21Z'
        fill={contentColor}
      />
    </Svg>
  )
}
