import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ShieldCheckmarkIconProps {
  color?: string
  size?: IconSize
}

export function ShieldCheckmarkIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ShieldCheckmarkIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M22.4565 5.21985C22.446 5.05232 22.3795 4.89317 22.2677 4.76791C22.1559 4.64264 22.0054 4.55848 21.8401 4.52892C17.7855 3.80142 16.0928 3.27548 12.309 1.56642C12.212 1.52254 12.1067 1.49985 12.0001 1.49985C11.8936 1.49985 11.7883 1.52254 11.6912 1.56642C7.90749 3.27548 6.21483 3.80142 2.16014 4.52892C1.99489 4.55848 1.84434 4.64264 1.73259 4.76791C1.62083 4.89317 1.55433 5.05232 1.54374 5.21985C1.36327 8.08439 1.74811 10.7534 2.68889 13.153C3.45929 15.1102 4.59943 16.9008 6.04702 18.4269C8.55342 21.0861 11.2145 22.2411 11.7222 22.4455C11.9026 22.5185 12.1043 22.5185 12.2847 22.4455C12.7923 22.2411 15.4534 21.0861 17.9598 18.4269C19.4051 16.9003 20.543 15.1097 21.3114 13.153C22.2522 10.7534 22.637 8.08439 22.4565 5.21985ZM16.3159 8.74064L11.1222 14.7406C11.0554 14.818 10.9735 14.8809 10.8815 14.9255C10.7896 14.9701 10.6894 14.9954 10.5873 14.9999H10.5564C10.3601 14.9999 10.1716 14.923 10.0314 14.7856L7.72514 12.5263C7.65478 12.4573 7.59869 12.3752 7.56007 12.2846C7.52145 12.1939 7.50106 12.0966 7.50006 11.9981C7.49803 11.7992 7.57512 11.6076 7.71436 11.4655C7.8536 11.3234 8.04358 11.2424 8.24252 11.2404C8.44145 11.2384 8.63304 11.3155 8.77514 11.4547L10.5095 13.1558L15.183 7.75907C15.3131 7.60865 15.4977 7.51609 15.6961 7.50176C15.8945 7.48743 16.0905 7.5525 16.2409 7.68267C16.3914 7.81283 16.4839 7.99742 16.4982 8.19583C16.5126 8.39423 16.4475 8.59021 16.3173 8.74064H16.3159Z'
        fill={contentColor}
      />
    </Svg>
  )
}
