import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LogoEuroIconProps {
  color?: string
  size?: IconSize
}

export function LogoEuroIcon({ size = 'normal', color = COLOR.SECONDARY }: LogoEuroIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M10.8656 12.7496V10.4996H17.625L18 8.24958H10.8656V7.86895C10.8656 6.05536 11.6377 4.93645 14.9522 4.93645C16.3064 4.93645 17.8327 5.06255 19.7569 5.37802L20.25 2.09677C18.4582 1.68778 16.6251 1.48738 14.7872 1.49958C8.87156 1.49958 6.32812 3.58083 6.32812 7.42739V8.24958H3.75V10.4996H6.32812V12.7496H3.75V14.9996H6.32812V16.5718C6.32812 20.4183 8.87016 22.4996 14.7858 22.4996C16.6222 22.5111 18.4537 22.3101 20.2439 21.9005L19.748 18.6193C17.8238 18.9347 16.3045 19.0608 14.9503 19.0608C11.6363 19.0608 10.8656 18.1149 10.8656 15.8761V14.9996H16.8877L17.2566 12.7496H10.8656Z'
        fill={contentColor}
      />
    </Svg>
  )
}
