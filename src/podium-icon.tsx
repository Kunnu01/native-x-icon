import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface PodiumIconProps {
  color?: string
  size?: IconSize
}

export function PodiumIcon({ size = 'normal', color = COLOR.SECONDARY }: PodiumIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M15 1.5H9C8.60218 1.5 8.22064 1.65804 7.93934 1.93934C7.65804 2.22064 7.5 2.60218 7.5 3V22.3125C7.5 22.3622 7.51975 22.4099 7.55492 22.4451C7.59008 22.4802 7.63777 22.5 7.6875 22.5H16.3125C16.3622 22.5 16.4099 22.4802 16.4451 22.4451C16.4802 22.4099 16.5 22.3622 16.5 22.3125V3C16.5 2.60218 16.342 2.22064 16.0607 1.93934C15.7794 1.65804 15.3978 1.5 15 1.5Z'
        fill={contentColor}
      />
      <Path
        d='M21.75 9H18.375C18.2755 9 18.1802 9.03951 18.1098 9.10983C18.0395 9.18016 18 9.27554 18 9.375V22.125C18 22.2245 18.0395 22.3198 18.1098 22.3902C18.1802 22.4605 18.2755 22.5 18.375 22.5H22.125C22.4234 22.5 22.7095 22.3815 22.9205 22.1705C23.1315 21.9595 23.25 21.6734 23.25 21.375V10.5C23.25 10.1022 23.092 9.72064 22.8107 9.43934C22.5294 9.15804 22.1478 9 21.75 9Z'
        fill={contentColor}
      />
      <Path
        d='M2.25 6C1.85218 6 1.47064 6.15804 1.18934 6.43934C0.908035 6.72064 0.75 7.10218 0.75 7.5V21.375C0.75 21.6734 0.868526 21.9595 1.0795 22.1705C1.29048 22.3815 1.57663 22.5 1.875 22.5H5.625C5.72446 22.5 5.81984 22.4605 5.89016 22.3902C5.96049 22.3198 6 22.2245 6 22.125V6.375C6 6.27554 5.96049 6.18016 5.89016 6.10983C5.81984 6.03951 5.72446 6 5.625 6H2.25Z'
        fill={contentColor}
      />
    </Svg>
  )
}
