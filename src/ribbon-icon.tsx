import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface RibbonIconProps {
  color?: string
  size?: IconSize
}

export function RibbonIcon({ size = 'normal', color = COLOR.SECONDARY }: RibbonIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12.6094 15.7317C12.4116 15.7464 12.2119 15.7537 12.0103 15.7537C11.7652 15.7537 11.5228 15.7425 11.2833 15.7214C10.0983 15.6164 8.95004 15.2565 7.91712 14.6663C6.88419 14.0762 5.99101 13.2698 5.29875 12.3023C5.28052 12.2763 5.25598 12.2554 5.22743 12.2415C5.19888 12.2275 5.16726 12.2211 5.13554 12.2227C5.10382 12.2244 5.07303 12.234 5.04607 12.2508C5.01911 12.2676 4.99686 12.291 4.98141 12.3187L1.60641 18.3844C1.47797 18.6188 1.45781 18.9 1.59328 19.1287C1.6638 19.2422 1.76204 19.3358 1.87874 19.4007C1.99544 19.4657 2.12676 19.4998 2.26031 19.5H5.91656C6.04393 19.4953 6.17024 19.5247 6.28247 19.585C6.3947 19.6454 6.48878 19.7347 6.555 19.8436L8.36719 22.875C8.4335 22.9875 8.5276 23.081 8.64046 23.1467C8.75332 23.2124 8.88116 23.2479 9.01172 23.25C9.29016 23.2345 9.57844 23.0536 9.69422 22.8L12.7931 15.9961C12.8065 15.9665 12.812 15.934 12.809 15.9017C12.8061 15.8694 12.7948 15.8384 12.7763 15.8118C12.7578 15.7851 12.7326 15.7637 12.7034 15.7497C12.6741 15.7357 12.6417 15.7295 12.6094 15.7317Z'
        fill={contentColor}
      />
      <Path
        d='M22.3894 18.3697L19.0364 12.3149C19.0209 12.2874 18.9988 12.2643 18.972 12.2476C18.9452 12.231 18.9146 12.2214 18.8831 12.2197C18.8516 12.218 18.8202 12.2243 18.7918 12.238C18.7633 12.2517 18.7388 12.2723 18.7205 12.298C17.7984 13.5899 16.5242 14.5894 15.0497 15.1771C14.8687 15.2484 14.7222 15.387 14.641 15.5638L12.9132 19.3653C12.8909 19.4139 12.8794 19.4666 12.8794 19.52C12.8794 19.5734 12.8909 19.6262 12.9132 19.6747L14.3321 22.7961C14.4469 23.0497 14.7347 23.2349 15.0127 23.2503C15.1433 23.2471 15.271 23.2104 15.3834 23.1438C15.4959 23.0771 15.5893 22.9828 15.6549 22.8697L17.461 19.8425C17.5964 19.6152 17.8421 19.4989 18.1069 19.5003H21.7993C22.1119 19.5003 22.3486 19.3372 22.4555 19.0316C22.4931 18.9231 22.5066 18.8077 22.4952 18.6934C22.4838 18.5791 22.4477 18.4687 22.3894 18.3697Z'
        fill={contentColor}
      />
      <Path
        d='M12.0122 9.75C13.2551 9.75 14.2627 8.74264 14.2627 7.5C14.2627 6.25736 13.2551 5.25 12.0122 5.25C10.7693 5.25 9.76172 6.25736 9.76172 7.5C9.76172 8.74264 10.7693 9.75 12.0122 9.75Z'
        fill={contentColor}
      />
      <Path
        d='M12.0122 0.75C8.28939 0.75 5.26221 3.77766 5.26221 7.5C5.26221 11.2223 8.2908 14.25 12.0122 14.25C15.7336 14.25 18.7622 11.2219 18.7622 7.5C18.7622 3.77812 15.7346 0.75 12.0122 0.75ZM12.0122 11.25C11.2705 11.25 10.5455 11.0301 9.92882 10.618C9.31213 10.206 8.83149 9.62029 8.54766 8.93506C8.26383 8.24984 8.18957 7.49584 8.33426 6.76841C8.47896 6.04098 8.83611 5.3728 9.36056 4.84835C9.885 4.3239 10.5532 3.96675 11.2806 3.82206C12.008 3.67736 12.762 3.75162 13.4473 4.03545C14.1325 4.31928 14.7182 4.79993 15.1302 5.41661C15.5423 6.0333 15.7622 6.75832 15.7622 7.5C15.761 8.49418 15.3655 9.44729 14.6625 10.1503C13.9595 10.8533 13.0064 11.2488 12.0122 11.25Z'
        fill={contentColor}
      />
    </Svg>
  )
}