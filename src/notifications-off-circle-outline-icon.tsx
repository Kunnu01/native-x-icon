import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface NotificationsOffCircleOutlineIconProps {
  color?: string
  size?: IconSize
}

export function NotificationsOffCircleOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: NotificationsOffCircleOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M21 12C21 7.03125 16.9688 3 12 3C7.03125 3 3 7.03125 3 12C3 16.9688 7.03125 21 12 21C16.9688 21 21 16.9688 21 12Z'
        stroke={contentColor}
        stroke-miterlimit='10'
      />
      <Path
        d='M10.3238 16.4999C10.2974 16.4998 10.2713 16.5052 10.2472 16.5158C10.223 16.5265 10.2014 16.5421 10.1837 16.5616C10.166 16.5812 10.1527 16.6042 10.1445 16.6293C10.1363 16.6544 10.1335 16.6809 10.1363 16.7071C10.2418 17.5846 11.0208 17.9999 12 17.9999C12.9793 17.9999 13.7579 17.5846 13.8624 16.7071C13.8652 16.6809 13.8624 16.6544 13.8542 16.6293C13.846 16.6042 13.8326 16.5812 13.8149 16.5616C13.7972 16.5421 13.7756 16.5265 13.7515 16.5158C13.7274 16.5052 13.7013 16.4998 13.6749 16.4999H10.3238Z'
        fill={contentColor}
      />
      <Path
        d='M16.5001 17.7191C16.3955 17.7193 16.2921 17.6975 16.1965 17.6552C16.1009 17.6129 16.0152 17.551 15.9451 17.4734L6.94506 7.53596C6.81409 7.38832 6.74659 7.19502 6.75719 6.99795C6.76779 6.80088 6.85564 6.61593 7.00169 6.4832C7.14775 6.35047 7.34023 6.28065 7.53741 6.28889C7.7346 6.29713 7.92058 6.38276 8.05506 6.52721L17.0551 16.4647C17.1528 16.5722 17.2171 16.7058 17.2403 16.8492C17.2636 16.9926 17.2446 17.1397 17.1858 17.2725C17.1271 17.4054 17.031 17.5183 16.9092 17.5976C16.7875 17.6768 16.6453 17.7191 16.5001 17.7191Z'
        fill={contentColor}
      />
      <Path
        d='M8.18816 10.8849C8.18816 13.3847 7.64722 13.7658 6.88175 14.6724C6.56441 15.0474 6.85129 15.7505 7.40629 15.7505H12.9764C13.0128 15.7505 13.0484 15.7399 13.0789 15.72C13.1093 15.7002 13.1333 15.6718 13.148 15.6386C13.1626 15.6053 13.1673 15.5684 13.1614 15.5326C13.1555 15.4967 13.1393 15.4633 13.1147 15.4364L8.52097 10.4269C8.49593 10.3997 8.46338 10.3805 8.42743 10.3717C8.39148 10.3629 8.35374 10.365 8.31896 10.3776C8.28418 10.3902 8.25391 10.4129 8.23197 10.4427C8.21003 10.4725 8.19739 10.5081 8.19566 10.545C8.19097 10.6543 8.18816 10.7677 8.18816 10.8849Z'
        fill={contentColor}
      />
      <Path
        d='M17.1187 14.6719C16.3533 13.7653 15.8128 13.3842 15.8128 10.8844C15.8128 8.59406 14.6044 7.77984 13.6097 7.38422C13.5411 7.35559 13.4792 7.31295 13.428 7.25903C13.3768 7.20511 13.3375 7.1411 13.3125 7.07109C13.1386 6.49687 12.6506 6 12 6C11.3493 6 10.8604 6.49687 10.6875 7.07156C10.6626 7.14158 10.6234 7.20562 10.5723 7.25955C10.5212 7.31348 10.4593 7.3561 10.3907 7.38469C10.3307 7.40859 10.2703 7.4339 10.2089 7.46109C10.1818 7.47328 10.1579 7.49174 10.1394 7.51494C10.1208 7.53815 10.108 7.56543 10.1021 7.59455C10.0961 7.62367 10.0972 7.65378 10.1051 7.68241C10.1131 7.71104 10.1278 7.73737 10.1479 7.75922L16.9219 15.1505C16.9481 15.179 16.9825 15.1988 17.0203 15.207C17.0582 15.2152 17.0977 15.2114 17.1334 15.1963C17.169 15.1811 17.1991 15.1553 17.2195 15.1223C17.2399 15.0893 17.2496 15.0509 17.2472 15.0122C17.2432 14.8876 17.1981 14.7679 17.1187 14.6719Z'
        fill={contentColor}
      />
    </Svg>
  )
}
