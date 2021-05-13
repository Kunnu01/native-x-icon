import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface JournalIconProps {
  color?: string
  size?: IconSize
}

export function JournalIcon({ size = 'normal', color = COLOR.SECONDARY }: JournalIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M13.5938 1.5H6.75C5.95462 1.50087 5.19206 1.81722 4.62964 2.37964C4.06722 2.94206 3.75087 3.70462 3.75 4.5V19.5C3.75087 20.2954 4.06722 21.0579 4.62964 21.6204C5.19206 22.1828 5.95462 22.4991 6.75 22.5H13.5938V1.5Z'
        fill={contentColor}
      />
      <Path
        d='M17.25 1.5H16.4062V22.5H17.25C18.0454 22.4991 18.8079 22.1828 19.3704 21.6204C19.9328 21.0579 20.2491 20.2954 20.25 19.5V4.5C20.2491 3.70462 19.9328 2.94206 19.3704 2.37964C18.8079 1.81722 18.0454 1.50087 17.25 1.5Z'
        fill={contentColor}
      />
    </Svg>
  )
}
