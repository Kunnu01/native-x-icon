import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface WalletOutlineIconProps {
  color?: string
  size?: IconSize
}

export function WalletOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: WalletOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M19.5 6.75H4.5C3.25736 6.75 2.25 7.75736 2.25 9V18C2.25 19.2426 3.25736 20.25 4.5 20.25H19.5C20.7426 20.25 21.75 19.2426 21.75 18V9C21.75 7.75736 20.7426 6.75 19.5 6.75Z'
        stroke={contentColor}
        stroke-linejoin='round'
      />
      <Path
        d='M19.2825 6.75047V5.34422C19.2824 4.99931 19.2062 4.65869 19.0592 4.34664C18.9123 4.03459 18.6984 3.75881 18.4326 3.53898C18.1668 3.31915 17.8558 3.16068 17.5217 3.07489C17.1877 2.98909 16.8388 2.97809 16.5 3.04265L4.155 5.14969C3.6189 5.25185 3.13526 5.53789 2.78749 5.95849C2.43972 6.37908 2.24963 6.90784 2.25 7.45359V9.75047'
        stroke={contentColor}
        stroke-linejoin='round'
      />
      <Path
        d='M17.25 15C16.9533 15 16.6633 14.912 16.4166 14.7472C16.17 14.5824 15.9777 14.3481 15.8642 14.074C15.7506 13.7999 15.7209 13.4983 15.7788 13.2074C15.8367 12.9164 15.9796 12.6491 16.1893 12.4393C16.3991 12.2296 16.6664 12.0867 16.9574 12.0288C17.2483 11.9709 17.5499 12.0006 17.824 12.1142C18.0981 12.2277 18.3324 12.42 18.4972 12.6666C18.662 12.9133 18.75 13.2033 18.75 13.5C18.75 13.8978 18.592 14.2794 18.3107 14.5607C18.0294 14.842 17.6478 15 17.25 15Z'
        fill={contentColor}
      />
    </Svg>
  )
}
