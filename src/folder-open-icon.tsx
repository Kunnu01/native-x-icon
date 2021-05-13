import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface FolderOpenIconProps {
  color?: string
  size?: IconSize
}

export function FolderOpenIcon({ size = 'normal', color = COLOR.SECONDARY }: FolderOpenIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M19.125 4.49988H11.8177C11.5957 4.50059 11.3785 4.43533 11.1938 4.31238L9.89062 3.44098C9.45911 3.15242 8.95145 2.99887 8.43234 2.99988H4.875C4.17904 3.00063 3.51179 3.27743 3.01967 3.76955C2.52755 4.26167 2.25074 4.92892 2.25 5.62488V6.74988H21.75C21.75 5.30238 20.5725 4.49988 19.125 4.49988Z'
        fill={contentColor}
      />
      <Path
        d='M19.8634 21H4.1368C3.44802 20.9992 2.78715 20.7278 2.2967 20.2441C1.80625 19.7605 1.52553 19.1035 1.51508 18.4148L0.758517 10.6927V10.6795C0.733742 10.37 0.773295 10.0587 0.874688 9.76526C0.976081 9.47179 1.13712 9.20247 1.34767 8.97427C1.55822 8.74606 1.81372 8.5639 2.0981 8.43926C2.38248 8.31461 2.68958 8.25017 3.00008 8.25H21.0048C21.3152 8.2503 21.6222 8.31484 21.9065 8.43954C22.1907 8.56424 22.4461 8.74642 22.6566 8.97461C22.867 9.2028 23.028 9.47207 23.1293 9.76548C23.2306 10.0589 23.2702 10.3701 23.2454 10.6795V10.6927L22.4851 18.4148C22.4746 19.1035 22.1939 19.7605 21.7035 20.2441C21.213 20.7278 20.5521 20.9992 19.8634 21Z'
        fill={contentColor}
      />
    </Svg>
  )
}
