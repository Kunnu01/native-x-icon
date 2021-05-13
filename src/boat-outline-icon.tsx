import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface BoatOutlineIconProps {
  color?: string
  size?: IconSize
}

export function BoatOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: BoatOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M21.653 12.2367C21.5592 12.0136 21.3384 11.8697 21.1059 11.7919L12.3319 8.30065C12.1156 8.23316 11.8839 8.23316 11.6676 8.30065L2.90202 11.7938C2.66765 11.8669 2.44124 12.0174 2.34843 12.2405C2.25562 12.4636 2.21062 12.6797 2.30155 12.9474L4.48265 18.5325C4.51045 18.6012 4.55934 18.6593 4.62227 18.6983C4.6852 18.7374 4.75893 18.7555 4.8328 18.75C6.0839 18.6713 7.19109 18.0361 8.03812 17.2266C8.1047 17.164 8.19262 17.1292 8.28398 17.1292C8.37533 17.1292 8.46326 17.164 8.52984 17.2266C9.43546 18.0938 10.6406 18.75 12 18.75C13.3594 18.75 14.5575 18.0938 15.4631 17.2247C15.5298 17.1621 15.6178 17.1273 15.7092 17.1273C15.8006 17.1273 15.8886 17.1621 15.9553 17.2247C16.8023 18.0347 17.9095 18.6713 19.1606 18.75C19.2343 18.7556 19.3078 18.7377 19.3706 18.6989C19.4335 18.66 19.4824 18.6023 19.5103 18.5339L21.6994 12.9483C21.7922 12.7242 21.7458 12.4603 21.653 12.2367Z'
        stroke={contentColor}
        stroke-miterlimit='10'
      />
      <Path
        d='M19.5 22.1784C19.5 22.1209 19.4845 22.0644 19.4551 22.0149C19.4257 21.9654 19.3836 21.9247 19.3331 21.8972C18.0637 21.2151 16.9064 20.1712 16.3973 19.6472C16.3217 19.5679 16.2208 19.5174 16.1119 19.5045C16.0031 19.4916 15.8932 19.517 15.8011 19.5764C13.4419 21.0961 10.5694 21.097 8.20968 19.5787C8.11676 19.5187 8.00576 19.4932 7.89597 19.5066C7.78619 19.5199 7.68455 19.5713 7.60874 19.6519C7.10389 20.1806 5.95921 21.2128 4.68233 21.8901C4.63167 21.9158 4.58836 21.9539 4.55647 22.0009C4.52457 22.0479 4.50514 22.1022 4.49999 22.1587C4.49618 22.2069 4.5035 22.2553 4.52137 22.3002C4.53925 22.3451 4.5672 22.3853 4.60308 22.4177C4.63896 22.4501 4.6818 22.4738 4.72829 22.487C4.77479 22.5002 4.82369 22.5026 4.87124 22.4939C5.84858 22.2979 6.79311 21.8526 7.69311 21.3768C7.75085 21.3464 7.81502 21.3303 7.88027 21.3298C7.94552 21.3293 8.00993 21.3445 8.06811 21.374C9.28696 21.9942 10.6351 22.3176 12.0027 22.3177C13.3702 22.3179 14.7185 21.9949 15.9375 21.375C15.9963 21.3451 16.0615 21.3298 16.1274 21.3303C16.1934 21.3308 16.2583 21.3471 16.3167 21.3778C17.212 21.8465 18.1551 22.2961 19.1292 22.4934C19.1751 22.502 19.2223 22.5002 19.2674 22.4883C19.3125 22.4763 19.3544 22.4546 19.3901 22.4245C19.4257 22.3944 19.4543 22.3567 19.4736 22.3142C19.4929 22.2718 19.5026 22.2255 19.5019 22.1789L19.5 22.1784Z'
        fill={contentColor}
      />
      <Path
        d='M15 4.5V3.375C14.9991 3.0769 14.8803 2.79125 14.6695 2.58046C14.4587 2.36967 14.1731 2.25087 13.875 2.25H10.125C9.8269 2.25087 9.54125 2.36967 9.33046 2.58046C9.11967 2.79125 9.00087 3.0769 9 3.375V4.5'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M19.5 10.9219V6.75C19.4983 6.1538 19.2607 5.5825 18.8391 5.16092C18.4175 4.73934 17.8462 4.50173 17.25 4.5H6.75C6.1538 4.50173 5.5825 4.73934 5.16092 5.16092C4.73934 5.5825 4.50173 6.1538 4.5 6.75V11.0625'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M12 8.60617V18.5835'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </Svg>
  )
}