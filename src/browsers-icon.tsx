import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface BrowsersIconProps {
  color?: string
  size?: IconSize
}

export function BrowsersIcon({ size = 'normal', color = COLOR.SECONDARY }: BrowsersIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M19.5 2.25H4.5C3.70435 2.25 2.94129 2.56607 2.37868 3.12868C1.81607 3.69129 1.5 4.45435 1.5 5.25V18.75C1.5 19.5456 1.81607 20.3087 2.37868 20.8713C2.94129 21.4339 3.70435 21.75 4.5 21.75H19.5C20.2956 21.75 21.0587 21.4339 21.6213 20.8713C22.1839 20.3087 22.5 19.5456 22.5 18.75V5.25C22.5 4.45435 22.1839 3.69129 21.6213 3.12868C21.0587 2.56607 20.2956 2.25 19.5 2.25ZM20.625 6.75H3.375C3.27554 6.75 3.18016 6.71049 3.10984 6.64017C3.03951 6.56984 3 6.47446 3 6.375V5.25C3.00111 4.85252 3.15951 4.47163 3.44057 4.19057C3.72163 3.90951 4.10252 3.75111 4.5 3.75H19.5C19.8975 3.75111 20.2784 3.90951 20.5594 4.19057C20.8405 4.47163 20.9989 4.85252 21 5.25V6.375C21 6.47446 20.9605 6.56984 20.8902 6.64017C20.8198 6.71049 20.7245 6.75 20.625 6.75Z'
        fill={contentColor}
      />
    </Svg>
  )
}
