import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface CafeIconProps {
  color?: string
  size?: IconSize
}

export function CafeIcon({ size = 'normal', color = COLOR.SECONDARY }: CafeIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M20.25 3H4.5C4.30109 3 4.11032 3.07902 3.96967 3.21967C3.82902 3.36032 3.75 3.55109 3.75 3.75V12.75C3.75136 13.9431 4.22591 15.0869 5.06953 15.9305C5.91314 16.7741 7.05694 17.2486 8.25 17.25H13.5C14.6931 17.2486 15.8369 16.7741 16.6805 15.9305C17.5241 15.0869 17.9986 13.9431 18 12.75V9H18.8438C19.6143 8.99913 20.353 8.69266 20.8978 8.14782C21.4427 7.60298 21.7491 6.86427 21.75 6.09375V4.5C21.75 4.10218 21.592 3.72064 21.3107 3.43934C21.0294 3.15804 20.6478 3 20.25 3ZM20.25 6.09375C20.25 6.46671 20.1018 6.8244 19.8381 7.08812C19.5744 7.35184 19.2167 7.5 18.8438 7.5H18V4.5H20.25V6.09375Z'
        fill={contentColor}
      />
      <Path
        d='M18.75 18.75H3C2.80109 18.75 2.61032 18.829 2.46967 18.9697C2.32902 19.1103 2.25 19.3011 2.25 19.5C2.25 19.6989 2.32902 19.8897 2.46967 20.0303C2.61032 20.171 2.80109 20.25 3 20.25H18.75C18.9489 20.25 19.1397 20.171 19.2803 20.0303C19.421 19.8897 19.5 19.6989 19.5 19.5C19.5 19.3011 19.421 19.1103 19.2803 18.9697C19.1397 18.829 18.9489 18.75 18.75 18.75Z'
        fill={contentColor}
      />
    </Svg>
  )
}
