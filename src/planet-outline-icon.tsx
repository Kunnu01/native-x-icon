import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface PlanetOutlineIconProps {
  color?: string
  size?: IconSize
}

export function PlanetOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: PlanetOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M19.3819 13.3345C22.1414 15.5488 23.6761 17.5063 23.1464 18.4227C22.3097 19.8688 16.6411 18.1659 10.4855 14.6188C4.32984 11.0718 0.017338 7.02416 0.853588 5.57853C1.37671 4.67478 3.78703 5.00103 7.02421 6.239'
        stroke={contentColor}
        stroke-miterlimit='10'
      />
      <Path
        d='M12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 7.85786 16.1421 4.5 12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 16.1421 7.85786 19.5 12 19.5Z'
        stroke={contentColor}
        stroke-miterlimit='10'
      />
    </Svg>
  )
}
