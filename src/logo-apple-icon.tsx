import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LogoAppleIconProps {
  color?: string
  size?: IconSize
}

export function LogoAppleIcon({ size = 'normal', color = COLOR.SECONDARY }: LogoAppleIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M16.3654 6.41498C14.4754 6.41498 13.6766 7.31685 12.3604 7.31685C11.0108 7.31685 9.98147 6.42154 8.34366 6.42154C6.74053 6.42154 5.031 7.40029 3.94538 9.06763C2.421 11.4189 2.67975 15.8472 5.14866 19.6197C6.03178 20.9701 7.21116 22.4847 8.75803 22.5011H8.78616C10.1305 22.5011 10.5299 21.6208 12.3801 21.6104H12.4082C14.2307 21.6104 14.5963 22.4959 15.9351 22.4959H15.9632C17.5101 22.4795 18.7527 20.8014 19.6358 19.4561C20.2715 18.4886 20.5077 18.0029 20.9952 16.9084C17.4238 15.5528 16.8501 10.4898 20.3821 8.54873C19.304 7.19873 17.789 6.41685 16.3607 6.41685L16.3654 6.41498Z'
        fill={contentColor}
      />
      <Path
        d='M15.9491 1.5C14.8241 1.57641 13.5116 2.29266 12.7428 3.22781C12.0453 4.07531 11.4716 5.3325 11.6966 6.55172H11.7866C12.9847 6.55172 14.211 5.83031 14.9272 4.90594C15.6172 4.02609 16.1403 2.77922 15.9491 1.5Z'
        fill={contentColor}
      />
    </Svg>
  )
}
