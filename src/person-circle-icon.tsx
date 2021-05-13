import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface PersonCircleIconProps {
  color?: string
  size?: IconSize
}

export function PersonCircleIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: PersonCircleIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 2.25C6.62391 2.25 2.25 6.62391 2.25 12C2.25 17.3761 6.62391 21.75 12 21.75C17.3761 21.75 21.75 17.3761 21.75 12C21.75 6.62391 17.3761 2.25 12 2.25ZM9.64594 7.72594C10.2398 7.09641 11.0756 6.75 12 6.75C12.9244 6.75 13.7527 7.09875 14.3489 7.73156C14.9531 8.37281 15.247 9.23437 15.1777 10.1606C15.0389 12 13.6139 13.5 12 13.5C10.3861 13.5 8.95828 12 8.82234 10.1602C8.75344 9.22641 9.04688 8.36203 9.64594 7.72594ZM12 20.25C10.8987 20.2507 9.80838 20.0303 8.79382 19.6018C7.77927 19.1732 6.86109 18.5453 6.09375 17.7553C6.53323 17.1286 7.0932 16.5957 7.74094 16.1878C8.93578 15.4219 10.448 15 12 15C13.552 15 15.0642 15.4219 16.2577 16.1878C16.9059 16.5955 17.4664 17.1284 17.9062 17.7553C17.139 18.5454 16.2208 19.1734 15.2062 19.6019C14.1917 20.0304 13.1014 20.2508 12 20.25Z'
        fill={contentColor}
      />
    </Svg>
  )
}
