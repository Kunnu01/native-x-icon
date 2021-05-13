import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LogoMediumIconProps {
  color?: string
  size?: IconSize
}

export function LogoMediumIcon({ size = 'normal', color = COLOR.SECONDARY }: LogoMediumIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M1.3125 1.3125V22.6875H22.6875V1.3125H1.3125ZM19.0702 6.37687L17.9236 7.47609C17.8247 7.55156 17.7759 7.67531 17.7961 7.79766V15.8733C17.7755 15.9956 17.8247 16.1198 17.9236 16.1948L19.043 17.2941V17.5355H13.4123V17.2941L14.572 16.1681C14.6859 16.0542 14.6859 16.0205 14.6859 15.8466V9.31922L11.4614 17.5087H11.0255L7.27125 9.31922V14.8083C7.23984 15.0389 7.31672 15.2714 7.47891 15.4383L8.98734 17.2678V17.5092H4.71047V17.2678L6.21891 15.4383C6.38016 15.2709 6.45234 15.037 6.41344 14.8083V8.46094C6.43125 8.28469 6.36422 8.11031 6.2325 7.99172L4.89188 6.37641V6.135H9.05484L12.2728 13.192L15.1017 6.135H19.0702V6.37687Z'
        fill={contentColor}
      />
    </Svg>
  )
}
