import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ListIconProps {
  color?: string
  size?: IconSize
}

export function ListIcon({ size = 'normal', color = COLOR.SECONDARY }: ListIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M6.375 6.75C6.375 6.12868 6.87868 5.625 7.5 5.625H21C21.6213 5.625 22.125 6.12868 22.125 6.75C22.125 7.37132 21.6213 7.875 21 7.875H7.5C6.87868 7.875 6.375 7.37132 6.375 6.75Z'
        fill={contentColor}
      />
      <Path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M6.375 12C6.375 11.3787 6.87868 10.875 7.5 10.875H21C21.6213 10.875 22.125 11.3787 22.125 12C22.125 12.6213 21.6213 13.125 21 13.125H7.5C6.87868 13.125 6.375 12.6213 6.375 12Z'
        fill={contentColor}
      />
      <Path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M6.375 17.25C6.375 16.6287 6.87868 16.125 7.5 16.125H21C21.6213 16.125 22.125 16.6287 22.125 17.25C22.125 17.8713 21.6213 18.375 21 18.375H7.5C6.87868 18.375 6.375 17.8713 6.375 17.25Z'
        fill={contentColor}
      />
      <Path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M2.25 6.75C2.25 5.92157 2.92157 5.25 3.75 5.25C4.57843 5.25 5.25 5.92157 5.25 6.75C5.25 7.57843 4.57843 8.25 3.75 8.25C2.92157 8.25 2.25 7.57843 2.25 6.75Z'
        fill={contentColor}
      />
      <Path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M2.25 12C2.25 11.1716 2.92157 10.5 3.75 10.5C4.57843 10.5 5.25 11.1716 5.25 12C5.25 12.8284 4.57843 13.5 3.75 13.5C2.92157 13.5 2.25 12.8284 2.25 12Z'
        fill={contentColor}
      />
      <Path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M2.25 17.25C2.25 16.4216 2.92157 15.75 3.75 15.75C4.57843 15.75 5.25 16.4216 5.25 17.25C5.25 18.0784 4.57843 18.75 3.75 18.75C2.92157 18.75 2.25 18.0784 2.25 17.25Z'
        fill={contentColor}
      />
    </Svg>
  )
}
