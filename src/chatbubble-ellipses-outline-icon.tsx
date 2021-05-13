import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ChatbubbleEllipsesOutlineIconProps {
  color?: string
  size?: IconSize
}

export function ChatbubbleEllipsesOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ChatbubbleEllipsesOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M4.10055 17.8125C4.1568 17.6072 4.03352 17.3217 3.91586 17.1159C3.87939 17.0545 3.83965 16.995 3.7968 16.9378C2.78771 15.4075 2.24986 13.6147 2.24993 11.7816C2.23305 6.51984 6.59618 2.25 11.9915 2.25C16.6968 2.25 20.6249 5.50969 21.5423 9.83672C21.6799 10.4782 21.7495 11.1325 21.7499 11.7886C21.7499 17.0578 17.5551 21.3947 12.1598 21.3947C11.3015 21.3947 10.1441 21.1791 9.51274 21.0023C8.88133 20.8256 8.25086 20.5913 8.08821 20.5284C7.92169 20.4645 7.74486 20.4316 7.56649 20.4314C7.37198 20.4307 7.17935 20.4695 7.00024 20.5453L3.82024 21.6928C3.75075 21.7228 3.67709 21.7421 3.6018 21.75C3.54225 21.7498 3.48332 21.7378 3.42843 21.7147C3.37354 21.6916 3.32377 21.6579 3.28201 21.6154C3.24025 21.573 3.20732 21.5226 3.18513 21.4674C3.16294 21.4121 3.15193 21.353 3.15274 21.2934C3.15665 21.2412 3.16608 21.1895 3.18086 21.1392L4.10055 17.8125Z'
        stroke={contentColor}
        stroke-miterlimit='10'
        stroke-linecap='round'
      />
      <Path
        d='M7.5 13.5C8.32843 13.5 9 12.8284 9 12C9 11.1716 8.32843 10.5 7.5 10.5C6.67157 10.5 6 11.1716 6 12C6 12.8284 6.67157 13.5 7.5 13.5Z'
        fill={contentColor}
      />
      <Path
        d='M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z'
        fill={contentColor}
      />
      <Path
        d='M16.5 13.5C17.3284 13.5 18 12.8284 18 12C18 11.1716 17.3284 10.5 16.5 10.5C15.6716 10.5 15 11.1716 15 12C15 12.8284 15.6716 13.5 16.5 13.5Z'
        fill={contentColor}
      />
    </Svg>
  )
}
