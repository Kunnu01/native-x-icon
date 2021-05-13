import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface RainyOutlineIconProps {
  color?: string
  size?: IconSize
}

export function RainyOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: RainyOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M5.37234 7.63359C5.52901 7.60929 5.67402 7.53617 5.78672 7.42466C5.89942 7.31314 5.97405 7.16891 6 7.0125C6.56672 3.57047 9.07641 1.5 12 1.5C14.7155 1.5 16.5291 3.26953 17.2594 5.14406C17.3063 5.26421 17.3837 5.37006 17.484 5.45119C17.5843 5.53231 17.704 5.58592 17.8312 5.60672C20.175 5.98875 22.125 7.55391 22.125 10.275C22.125 13.0594 19.8469 15 17.0625 15H6.09375C3.77344 15 1.875 13.8422 1.875 11.2875C1.875 9.01547 3.68766 7.90219 5.37234 7.63359Z'
        stroke={contentColor}
        stroke-linejoin='round'
      />
      <Path
        d='M6.75 18L5.25 20.25'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M10.5 18L7.5 22.5'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M14.25 18L12.75 20.25'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M18 18L15 22.5'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </Svg>
  )
}
