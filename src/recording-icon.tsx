import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface RecordingIconProps {
  color?: string
  size?: IconSize
}

export function RecordingIcon({ size = 'normal', color = COLOR.SECONDARY }: RecordingIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M17.8496 6.75278C15.0793 6.83013 12.8283 9.08294 12.75 11.8533C12.7104 13.239 13.2223 14.5838 14.1732 15.5925C14.1855 15.6055 14.1938 15.6218 14.1971 15.6394C14.2004 15.6571 14.1986 15.6753 14.1919 15.6919C14.1852 15.7085 14.1739 15.7229 14.1592 15.7332C14.1446 15.7436 14.1273 15.7496 14.1094 15.7504H9.89067C9.87244 15.7503 9.85465 15.7448 9.83948 15.7347C9.82431 15.7246 9.81242 15.7103 9.80526 15.6935C9.79809 15.6768 9.79597 15.6583 9.79916 15.6403C9.80234 15.6224 9.81068 15.6058 9.82317 15.5925C10.7754 14.5844 11.2886 13.2395 11.25 11.8533C11.1736 9.08294 8.9227 6.83013 6.15239 6.75278C5.45248 6.73323 4.75572 6.85372 4.10303 7.10719C3.45033 7.36066 2.85487 7.742 2.3516 8.2288C1.84834 8.7156 1.44742 9.29806 1.17239 9.94196C0.897359 10.5859 0.753766 11.2782 0.750043 11.9784C0.738324 14.8959 3.14067 17.2504 6.05817 17.2504H17.9419C20.8594 17.2504 23.2618 14.8959 23.25 11.9784C23.2463 11.2784 23.1028 10.5862 22.8279 9.94241C22.553 9.29863 22.1522 8.71626 21.6491 8.22948C21.1461 7.74271 20.5508 7.36133 19.8984 7.10775C19.2459 6.85416 18.5493 6.73348 17.8496 6.75278Z'
        fill={contentColor}
      />
    </Svg>
  )
}