import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface HeartCircleIconProps {
  color?: string
  size?: IconSize
}

export function HeartCircleIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: HeartCircleIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 2.25C6.62391 2.25 2.25 6.62391 2.25 12C2.25 17.3761 6.62391 21.75 12 21.75C17.3761 21.75 21.75 17.3761 21.75 12C21.75 6.62391 17.3761 2.25 12 2.25ZM15.5011 14.1009C15.0614 14.6372 14.2636 15.4945 12.4214 16.7452C12.2972 16.8302 12.1501 16.8757 11.9995 16.8757C11.849 16.8757 11.7019 16.8302 11.5777 16.7452C9.73547 15.4945 8.93766 14.6358 8.49797 14.1009C7.56047 12.9586 7.11141 11.7853 7.12453 10.515C7.13906 9.05906 8.30672 7.87453 9.7275 7.87453C10.6838 7.87453 11.3681 8.37281 11.7947 8.83125C11.821 8.85905 11.8527 8.8812 11.8878 8.89634C11.9229 8.91148 11.9608 8.91928 11.9991 8.91928C12.0373 8.91928 12.0752 8.91148 12.1103 8.89634C12.1455 8.8812 12.1772 8.85905 12.2034 8.83125C12.6305 8.37281 13.3144 7.87453 14.2706 7.87453C15.6914 7.87453 16.8591 9.05906 16.8736 10.515C16.8877 11.7853 16.4381 12.9586 15.5011 14.1009Z'
        fill={contentColor}
      />
    </Svg>
  )
}
