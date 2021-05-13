import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ArrowRedoCircleIconProps {
  color?: string
  size?: IconSize
}

export function ArrowRedoCircleIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ArrowRedoCircleIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M2.25 12C2.25 17.3845 6.61547 21.75 12 21.75C17.3845 21.75 21.75 17.3845 21.75 12C21.75 6.61547 17.3845 2.25 12 2.25C6.61547 2.25 2.25 6.61547 2.25 12ZM6.75 15.1252C7.00547 12.2447 8.35031 9.63656 12.5095 9.63656V7.88719C12.5103 7.8115 12.533 7.73765 12.5749 7.67466C12.6169 7.61167 12.6763 7.56225 12.7459 7.53243C12.8155 7.50261 12.8922 7.49369 12.9668 7.50674C13.0413 7.51979 13.1105 7.55426 13.1658 7.60594L17.1291 11.3438C17.1672 11.3797 17.1976 11.4231 17.2184 11.4712C17.2392 11.5193 17.2499 11.5712 17.2499 11.6236C17.2499 11.676 17.2392 11.7279 17.2184 11.776C17.1976 11.8241 17.1672 11.8675 17.1291 11.9034L13.1719 15.6427C13.1166 15.6943 13.0474 15.7288 12.9729 15.7419C12.8983 15.7549 12.8216 15.746 12.752 15.7162C12.6824 15.6863 12.623 15.6369 12.581 15.5739C12.5391 15.5109 12.5163 15.4371 12.5156 15.3614V13.6134C9.84047 13.6134 8.55422 14.2448 7.42594 15.4266C7.16859 15.6914 6.71953 15.4884 6.75 15.1252Z'
        fill={contentColor}
      />
    </Svg>
  )
}
