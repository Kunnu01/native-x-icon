import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ManIconProps {
  color?: string
  size?: IconSize
}

export function ManIcon({ size = 'normal', color = COLOR.SECONDARY }: ManIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 5.25C13.4497 5.25 14.625 4.07475 14.625 2.625C14.625 1.17525 13.4497 0 12 0C10.5503 0 9.375 1.17525 9.375 2.625C9.375 4.07475 10.5503 5.25 12 5.25Z'
        fill={contentColor}
      />
      <Path
        d='M14.25 6H9.75C8.95508 6.00235 8.19338 6.31917 7.63128 6.88128C7.06917 7.44338 6.75235 8.20507 6.75 9V14.04C6.75 14.5486 7.14516 14.9812 7.65328 14.9995C7.77921 15.0041 7.90477 14.9833 8.02246 14.9383C8.14015 14.8933 8.24756 14.825 8.33826 14.7375C8.42897 14.65 8.50111 14.5452 8.55037 14.4292C8.59964 14.3132 8.62502 14.1885 8.625 14.0625V9.38766C8.62381 9.29091 8.65924 9.19729 8.72418 9.12557C8.78912 9.05385 8.87877 9.00933 8.97516 9.00094C9.02645 8.99753 9.0779 9.00471 9.12631 9.02202C9.17471 9.03934 9.21904 9.06642 9.25654 9.10159C9.29403 9.13675 9.3239 9.17926 9.34428 9.22645C9.36466 9.27365 9.37512 9.32453 9.375 9.37594V22.9219C9.375 23.2078 9.48859 23.482 9.69078 23.6842C9.89297 23.8864 10.1672 24 10.4531 24C10.7391 24 11.0133 23.8864 11.2155 23.6842C11.4177 23.482 11.5313 23.2078 11.5313 22.9219V16.2347C11.5296 16.1136 11.5737 15.9964 11.6548 15.9065C11.7359 15.8167 11.848 15.7607 11.9686 15.75C12.0327 15.7457 12.0971 15.7546 12.1576 15.7762C12.2182 15.7979 12.2736 15.8317 12.3206 15.8757C12.3675 15.9196 12.4048 15.9728 12.4303 16.0318C12.4558 16.0908 12.4689 16.1545 12.4688 16.2188V22.9219C12.4688 23.2078 12.5823 23.482 12.7845 23.6842C12.9867 23.8864 13.2609 24 13.5469 24C13.8328 24 14.107 23.8864 14.3092 23.6842C14.5114 23.482 14.625 23.2078 14.625 22.9219V9.38766C14.6238 9.29091 14.6592 9.19729 14.7242 9.12557C14.7891 9.05385 14.8788 9.00933 14.9752 9.00094C15.0265 8.99753 15.0779 9.00471 15.1263 9.02202C15.1747 9.03934 15.219 9.06642 15.2565 9.10159C15.294 9.13675 15.3239 9.17926 15.3443 9.22645C15.3647 9.27365 15.3751 9.32453 15.375 9.37594V14.0409C15.375 14.5495 15.7702 14.9822 16.2783 15.0005C16.4043 15.0051 16.5299 14.9842 16.6477 14.9391C16.7654 14.8941 16.8729 14.8257 16.9636 14.7381C17.0543 14.6505 17.1265 14.5456 17.1757 14.4295C17.2249 14.3134 17.2502 14.1886 17.25 14.0625V9C17.2477 8.20507 16.9308 7.44338 16.3687 6.88128C15.8066 6.31917 15.0449 6.00235 14.25 6Z'
        fill={contentColor}
      />
    </Svg>
  )
}
