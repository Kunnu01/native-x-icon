import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface InformationOutlineIconProps {
  color?: string
  size?: IconSize
}

export function InformationOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: InformationOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M9.1875 10.3125H12.1875V18.375'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M8.76562 18.5625H15.2344'
        stroke={contentColor}
        stroke-miterlimit='10'
        stroke-linecap='round'
      />
      <Path
        d='M12 7.49999C11.7033 7.49999 11.4133 7.41201 11.1666 7.24719C10.92 7.08237 10.7277 6.8481 10.6142 6.57401C10.5006 6.29992 10.4709 5.99832 10.5288 5.70735C10.5867 5.41638 10.7296 5.1491 10.9393 4.93933C11.1491 4.72955 11.4164 4.58669 11.7074 4.52881C11.9983 4.47093 12.2999 4.50063 12.574 4.61417C12.8481 4.7277 13.0824 4.91996 13.2472 5.16663C13.412 5.4133 13.5 5.70331 13.5 5.99999C13.5 6.39781 13.342 6.77934 13.0607 7.06065C12.7794 7.34195 12.3978 7.49999 12 7.49999Z'
        fill={contentColor}
      />
    </Svg>
  )
}
