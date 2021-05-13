import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface DocumentLockOutlineIconProps {
  color?: string
  size?: IconSize
}

export function DocumentLockOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: DocumentLockOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M13.5 14.25V13.4062C13.5 12.6267 12.8316 12 12 12C11.1684 12 10.5 12.6267 10.5 13.4062V14.25'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M14.25 19.5H9.75C9.35218 19.5 8.97064 19.342 8.68934 19.0607C8.40804 18.7794 8.25 18.3978 8.25 18V15.75C8.25 15.3522 8.40804 14.9706 8.68934 14.6893C8.97064 14.408 9.35218 14.25 9.75 14.25H14.25C14.6478 14.25 15.0294 14.408 15.3107 14.6893C15.592 14.9706 15.75 15.3522 15.75 15.75V18C15.75 18.3978 15.592 18.7794 15.3107 19.0607C15.0294 19.342 14.6478 19.5 14.25 19.5Z'
        fill={contentColor}
      />
      <Path
        d='M19.5 10.3711V19.5C19.5 20.0967 19.2629 20.669 18.841 21.091C18.419 21.5129 17.8467 21.75 17.25 21.75H6.75C6.15326 21.75 5.58097 21.5129 5.15901 21.091C4.73705 20.669 4.5 20.0967 4.5 19.5V4.5C4.5 3.90326 4.73705 3.33097 5.15901 2.90901C5.58097 2.48705 6.15326 2.25 6.75 2.25H11.3789C11.7766 2.25006 12.158 2.40804 12.4392 2.68922L19.0608 9.31078C19.342 9.59202 19.4999 9.97341 19.5 10.3711Z'
        stroke={contentColor}
        stroke-linejoin='round'
      />
      <Path
        d='M12 2.38513V8.25013C12 8.64796 12.158 9.02949 12.4393 9.31079C12.7206 9.5921 13.1022 9.75013 13.5 9.75013H19.365'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </Svg>
  )
}
