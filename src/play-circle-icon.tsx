import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface PlayCircleIconProps {
  color?: string
  size?: IconSize
}

export function PlayCircleIcon({ size = 'normal', color = COLOR.SECONDARY }: PlayCircleIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 2.25C6.62391 2.25 2.25 6.62391 2.25 12C2.25 17.3761 6.62391 21.75 12 21.75C17.3761 21.75 21.75 17.3761 21.75 12C21.75 6.62391 17.3761 2.25 12 2.25ZM15.5048 12.4359L10.14 15.6769C10.0631 15.7229 9.97533 15.7477 9.8857 15.7487C9.79606 15.7496 9.70778 15.7267 9.62992 15.6823C9.55205 15.6379 9.48741 15.5736 9.44261 15.4959C9.39781 15.4183 9.37448 15.3301 9.375 15.2405V8.75953C9.37448 8.66989 9.39781 8.58173 9.44261 8.50408C9.48741 8.42643 9.55205 8.3621 9.62992 8.31768C9.70778 8.27326 9.79606 8.25036 9.8857 8.25131C9.97533 8.25227 10.0631 8.27705 10.14 8.32312L15.5048 11.5641C15.5796 11.6096 15.6414 11.6737 15.6843 11.75C15.7272 11.8263 15.7497 11.9124 15.7497 12C15.7497 12.0876 15.7272 12.1737 15.6843 12.25C15.6414 12.3264 15.5796 12.3904 15.5048 12.4359Z'
        fill={contentColor}
      />
    </Svg>
  )
}
