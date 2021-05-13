import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface FolderIconProps {
  color?: string
  size?: IconSize
}

export function FolderIcon({ size = 'normal', color = COLOR.SECONDARY }: FolderIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M23.25 7.12488C23.25 6.42869 22.9734 5.76101 22.4812 5.26873C21.9889 4.77644 21.3212 4.49988 20.625 4.49988H10.3177C10.0957 4.50059 9.87854 4.43533 9.69375 4.31238L8.39062 3.44098C7.95911 3.15242 7.45145 2.99887 6.93234 2.99988H3.375C2.67881 2.99988 2.01113 3.27644 1.51884 3.76873C1.02656 4.26101 0.75 4.92869 0.75 5.62488V7.87488C0.75 7.97434 0.789509 8.06972 0.859835 8.14005C0.930161 8.21037 1.02554 8.24988 1.125 8.24988H22.875C22.9745 8.24988 23.0698 8.21037 23.1402 8.14005C23.2105 8.06972 23.25 7.97434 23.25 7.87488V7.12488Z'
        fill={contentColor}
      />
      <Path
        d='M0.75 18.375C0.75 19.0712 1.02656 19.7389 1.51884 20.2312C2.01113 20.7234 2.67881 21 3.375 21H20.625C21.3212 21 21.9889 20.7234 22.4812 20.2312C22.9734 19.7389 23.25 19.0712 23.25 18.375V10.125C23.25 10.0255 23.2105 9.93016 23.1402 9.85983C23.0698 9.78951 22.9745 9.75 22.875 9.75H1.125C1.02554 9.75 0.930161 9.78951 0.859835 9.85983C0.789509 9.93016 0.75 10.0255 0.75 10.125V18.375Z'
        fill={contentColor}
      />
    </Svg>
  )
}
