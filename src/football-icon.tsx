import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface FootballIconProps {
  color?: string
  size?: IconSize
}

export function FootballIcon({ size = 'normal', color = COLOR.SECONDARY }: FootballIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 2.25C6.62391 2.25 2.25 6.62391 2.25 12C2.25 17.3761 6.62391 21.75 12 21.75C17.3761 21.75 21.75 17.3761 21.75 12C21.75 6.62391 17.3761 2.25 12 2.25ZM18.7031 16.5H16.5834C16.5178 16.4999 16.4533 16.4825 16.3964 16.4495C16.3396 16.4166 16.2924 16.3694 16.2595 16.3125L15.503 15.015C15.4532 14.9302 15.4387 14.8292 15.4627 14.7338L16.1592 11.925C16.1732 11.8684 16.2002 11.8158 16.238 11.7715C16.2758 11.7272 16.3235 11.6922 16.3772 11.6695L17.6944 11.1117C17.7587 11.0844 17.8295 11.0757 17.8985 11.0864C17.9676 11.0972 18.0323 11.1271 18.0853 11.1727L20.0367 12.8517C20.0848 12.8931 20.1216 12.9461 20.1437 13.0056C20.1657 13.0651 20.1723 13.1293 20.1628 13.192C20.0012 14.3008 19.6138 15.3646 19.0247 16.3177C18.9914 16.3732 18.9443 16.4192 18.8879 16.4512C18.8316 16.4832 18.7679 16.5 18.7031 16.5ZM6.30562 11.1155L7.62281 11.6733C7.6765 11.696 7.72415 11.7309 7.76199 11.7753C7.79983 11.8196 7.82681 11.8722 7.84078 11.9288L8.53734 14.7375C8.56132 14.8329 8.54684 14.9339 8.49703 15.0187L7.74047 16.3125C7.70763 16.3694 7.66042 16.4166 7.60358 16.4495C7.54673 16.4825 7.48224 16.4999 7.41656 16.5H5.29688C5.23277 16.5 5.16972 16.4836 5.11375 16.4524C5.05778 16.4211 5.01076 16.376 4.97719 16.3214C4.38804 15.3683 4.00067 14.3045 3.83906 13.1958C3.82956 13.133 3.83614 13.0689 3.8582 13.0094C3.88025 12.9498 3.91705 12.8969 3.96516 12.8555L5.91656 11.1764C5.96938 11.1312 6.03375 11.1015 6.10245 11.0908C6.17116 11.08 6.2415 11.0886 6.30562 11.1155ZM18.3497 7.02609L17.5027 9.43453C17.4856 9.48375 17.4585 9.52889 17.4231 9.56706C17.3877 9.60523 17.3447 9.63561 17.2969 9.65625L15.9103 10.2436C15.8467 10.2705 15.7769 10.2793 15.7085 10.2691C15.6402 10.2588 15.576 10.2299 15.5231 10.1855L12.8859 7.97344C12.8438 7.93857 12.8098 7.89491 12.7863 7.84552C12.7628 7.79612 12.7504 7.74219 12.75 7.6875V6.11344C12.75 6.05176 12.7653 5.99105 12.7944 5.93668C12.8235 5.8823 12.8656 5.83595 12.9169 5.80172L14.9245 4.46391C14.9769 4.42893 15.0373 4.40772 15.1 4.40224C15.1628 4.39675 15.2259 4.40716 15.2836 4.4325C16.4388 4.93634 17.464 5.69685 18.2812 6.65625C18.3242 6.70641 18.3532 6.76703 18.3652 6.83197C18.3772 6.89691 18.3719 6.96388 18.3497 7.02609ZM9.075 4.46391L11.0831 5.80172C11.1344 5.83595 11.1765 5.8823 11.2056 5.93668C11.2347 5.99105 11.25 6.05176 11.25 6.11344V7.6875C11.25 7.74228 11.238 7.7964 11.2148 7.84604C11.1917 7.89568 11.1579 7.93965 11.1159 7.97484L8.47875 10.1869C8.42583 10.2313 8.36167 10.2602 8.29334 10.2705C8.22502 10.2807 8.15519 10.2719 8.09156 10.245L6.70312 9.65625C6.65501 9.63587 6.61168 9.60567 6.57592 9.56757C6.54016 9.52947 6.51276 9.48431 6.49547 9.435L5.64844 7.02656C5.62643 6.96412 5.62134 6.89697 5.63369 6.83193C5.64604 6.76689 5.67538 6.70627 5.71875 6.65625C6.53648 5.69589 7.56251 4.9347 8.71875 4.43062C8.7762 4.40605 8.83888 4.39623 8.9011 4.40204C8.96332 4.40785 9.02309 4.42912 9.075 4.46391ZM9.88641 19.8136L8.96156 17.4844C8.94041 17.4314 8.93162 17.3744 8.93584 17.3175C8.94006 17.2606 8.9572 17.2055 8.98594 17.1562L9.69703 15.9375C9.72987 15.8806 9.77708 15.8334 9.83392 15.8005C9.89077 15.7675 9.95526 15.7501 10.0209 15.75H13.9791C14.0447 15.7501 14.1092 15.7675 14.1661 15.8005C14.2229 15.8334 14.2701 15.8806 14.303 15.9375L15.0145 17.1562C15.0433 17.2055 15.0606 17.2606 15.0649 17.3174C15.0692 17.3743 15.0605 17.4314 15.0394 17.4844L14.1211 19.8127C14.0986 19.8696 14.0626 19.9201 14.0161 19.9599C13.9696 19.9997 13.9141 20.0275 13.8544 20.0409C12.6358 20.3206 11.3698 20.3206 10.1512 20.0409C10.092 20.0274 10.0369 19.9996 9.99077 19.96C9.94463 19.9204 9.90881 19.8701 9.88641 19.8136Z'
        fill={contentColor}
      />
    </Svg>
  )
}