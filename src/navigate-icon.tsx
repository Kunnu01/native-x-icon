import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface NavigateIconProps {
  color?: string
  size?: IconSize
}

export function NavigateIcon({ size = 'normal', color = COLOR.SECONDARY }: NavigateIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12.7501 21.75C12.6499 21.75 12.5507 21.73 12.4584 21.6911C12.3661 21.6521 12.2826 21.5951 12.2127 21.5234C12.1427 21.4516 12.0879 21.3666 12.0514 21.2733C12.0149 21.1801 11.9974 21.0804 12.0001 20.9803V12.3811C12.0001 12.2816 11.9606 12.1862 11.8902 12.1159C11.8199 12.0456 11.7245 12.0061 11.6251 12.0061H3.01929C2.86154 12.0079 2.70708 11.961 2.57709 11.8716C2.44709 11.7822 2.34793 11.6548 2.2932 11.5068C2.23086 11.3304 2.23674 11.137 2.30968 10.9647C2.38262 10.7924 2.51735 10.6535 2.68741 10.5754L20.6874 2.31841C20.8265 2.25469 20.9817 2.23502 21.1323 2.26203C21.2828 2.28904 21.4215 2.36145 21.5298 2.46954C21.638 2.57763 21.7106 2.71623 21.7378 2.86676C21.7651 3.01728 21.7456 3.17253 21.6821 3.31169L13.4321 21.3117C13.3724 21.4424 13.2763 21.5532 13.1554 21.6309C13.0345 21.7086 12.8938 21.75 12.7501 21.75Z'
        fill={contentColor}
      />
    </Svg>
  )
}
