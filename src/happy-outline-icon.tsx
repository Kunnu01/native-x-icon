import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface HappyOutlineIconProps {
  color?: string
  size?: IconSize
}

export function HappyOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: HappyOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M8.625 12C9.24632 12 9.75 11.4963 9.75 10.875C9.75 10.2537 9.24632 9.75 8.625 9.75C8.00368 9.75 7.5 10.2537 7.5 10.875C7.5 11.4963 8.00368 12 8.625 12Z'
        fill={contentColor}
      />
      <Path
        d='M12.0024 18C9.87331 18 8.08268 16.6158 7.51596 14.7268C7.50011 14.6705 7.49761 14.6114 7.50867 14.554C7.51972 14.4967 7.54401 14.4427 7.57961 14.3964C7.61522 14.3501 7.66115 14.3128 7.71374 14.2874C7.76633 14.2619 7.82412 14.2492 7.88253 14.25H16.118C16.1764 14.2492 16.2342 14.2619 16.2868 14.2874C16.3394 14.3128 16.3853 14.3501 16.4209 14.3964C16.4565 14.4427 16.4808 14.4967 16.4919 14.554C16.5029 14.6114 16.5004 14.6705 16.4846 14.7268C15.9225 16.6158 14.1314 18 12.0024 18Z'
        fill={contentColor}
      />
      <Path
        d='M15.375 12C15.9963 12 16.5 11.4963 16.5 10.875C16.5 10.2537 15.9963 9.75 15.375 9.75C14.7537 9.75 14.25 10.2537 14.25 10.875C14.25 11.4963 14.7537 12 15.375 12Z'
        fill={contentColor}
      />
      <Path
        d='M12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75Z'
        stroke={contentColor}
        stroke-miterlimit='10'
      />
    </Svg>
  )
}
