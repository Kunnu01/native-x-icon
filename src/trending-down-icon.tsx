import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface TrendingDownIconProps {
  color?: string
  size?: IconSize
}

export function TrendingDownIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: TrendingDownIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M21.75 11.25C22.1642 11.25 22.5 11.5858 22.5 12V17.25C22.5 17.6642 22.1642 18 21.75 18H16.5C16.0858 18 15.75 17.6642 15.75 17.25C15.75 16.8358 16.0858 16.5 16.5 16.5H21V12C21 11.5858 21.3358 11.25 21.75 11.25Z'
        fill={contentColor}
      />
      <Path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M1.71967 6.21967C2.01256 5.92678 2.48744 5.92678 2.78033 6.21967L8.46955 11.9089L8.46961 11.9089C8.53926 11.9786 8.62194 12.0339 8.71295 12.0716C8.80395 12.1093 8.90149 12.1287 9 12.1287C9.09851 12.1287 9.19605 12.1093 9.28705 12.0716C9.37806 12.0339 9.46074 11.9786 9.53039 11.9089L9.53045 11.9089L11.9088 9.53051C11.9088 9.53049 11.9089 9.53047 11.9089 9.53045C12.1178 9.32149 12.3659 9.15574 12.6388 9.04264C12.9119 8.92954 13.2045 8.87132 13.5 8.87132C13.7955 8.87132 14.0881 8.92954 14.3612 9.04264C14.6341 9.15574 14.8822 9.32149 15.0911 9.53045C15.0911 9.53047 15.0912 9.53049 15.0912 9.53051L21.5303 15.9697C21.8232 16.2626 21.8232 16.7374 21.5303 17.0303C21.2374 17.3232 20.7626 17.3232 20.4697 17.0303L14.0305 10.5911L14.0304 10.5911C13.9607 10.5214 13.8781 10.4661 13.7871 10.4284C13.696 10.3907 13.5985 10.3713 13.5 10.3713C13.4015 10.3713 13.304 10.3907 13.2129 10.4284C13.1219 10.4661 13.0393 10.5214 12.9696 10.5911L12.9695 10.5911L10.5912 12.9695C10.3822 13.1785 10.1342 13.3443 9.86116 13.4574C9.58814 13.5705 9.29552 13.6287 9 13.6287C8.70448 13.6287 8.41186 13.5705 8.13884 13.4574C7.86583 13.3443 7.61777 13.1785 7.40883 12.9695L1.71967 7.28033C1.42678 6.98744 1.42678 6.51256 1.71967 6.21967Z'
        fill={contentColor}
      />
    </Svg>
  )
}
