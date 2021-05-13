import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LogoFirebaseIconProps {
  color?: string
  size?: IconSize
}

export function LogoFirebaseIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: LogoFirebaseIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M4.36828 15.4395L6.5925 1.18623C6.66937 0.700138 7.32141 0.585294 7.55156 1.01983L9.94219 5.49404L4.36828 15.4395ZM20.25 18.7498L18.0591 5.77529C18.0432 5.68255 18.0022 5.59593 17.9406 5.5248C17.879 5.45368 17.7991 5.40076 17.7096 5.37179C17.6201 5.34282 17.5243 5.3389 17.4328 5.36045C17.3412 5.382 17.2572 5.4282 17.19 5.49404L3.75 18.7498L11.22 23.0581C11.4492 23.1838 11.7065 23.2497 11.9679 23.2497C12.2293 23.2497 12.4866 23.1838 12.7158 23.0581L20.25 18.7498ZM14.1731 7.44967L12.4603 4.18998C12.4177 4.10624 12.3528 4.03592 12.2727 3.98681C12.1926 3.93769 12.1005 3.91169 12.0066 3.91169C11.9126 3.91169 11.8205 3.93769 11.7404 3.98681C11.6603 4.03592 11.5954 4.10624 11.5528 4.18998L4.02328 17.6126L14.1731 7.44967Z'
        fill={contentColor}
      />
    </Svg>
  )
}
