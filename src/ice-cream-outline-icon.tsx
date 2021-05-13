import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface IceCreamOutlineIconProps {
  color?: string
  size?: IconSize
}

export function IceCreamOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: IceCreamOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M16.5 12L12 22.5L9.09375 15.7031'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M14.0353 10.4756C13.6753 11.2383 12.8991 11.8125 12 11.8125C11.3859 11.8125 10.7344 11.5781 10.4236 11.355C10.1377 11.1502 9.75 11.25 9.75 11.7188V14.625C9.74913 14.9231 9.63033 15.2087 9.41954 15.4195C9.20875 15.6303 8.9231 15.7491 8.625 15.75V15.75C8.3269 15.7491 8.04125 15.6303 7.83046 15.4195C7.61967 15.2087 7.50087 14.9231 7.5 14.625V12H7.40625C5.74922 12 4.5 10.657 4.5 9C4.5 8.20435 4.81607 7.44129 5.37868 6.87868C5.94129 6.31607 6.70435 6 7.5 6H7.875V5.625C7.875 4.53098 8.3096 3.48177 9.08318 2.70818C9.85677 1.9346 10.906 1.5 12 1.5C13.094 1.5 14.1432 1.9346 14.9168 2.70818C15.6904 3.48177 16.125 4.53098 16.125 5.625V6H16.5C17.2956 6 18.0587 6.31607 18.6213 6.87868C19.1839 7.44129 19.5 8.20435 19.5 9C19.5 9.79565 19.1839 10.5587 18.6213 11.1213C18.0587 11.6839 17.2956 12 16.5 12C15.4791 12 14.5313 11.3906 14.0348 10.4761L14.0353 10.4756Z'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </Svg>
  )
}
