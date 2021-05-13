import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface PlayBackCircleIconProps {
  color?: string
  size?: IconSize
}

export function PlayBackCircleIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: PlayBackCircleIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M2.25 12C2.25 17.3761 6.62391 21.75 12 21.75C17.3761 21.75 21.75 17.3761 21.75 12C21.75 6.62391 17.3761 2.25 12 2.25C6.62391 2.25 2.25 6.62391 2.25 12ZM5.49516 11.5641L10.86 8.32312C10.9369 8.27705 11.0247 8.25227 11.1143 8.25131C11.2039 8.25036 11.2922 8.27326 11.3701 8.31768C11.4479 8.3621 11.5126 8.42643 11.5574 8.50408C11.6022 8.58173 11.6255 8.66989 11.625 8.75953V11.2589L16.485 8.32312C16.5619 8.27705 16.6497 8.25227 16.7393 8.25131C16.8289 8.25036 16.9172 8.27326 16.9951 8.31768C17.0729 8.3621 17.1376 8.42643 17.1824 8.50408C17.2272 8.58173 17.2505 8.66989 17.25 8.75953V15.2405C17.2505 15.3301 17.2272 15.4183 17.1824 15.4959C17.1376 15.5736 17.0729 15.6379 16.9951 15.6823C16.9172 15.7267 16.8289 15.7496 16.7393 15.7487C16.6497 15.7477 16.5619 15.7229 16.485 15.6769L11.625 12.7411V15.2405C11.6255 15.3301 11.6022 15.4183 11.5574 15.4959C11.5126 15.5736 11.4479 15.6379 11.3701 15.6823C11.2922 15.7267 11.2039 15.7496 11.1143 15.7487C11.0247 15.7477 10.9369 15.7229 10.86 15.6769L5.49516 12.4359C5.42038 12.3904 5.35857 12.3264 5.31569 12.25C5.2728 12.1737 5.25028 12.0876 5.25028 12C5.25028 11.9124 5.2728 11.8263 5.31569 11.75C5.35857 11.6737 5.42038 11.6096 5.49516 11.5641Z'
        fill={contentColor}
      />
    </Svg>
  )
}
