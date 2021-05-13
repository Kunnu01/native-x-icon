import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ChatboxEllipsesIconProps {
  color?: string
  size?: IconSize
}

export function ChatboxEllipsesIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ChatboxEllipsesIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M19.125 2.25H4.875C3.9802 2.25099 3.12233 2.60689 2.48961 3.23961C1.85689 3.87233 1.50099 4.7302 1.5 5.625V14.625C1.50099 15.5198 1.85689 16.3777 2.48961 17.0104C3.12233 17.6431 3.9802 17.999 4.875 18H6V21C5.99996 21.1426 6.04058 21.2823 6.11709 21.4026C6.1936 21.5229 6.30284 21.619 6.43199 21.6794C6.56114 21.7399 6.70485 21.7623 6.84627 21.744C6.9877 21.7257 7.12097 21.6674 7.23047 21.5761L11.5191 18H19.125C20.0198 17.999 20.8777 17.6431 21.5104 17.0104C22.1431 16.3777 22.499 15.5198 22.5 14.625V5.625C22.499 4.7302 22.1431 3.87233 21.5104 3.23961C20.8777 2.60689 20.0198 2.25099 19.125 2.25ZM7.5 11.625C7.20333 11.625 6.91332 11.537 6.66665 11.3722C6.41997 11.2074 6.22771 10.9731 6.11418 10.699C6.00065 10.4249 5.97094 10.1233 6.02882 9.83236C6.0867 9.54139 6.22956 9.27412 6.43934 9.06434C6.64912 8.85456 6.91639 8.7117 7.20736 8.65382C7.49834 8.59594 7.79994 8.62565 8.07403 8.73918C8.34811 8.85271 8.58238 9.04497 8.7472 9.29164C8.91203 9.53832 9 9.82833 9 10.125C9 10.5228 8.84196 10.9044 8.56066 11.1857C8.27936 11.467 7.89782 11.625 7.5 11.625ZM12 11.625C11.7033 11.625 11.4133 11.537 11.1666 11.3722C10.92 11.2074 10.7277 10.9731 10.6142 10.699C10.5006 10.4249 10.4709 10.1233 10.5288 9.83236C10.5867 9.54139 10.7296 9.27412 10.9393 9.06434C11.1491 8.85456 11.4164 8.7117 11.7074 8.65382C11.9983 8.59594 12.2999 8.62565 12.574 8.73918C12.8481 8.85271 13.0824 9.04497 13.2472 9.29164C13.412 9.53832 13.5 9.82833 13.5 10.125C13.5 10.5228 13.342 10.9044 13.0607 11.1857C12.7794 11.467 12.3978 11.625 12 11.625ZM16.5 11.625C16.2033 11.625 15.9133 11.537 15.6666 11.3722C15.42 11.2074 15.2277 10.9731 15.1142 10.699C15.0006 10.4249 14.9709 10.1233 15.0288 9.83236C15.0867 9.54139 15.2296 9.27412 15.4393 9.06434C15.6491 8.85456 15.9164 8.7117 16.2074 8.65382C16.4983 8.59594 16.7999 8.62565 17.074 8.73918C17.3481 8.85271 17.5824 9.04497 17.7472 9.29164C17.912 9.53832 18 9.82833 18 10.125C18 10.5228 17.842 10.9044 17.5607 11.1857C17.2794 11.467 16.8978 11.625 16.5 11.625Z'
        fill={contentColor}
      />
    </Svg>
  )
}
