import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LogoSkypeIconProps {
  color?: string
  size?: IconSize
}

export function LogoSkypeIcon({ size = 'normal', color = COLOR.SECONDARY }: LogoSkypeIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M21.8982 14.2307C22.0526 13.5359 22.1296 12.8261 22.1278 12.1143C22.1278 6.66182 17.6424 2.23776 12.1064 2.23776C11.5329 2.23734 10.9603 2.28438 10.3946 2.37838C9.46937 1.8008 8.39992 1.49615 7.30925 1.49948C4.10394 1.49948 1.50003 4.06448 1.50003 7.22526C1.49662 8.24621 1.77216 9.2487 2.29691 10.1245C2.16271 10.7777 2.09486 11.4428 2.09441 12.1096C2.09441 17.5678 6.57988 21.9862 12.1102 21.9862C12.7247 21.9877 13.3381 21.9328 13.9425 21.8221C14.7898 22.2683 15.7332 22.5008 16.6908 22.4995C19.9018 22.4995 22.5 19.9345 22.5 16.7737C22.5054 15.8901 22.299 15.0181 21.8982 14.2307ZM17.25 16.8276C16.785 17.4726 16.1011 17.9868 15.2152 18.3478C14.3293 18.7087 13.2825 18.8901 12.0793 18.8901C10.6407 18.8901 9.43738 18.6384 8.49097 18.1462C7.8349 17.8009 7.26908 17.3064 6.83909 16.7024C6.41206 16.101 6.19878 15.4996 6.19878 14.9212C6.19878 14.5603 6.33941 14.2485 6.61456 13.986C6.88831 13.7343 7.24363 13.6031 7.65941 13.6031C8.00394 13.6031 8.29925 13.7015 8.54019 13.904C8.76988 14.0953 8.96675 14.3798 9.12519 14.7515C9.27876 15.1075 9.47268 15.4447 9.70316 15.7565C9.90066 16.0134 10.1797 16.2267 10.5403 16.3964C10.9069 16.566 11.3935 16.6532 11.9935 16.6532C12.8194 16.6532 13.4977 16.4784 14.0063 16.1339C14.5097 15.8001 14.7507 15.3956 14.7507 14.9034C14.7507 14.5153 14.6246 14.2087 14.3621 13.9682C14.0888 13.7165 13.733 13.5196 13.29 13.3884C12.8358 13.2478 12.218 13.0987 11.4521 12.9403C10.4128 12.7214 9.53019 12.4589 8.82706 12.1635C8.11081 11.8626 7.53097 11.4417 7.10394 10.9223C6.67175 10.3917 6.45847 9.72463 6.45847 8.94229C6.45113 8.21922 6.69037 7.51523 7.13675 6.94635C7.58534 6.37213 8.23644 5.92354 9.08441 5.61745C9.91597 5.31135 10.906 5.15807 12.0216 5.15807C12.9188 5.15807 13.7011 5.26213 14.3574 5.45901C15.0136 5.65588 15.5719 5.93479 16.0149 6.2737C16.4578 6.6126 16.7808 6.97354 16.9885 7.35182C17.1961 7.7301 17.3007 8.11213 17.3007 8.47682C17.3007 8.82651 17.1638 9.14948 16.89 9.42838C16.7573 9.56653 16.5974 9.67574 16.4204 9.74915C16.2434 9.82256 16.0532 9.85858 15.8616 9.85495C15.4899 9.85495 15.1997 9.76729 14.9977 9.59245C14.8102 9.42838 14.6147 9.17667 14.4014 8.8101C14.1497 8.34557 13.8488 7.97338 13.5042 7.71088C13.1649 7.45963 12.6071 7.32838 11.8303 7.32838C11.1136 7.32838 10.5286 7.46901 10.096 7.75026C9.68019 8.01838 9.47769 8.3301 9.47769 8.6962C9.47253 8.90595 9.54459 9.1103 9.68019 9.27042C9.84516 9.46023 10.0483 9.61309 10.2764 9.71901C10.5333 9.84812 10.8027 9.95069 11.0803 10.0251C11.3616 10.102 11.8243 10.2168 12.4646 10.3589C13.2793 10.5285 14.0232 10.7254 14.6799 10.9274C15.3474 11.1407 15.9216 11.3962 16.3918 11.6985C16.8587 11.9933 17.2473 12.3969 17.5243 12.8746C17.7924 13.3434 17.9292 13.9354 17.9292 14.6137C17.959 15.4072 17.7197 16.1874 17.25 16.8276Z'
        fill={contentColor}
      />
    </Svg>
  )
}
