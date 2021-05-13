import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ChatboxEllipsesOutlineIconProps {
  color?: string
  size?: IconSize
}

export function ChatboxEllipsesOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ChatboxEllipsesOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M19.125 3H4.875C4.17942 3.00198 3.51289 3.27918 3.02103 3.77103C2.52918 4.26289 2.25198 4.92942 2.25 5.625V14.625C2.25198 15.3206 2.52918 15.9871 3.02103 16.479C3.51289 16.9708 4.17942 17.248 4.875 17.25H6.75V21L11.1431 17.3372C11.2106 17.2808 11.2957 17.25 11.3836 17.25H19.125C19.8206 17.248 20.4871 16.9708 20.979 16.479C21.4708 15.9871 21.748 15.3206 21.75 14.625V5.625C21.748 4.92942 21.4708 4.26289 20.979 3.77103C20.4871 3.27918 19.8206 3.00198 19.125 3V3Z'
        stroke={contentColor}
        stroke-linejoin='round'
      />
      <Path
        d='M7.5 11.625C8.32843 11.625 9 10.9534 9 10.125C9 9.29657 8.32843 8.625 7.5 8.625C6.67157 8.625 6 9.29657 6 10.125C6 10.9534 6.67157 11.625 7.5 11.625Z'
        fill={contentColor}
      />
      <Path
        d='M12 11.625C12.8284 11.625 13.5 10.9534 13.5 10.125C13.5 9.29657 12.8284 8.625 12 8.625C11.1716 8.625 10.5 9.29657 10.5 10.125C10.5 10.9534 11.1716 11.625 12 11.625Z'
        fill={contentColor}
      />
      <Path
        d='M16.5 11.625C17.3284 11.625 18 10.9534 18 10.125C18 9.29657 17.3284 8.625 16.5 8.625C15.6716 8.625 15 9.29657 15 10.125C15 10.9534 15.6716 11.625 16.5 11.625Z'
        fill={contentColor}
      />
    </Svg>
  )
}
