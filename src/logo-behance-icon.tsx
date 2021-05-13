import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LogoBehanceIconProps {
  color?: string
  size?: IconSize
}

export function LogoBehanceIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: LogoBehanceIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M16.1297 10.9504C14.775 10.9504 14.5875 12.3004 14.5875 12.3004H17.4657C17.4657 12.3004 17.4844 10.9504 16.1297 10.9504Z'
        fill={contentColor}
      />
      <Path
        d='M9.59993 12.3004H7.04993V14.6442H9.47337C9.83899 14.6348 10.5234 14.5317 10.5234 13.5051C10.5234 12.2864 9.59993 12.3004 9.59993 12.3004Z'
        fill={contentColor}
      />
      <Path
        d='M12 1.5C6.20156 1.5 1.5 6.20156 1.5 12C1.5 17.7984 6.20156 22.5 12 22.5C17.7984 22.5 22.5 17.7984 22.5 12C22.5 6.20156 17.7984 1.5 12 1.5ZM14.2125 7.95H17.8266V9.02813H14.2125V7.95ZM12.3844 13.6125C12.3844 16.2844 9.6 16.2 9.6 16.2H5.04375V7.43438H9.6C10.9875 7.43438 12.0797 8.19844 12.0797 9.76875C12.0797 11.3391 10.7437 11.4375 10.7437 11.4375C12.5062 11.4375 12.3844 13.6125 12.3844 13.6125ZM19.1437 13.4672H14.6016C14.6016 15.0937 16.1437 14.9906 16.1437 14.9906C17.6016 14.9906 17.55 14.0484 17.55 14.0484H19.0922C19.0922 16.5516 16.0922 16.3781 16.0922 16.3781C12.4969 16.3781 12.7266 13.0266 12.7266 13.0266C12.7266 13.0266 12.7219 9.66094 16.0922 9.66094C19.6406 9.66563 19.1437 13.4672 19.1437 13.4672Z'
        fill={contentColor}
      />
      <Path
        d='M10.2187 9.90431C10.2187 8.99493 9.59993 8.99493 9.59993 8.99493H7.04993V10.9496H9.44055C9.85305 10.9496 10.2187 10.8137 10.2187 9.90431Z'
        fill={contentColor}
      />
    </Svg>
  )
}
