import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface BookmarkIconProps {
  color?: string
  size?: IconSize
}

export function BookmarkIcon({ size = 'normal', color = COLOR.SECONDARY }: BookmarkIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M18.7499 22.5C18.5665 22.5005 18.3892 22.4338 18.2517 22.3125L11.9999 16.7536L5.74822 22.3125C5.64004 22.4087 5.50633 22.4715 5.36324 22.4933C5.22015 22.5152 5.07379 22.4952 4.94181 22.4357C4.80984 22.3763 4.6979 22.2799 4.61949 22.1582C4.54108 22.0365 4.49956 21.8948 4.49994 21.75V4.5C4.50081 3.70462 4.81716 2.94206 5.37958 2.37964C5.942 1.81722 6.70456 1.50087 7.49994 1.5H16.4999C17.2953 1.50087 18.0579 1.81722 18.6203 2.37964C19.1827 2.94206 19.4991 3.70462 19.4999 4.5V21.75C19.4999 21.9489 19.4209 22.1397 19.2803 22.2803C19.1396 22.421 18.9489 22.5 18.7499 22.5Z'
        fill={contentColor}
      />
    </Svg>
  )
}
