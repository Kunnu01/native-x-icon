import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface FolderOpenOutlineIconProps {
  color?: string
  size?: IconSize
}

export function FolderOpenOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: FolderOpenOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M3 9V5.625C3 5.12772 3.19754 4.65081 3.54917 4.29917C3.90081 3.94754 4.37772 3.75 4.875 3.75H8.43234C8.80256 3.75001 9.16448 3.85961 9.4725 4.065L10.7775 4.935C11.0855 5.14039 11.4474 5.24999 11.8177 5.25H19.125C19.6223 5.25 20.0992 5.44754 20.4508 5.79917C20.8025 6.15081 21 6.62772 21 7.125V9'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M22.4953 10.6195L21.735 18.375C21.735 18.8717 21.5379 19.3481 21.1869 19.6997C20.836 20.0512 20.36 20.2491 19.8632 20.25H4.13668C3.63997 20.2491 3.1639 20.0512 2.81298 19.6997C2.46205 19.3481 2.26496 18.8717 2.26496 18.375L1.50465 10.6195C1.48815 10.4131 1.51456 10.2055 1.58222 10.0098C1.64988 9.81415 1.75733 9.63458 1.8978 9.48245C2.03826 9.33031 2.2087 9.20891 2.39839 9.12588C2.58807 9.04285 2.7929 8.99999 2.99996 9H21.0046C21.2113 9.00063 21.4156 9.04397 21.6048 9.12729C21.7939 9.2106 21.9638 9.3321 22.1037 9.48417C22.2437 9.63623 22.3507 9.81557 22.4181 10.011C22.4855 10.2063 22.5117 10.4135 22.4953 10.6195Z'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </Svg>
  )
}
