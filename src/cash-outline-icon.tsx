import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface CashOutlineIconProps {
  color?: string
  size?: IconSize
}

export function CashOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: CashOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M2.25 15.75L21.75 15.75C22.1642 15.75 22.5 15.4142 22.5 15V4.5C22.5 4.08579 22.1642 3.75 21.75 3.75L2.25 3.75C1.83579 3.75 1.5 4.08579 1.5 4.5V15C1.5 15.4142 1.83579 15.75 2.25 15.75Z'
        stroke={contentColor}
        stroke-linejoin='round'
      />
      <Path d='M3 18H21' stroke={contentColor} stroke-linecap='round' stroke-linejoin='round' />
      <Path
        d='M4.5 20.25H19.5'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M12 13.5C14.0711 13.5 15.75 11.8211 15.75 9.75C15.75 7.67893 14.0711 6 12 6C9.92893 6 8.25 7.67893 8.25 9.75C8.25 11.8211 9.92893 13.5 12 13.5Z'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M22.5 7.5C21.5054 7.5 20.5516 7.10491 19.8483 6.40165C19.1451 5.69839 18.75 4.74456 18.75 3.75'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M1.5 7.5C1.99246 7.5 2.48009 7.403 2.93506 7.21455C3.39003 7.02609 3.80343 6.74987 4.15165 6.40165C4.49987 6.05343 4.77609 5.64003 4.96455 5.18506C5.153 4.73009 5.25 4.24246 5.25 3.75'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M22.5 12C21.5054 12 20.5516 12.3951 19.8483 13.0983C19.1451 13.8016 18.75 14.7554 18.75 15.75'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M1.5 12C1.99246 12 2.48009 12.097 2.93506 12.2855C3.39003 12.4739 3.80343 12.7501 4.15165 13.0983C4.49987 13.4466 4.77609 13.86 4.96455 14.3149C5.153 14.7699 5.25 15.2575 5.25 15.75'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </Svg>
  )
}
