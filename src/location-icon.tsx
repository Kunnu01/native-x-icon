import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LocationIconProps {
  color?: string
  size?: IconSize
}

export function LocationIcon({ size = 'normal', color = COLOR.SECONDARY }: LocationIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 10.5C12.8284 10.5 13.5 9.82843 13.5 9C13.5 8.17157 12.8284 7.5 12 7.5C11.1716 7.5 10.5 8.17157 10.5 9C10.5 9.82843 11.1716 10.5 12 10.5Z'
        fill={contentColor}
      />
      <Path
        d='M12 1.5C7.86469 1.5 4.5 4.71797 4.5 8.67188C4.5 10.5548 5.35828 13.0589 7.05094 16.1147C8.41031 18.5681 9.98297 20.7867 10.8009 21.8906C10.9392 22.0792 11.1199 22.2326 11.3284 22.3384C11.537 22.4441 11.7676 22.4992 12.0014 22.4992C12.2352 22.4992 12.4658 22.4441 12.6744 22.3384C12.8829 22.2326 13.0637 22.0792 13.2019 21.8906C14.0184 20.7867 15.5925 18.5681 16.9519 16.1147C18.6417 13.0598 19.5 10.5558 19.5 8.67188C19.5 4.71797 16.1353 1.5 12 1.5ZM12 12C11.4067 12 10.8266 11.8241 10.3333 11.4944C9.83994 11.1648 9.45542 10.6962 9.22836 10.1481C9.0013 9.59987 8.94189 8.99667 9.05764 8.41473C9.1734 7.83279 9.45912 7.29824 9.87868 6.87868C10.2982 6.45912 10.8328 6.1734 11.4147 6.05764C11.9967 5.94189 12.5999 6.0013 13.1481 6.22836C13.6962 6.45542 14.1648 6.83994 14.4944 7.33329C14.8241 7.82664 15 8.40666 15 9C14.9991 9.79538 14.6828 10.5579 14.1204 11.1204C13.5579 11.6828 12.7954 11.9991 12 12Z'
        fill={contentColor}
      />
    </Svg>
  )
}