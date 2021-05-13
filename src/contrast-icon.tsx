import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ContrastIconProps {
  color?: string
  size?: IconSize
}

export function ContrastIcon({ size = 'normal', color = COLOR.SECONDARY }: ContrastIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12.0001 1.50016C9.92339 1.5002 7.89336 2.11603 6.16668 3.26979C4.43999 4.42354 3.09421 6.06341 2.2995 7.98201C1.5048 9.90061 1.29686 12.0118 1.70199 14.0486C2.10712 16.0853 3.10712 17.9562 4.57554 19.4247C5.5488 20.4076 6.70668 21.1885 7.98265 21.7225C9.25863 22.2566 10.6275 22.5333 12.0108 22.5367C13.394 22.5401 14.7643 22.2701 16.0429 21.7424C17.3214 21.2146 18.4831 20.4394 19.4612 19.4613C20.4393 18.4832 21.2145 17.3215 21.7423 16.0429C22.2701 14.7644 22.54 13.3941 22.5366 12.0109C22.5332 10.6276 22.2565 9.25872 21.7225 7.98275C21.1884 6.70677 20.4075 5.54889 19.4246 4.57563C18.4519 3.59754 17.2948 2.82211 16.0204 2.2942C14.746 1.76629 13.3795 1.49641 12.0001 1.50016ZM3.00007 12.0002C3.00007 7.0375 7.03741 3.00016 12.0001 3.00016V21.0002C7.03741 21.0002 3.00007 16.9628 3.00007 12.0002Z'
        fill={contentColor}
      />
    </Svg>
  )
}
