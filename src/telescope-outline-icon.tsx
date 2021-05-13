import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface TelescopeOutlineIconProps {
  color?: string
  size?: IconSize
}

export function TelescopeOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: TelescopeOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M1.87179 15.3549L1.65101 14.9738C1.57709 14.8459 1.5291 14.7046 1.50978 14.5582C1.49046 14.4117 1.50019 14.2628 1.53841 14.1201C1.57662 13.9773 1.64259 13.8435 1.73252 13.7263C1.82246 13.6091 1.93461 13.5107 2.06257 13.4368L6.1346 11.0898C6.21997 11.0403 6.31427 11.0081 6.41209 10.9952C6.50992 10.9822 6.60933 10.9886 6.70466 11.0142C6.79998 11.0397 6.88933 11.0838 6.96758 11.1439C7.04584 11.204 7.11146 11.2789 7.16069 11.3645L7.75648 12.3957C7.85582 12.568 7.88269 12.7726 7.83118 12.9647C7.77967 13.1568 7.654 13.3205 7.48179 13.4199L3.41069 15.767C3.1519 15.916 2.84455 15.9564 2.55605 15.8791C2.26755 15.8019 2.02147 15.6134 1.87179 15.3549V15.3549Z'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M8.00055 12.8308L6.89618 10.9221C6.74712 10.6636 6.70684 10.3565 6.7842 10.0684C6.86156 9.78023 7.05022 9.5346 7.30868 9.38554L13.1427 6.02226C13.2281 5.97278 13.3224 5.94063 13.4202 5.92765C13.5181 5.91468 13.6175 5.92114 13.7128 5.94665C13.8081 5.97217 13.8975 6.01625 13.9757 6.07636C14.054 6.13647 14.1196 6.21143 14.1688 6.29695L15.6487 8.85585C15.748 9.02795 15.7749 9.23241 15.7236 9.42435C15.6722 9.61629 15.5469 9.78002 15.3749 9.8796L9.53946 13.2424C9.41144 13.3166 9.27003 13.3648 9.12335 13.3843C8.97666 13.4038 8.82757 13.3941 8.68462 13.3559C8.54167 13.3177 8.40766 13.2516 8.29028 13.1615C8.1729 13.0714 8.07444 12.9591 8.00055 12.8308Z'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M16.0242 9.47775L13.8441 5.70759C13.695 5.44913 13.6547 5.14204 13.7321 4.85388C13.8094 4.56572 13.9981 4.32009 14.2566 4.17103L18.6295 1.65009C18.8883 1.50095 19.1957 1.46053 19.4843 1.53768C19.7729 1.61483 20.019 1.80326 20.1689 2.06165L22.3491 5.83181C22.4229 5.95981 22.4709 6.10111 22.4901 6.24764C22.5094 6.39417 22.4996 6.54305 22.4613 6.68579C22.4229 6.82853 22.3569 6.96232 22.2669 7.07952C22.1768 7.19672 22.0646 7.29503 21.9366 7.36884L17.5636 9.88978C17.3048 10.039 16.9973 10.0794 16.7087 10.0022C16.4201 9.92493 16.1739 9.73632 16.0242 9.47775V9.47775Z'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M5.98083 22.5003L10.4874 12.7507'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M12.7406 12.0013L17.2758 21.0004'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </Svg>
  )
}