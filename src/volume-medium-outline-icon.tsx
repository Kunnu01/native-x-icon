import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface VolumeMediumOutlineIconProps {
  color?: string
  size?: IconSize
}

export function VolumeMediumOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: VolumeMediumOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M7.38985 9.00055H4.125C4.02554 9.00055 3.93016 9.04006 3.85984 9.11039C3.78951 9.18071 3.75 9.2761 3.75 9.37555V14.6256C3.75 14.725 3.78951 14.8204 3.85984 14.8907C3.93016 14.961 4.02554 15.0006 4.125 15.0006H7.38985C7.56319 15.0006 7.73115 15.0608 7.86516 15.1707L12.1528 18.6863C12.2087 18.7275 12.275 18.7523 12.3441 18.758C12.4133 18.7637 12.4827 18.7501 12.5446 18.7187C12.6065 18.6873 12.6585 18.6394 12.6948 18.5802C12.731 18.521 12.7501 18.4529 12.75 18.3835V5.61758C12.75 5.54826 12.7307 5.4803 12.6944 5.42126C12.6581 5.36222 12.6061 5.3144 12.5442 5.28313C12.4823 5.25185 12.413 5.23834 12.3439 5.24409C12.2748 5.24984 12.2087 5.27463 12.1528 5.31571L7.86516 8.83133C7.73102 8.94094 7.56307 9.00073 7.38985 9.00055Z'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M16.5 15C16.9566 14.0902 17.25 13.087 17.25 12C17.25 10.898 16.9688 9.91875 16.5 9'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M18.75 17.25C19.6631 15.6562 20.25 14.25 20.25 12C20.25 9.75 19.6875 8.35781 18.75 6.75'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </Svg>
  )
}
