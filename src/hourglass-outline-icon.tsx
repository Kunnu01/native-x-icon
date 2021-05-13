import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface HourglassOutlineIconProps {
  color?: string
  size?: IconSize
}

export function HourglassOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: HourglassOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M6.82548 21.75H17.1745C18.1027 21.75 18.8409 20.9864 18.7411 20.1066C18.0966 14.4375 14.25 14.5312 14.25 12C14.25 9.46875 18.1458 9.60938 18.7406 3.89344C18.8344 3.01312 18.1027 2.25 17.1745 2.25H6.82548C5.89736 2.25 5.16751 3.01312 5.25939 3.89344C5.85423 9.60938 9.75001 9.42188 9.75001 12C9.75001 14.5781 5.90345 14.4375 5.25939 20.1066C5.15908 20.9864 5.89736 21.75 6.82548 21.75Z'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M16.0923 20.25H7.92808C7.19684 20.25 6.99059 19.4062 7.5034 18.8831C8.74465 17.625 11.2501 16.7241 11.2501 15.2812V10.5C11.2501 9.56953 9.46886 8.85938 8.36683 7.35C8.18496 7.10109 8.20324 6.75 8.66543 6.75H15.3559C15.7501 6.75 15.8354 7.09828 15.6559 7.34766C14.5698 8.85938 12.7501 9.56484 12.7501 10.5V15.2812C12.7501 16.7123 15.3615 17.4844 16.5189 18.8845C16.9853 19.4489 16.8221 20.25 16.0923 20.25Z'
        fill={contentColor}
      />
    </Svg>
  )
}
