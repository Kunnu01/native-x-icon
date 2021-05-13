import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface BarChartIconProps {
  color?: string
  size?: IconSize
}

export function BarChartIcon({ size = 'normal', color = COLOR.SECONDARY }: BarChartIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M22.5 23.25H2.25C1.85218 23.25 1.47064 23.092 1.18934 22.8107C0.908035 22.5294 0.75 22.1478 0.75 21.75V1.5C0.75 1.30109 0.829018 1.11032 0.96967 0.96967C1.11032 0.829018 1.30109 0.75 1.5 0.75C1.69891 0.75 1.88968 0.829018 2.03033 0.96967C2.17098 1.11032 2.25 1.30109 2.25 1.5V21.75H22.5C22.6989 21.75 22.8897 21.829 23.0303 21.9697C23.171 22.1103 23.25 22.3011 23.25 22.5C23.25 22.6989 23.171 22.8897 23.0303 23.0303C22.8897 23.171 22.6989 23.25 22.5 23.25Z'
        fill={contentColor}
      />
      <Path
        d='M7.3125 20.25H5.4375C4.98995 20.25 4.56073 20.0722 4.24426 19.7557C3.92779 19.4393 3.75 19.0101 3.75 18.5625V11.4375C3.75 10.9899 3.92779 10.5607 4.24426 10.2443C4.56073 9.92779 4.98995 9.75 5.4375 9.75H7.3125C7.76005 9.75 8.18927 9.92779 8.50574 10.2443C8.82221 10.5607 9 10.9899 9 11.4375V18.5625C9 19.0101 8.82221 19.4393 8.50574 19.7557C8.18927 20.0722 7.76005 20.25 7.3125 20.25Z'
        fill={contentColor}
      />
      <Path
        d='M14.0625 20.25H12.1875C11.7399 20.25 11.3107 20.0722 10.9943 19.7557C10.6778 19.4393 10.5 19.0101 10.5 18.5625V9.1875C10.5 8.73995 10.6778 8.31073 10.9943 7.99426C11.3107 7.67779 11.7399 7.5 12.1875 7.5H14.0625C14.5101 7.5 14.9393 7.67779 15.2557 7.99426C15.5722 8.31073 15.75 8.73995 15.75 9.1875V18.5625C15.75 19.0101 15.5722 19.4393 15.2557 19.7557C14.9393 20.0722 14.5101 20.25 14.0625 20.25Z'
        fill={contentColor}
      />
      <Path
        d='M20.7955 20.25H18.9205C18.473 20.25 18.0438 20.0722 17.7273 19.7557C17.4108 19.4393 17.233 19.0101 17.233 18.5625V6.1875C17.233 5.73995 17.4108 5.31073 17.7273 4.99426C18.0438 4.67779 18.473 4.5 18.9205 4.5H20.7955C21.2431 4.5 21.6723 4.67779 21.9888 4.99426C22.3052 5.31073 22.483 5.73995 22.483 6.1875V18.5625C22.483 19.0101 22.3052 19.4393 21.9888 19.7557C21.6723 20.0722 21.2431 20.25 20.7955 20.25Z'
        fill={contentColor}
      />
    </Svg>
  )
}