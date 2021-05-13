import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LogoPythonIconProps {
  color?: string
  size?: IconSize
}

export function LogoPythonIcon({ size = 'normal', color = COLOR.SECONDARY }: LogoPythonIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M14.7189 1.7052C13.8475 1.56176 12.572 1.49567 11.7062 1.49988C10.8947 1.50082 10.0847 1.5695 9.28466 1.7052C7.1406 2.0802 6.75013 2.86301 6.75013 4.30863V5.99988H12.0001V6.74988H5.04482C3.09669 6.74988 1.5156 9.07817 1.50013 11.9586C1.50013 11.9722 1.50013 11.9858 1.50013 11.9999C1.49945 12.5035 1.5486 13.0059 1.64685 13.4999C2.08232 15.6693 3.43888 17.2499 5.04482 17.2499H6.00013V14.7186C6.00013 13.2514 6.977 11.9085 8.57825 11.6202L9.04091 11.5625H14.7189C14.9574 11.5635 15.1948 11.5319 15.4248 11.4688C15.9506 11.3284 16.415 11.0176 16.7453 10.5851C17.0755 10.1526 17.2531 9.62282 17.2501 9.07863V4.30863C17.2501 2.95301 16.0933 1.93067 14.7189 1.7052ZM9.13747 4.9452C8.94834 4.94585 8.76328 4.89031 8.60576 4.78564C8.44823 4.68097 8.32534 4.53188 8.25266 4.35727C8.17999 4.18267 8.1608 3.99041 8.19754 3.80488C8.23428 3.61935 8.32529 3.44892 8.45902 3.31518C8.59276 3.18145 8.76319 3.09044 8.94872 3.0537C9.13425 3.01696 9.3265 3.03615 9.50111 3.10883C9.67572 3.1815 9.82481 3.3044 9.92948 3.46192C10.0342 3.61945 10.0897 3.80451 10.089 3.99363C10.0891 4.11861 10.0645 4.24238 10.0167 4.35785C9.96893 4.47333 9.89884 4.57825 9.81047 4.66663C9.72209 4.755 9.61717 4.82509 9.50169 4.87289C9.38622 4.92069 9.26245 4.94526 9.13747 4.9452Z'
        fill={contentColor}
      />
      <Path
        d='M22.2787 10.1719C21.7772 8.17453 20.4783 6.75 18.9553 6.75H18.1252V8.97422C18.1252 10.8291 16.9064 12.172 15.4186 12.4022C15.2683 12.4255 15.1165 12.4372 14.9644 12.4373H9.285C9.0441 12.4371 8.80417 12.4678 8.57109 12.5287C7.52531 12.8034 6.75 13.6734 6.75 14.8017V19.5722C6.75 20.9316 8.11594 21.7284 9.45609 22.118C11.0597 22.5844 12.8067 22.6688 14.7258 22.118C16.0003 21.7537 17.25 21.0173 17.25 19.5722V18H12V17.25H18.9553C20.3353 17.25 21.5311 16.0814 22.117 14.3761C22.3744 13.6105 22.5037 12.8077 22.5 12C22.5013 11.3839 22.427 10.7699 22.2787 10.1719ZM14.8364 18.9375C15.0255 18.9369 15.2106 18.9924 15.3681 19.0971C15.5256 19.2017 15.6485 19.3508 15.7212 19.5254C15.7939 19.7 15.8131 19.8923 15.7763 20.0778C15.7396 20.2633 15.6486 20.4338 15.5149 20.5675C15.3811 20.7012 15.2107 20.7923 15.0252 20.829C14.8396 20.8657 14.6474 20.8465 14.4728 20.7739C14.2982 20.7012 14.1491 20.5783 14.0444 20.4208C13.9397 20.2633 13.8842 20.0782 13.8848 19.8891C13.8848 19.7641 13.9094 19.6403 13.9572 19.5248C14.005 19.4094 14.075 19.3044 14.1634 19.2161C14.2518 19.1277 14.3567 19.0576 14.4722 19.0098C14.5877 18.962 14.7114 18.9374 14.8364 18.9375Z'
        fill={contentColor}
      />
    </Svg>
  )
}