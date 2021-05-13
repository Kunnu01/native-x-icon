import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ThunderstormIconProps {
  color?: string
  size?: IconSize
}

export function ThunderstormIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ThunderstormIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M4.50009 19.5006C4.37226 19.5005 4.24657 19.4678 4.13495 19.4055C4.02333 19.3432 3.92949 19.2534 3.86233 19.1446C3.79517 19.0359 3.75693 18.9117 3.75123 18.784C3.74554 18.6563 3.77257 18.5293 3.82978 18.415L4.95477 16.165C5.04379 15.9871 5.19983 15.8518 5.38856 15.789C5.5773 15.7261 5.78328 15.7408 5.96118 15.8298C6.13908 15.9188 6.27434 16.0749 6.33719 16.2636C6.40004 16.4524 6.38535 16.6583 6.29633 16.8362L5.17134 19.0862C5.10898 19.2108 5.01315 19.3156 4.89459 19.3888C4.77603 19.462 4.63942 19.5007 4.50009 19.5006Z'
        fill={contentColor}
      />
      <Path
        d='M5.62509 22.5006C5.49726 22.5005 5.37157 22.4678 5.25995 22.4055C5.14833 22.3432 5.05449 22.2534 4.98733 22.1446C4.92017 22.0359 4.88193 21.9117 4.87623 21.784C4.87054 21.6563 4.89757 21.5293 4.95478 21.415L5.70477 19.915C5.79379 19.7371 5.94982 19.6018 6.13856 19.539C6.23201 19.5079 6.33068 19.4954 6.42893 19.5025C6.52718 19.5095 6.62309 19.5358 6.71118 19.5798C6.79926 19.6239 6.87781 19.6849 6.94232 19.7593C7.00684 19.8338 7.05606 19.9202 7.08719 20.0136C7.11831 20.1071 7.13072 20.2057 7.12371 20.304C7.1167 20.4022 7.09041 20.4981 7.04633 20.5862L6.29633 22.0862C6.23398 22.2108 6.13815 22.3156 6.01959 22.3888C5.90103 22.462 5.76442 22.5007 5.62509 22.5006Z'
        fill={contentColor}
      />
      <Path
        d='M17.6248 19.5006C17.497 19.5005 17.3713 19.4678 17.2597 19.4055C17.1481 19.3432 17.0542 19.2534 16.9871 19.1446C16.9199 19.0359 16.8817 18.9117 16.876 18.784C16.8703 18.6563 16.8973 18.5293 16.9545 18.415L18.0795 16.165C18.1685 15.9871 18.3246 15.8518 18.5133 15.789C18.7021 15.7261 18.908 15.7408 19.0859 15.8298C19.2638 15.9188 19.3991 16.0749 19.462 16.2636C19.5248 16.4524 19.5101 16.6583 19.4211 16.8362L18.2961 19.0862C18.2337 19.2108 18.1379 19.3156 18.0194 19.3888C17.9008 19.462 17.7642 19.5007 17.6248 19.5006Z'
        fill={contentColor}
      />
      <Path
        d='M18.7498 22.5006C18.622 22.5005 18.4963 22.4678 18.3847 22.4055C18.2731 22.3432 18.1792 22.2534 18.1121 22.1446C18.0449 22.0359 18.0067 21.9117 18.001 21.784C17.9953 21.6563 18.0223 21.5293 18.0795 21.415L18.8295 19.915C18.9185 19.7371 19.0746 19.6018 19.2633 19.539C19.4521 19.4761 19.658 19.4908 19.8359 19.5798C20.0138 19.6688 20.1491 19.8249 20.212 20.0136C20.2748 20.2024 20.2601 20.4083 20.1711 20.5862L19.4211 22.0862C19.3587 22.2108 19.2629 22.3156 19.1444 22.3888C19.0258 22.462 18.8892 22.5007 18.7498 22.5006Z'
        fill={contentColor}
      />
      <Path
        d='M19.0238 6.41789C18.7103 4.9323 17.9281 3.58659 16.7925 2.57882C15.9502 1.82534 14.9418 1.28156 13.8495 0.991822C12.7572 0.702082 11.6118 0.674582 10.5068 0.911563C9.40185 1.14854 8.36851 1.6433 7.49105 2.35549C6.6136 3.06768 5.91686 3.97715 5.45766 5.00976C2.83594 5.16445 0.75 7.34367 0.75 10.0005C0.75 12.7577 2.99578 15.0007 5.75625 15.0007H8.86453L8.26031 18.6274C8.24241 18.7348 8.24812 18.8449 8.27705 18.9499C8.30597 19.0549 8.35742 19.1523 8.42782 19.2354C8.49821 19.3186 8.58586 19.3853 8.68467 19.4311C8.78348 19.4769 8.89109 19.5007 9 19.5007H10.5V22.5007C10.5003 22.6594 10.5508 22.8138 10.6445 22.9419C10.7381 23.07 10.8699 23.1651 11.021 23.2136C11.172 23.262 11.3346 23.2613 11.4852 23.2116C11.6359 23.1618 11.7669 23.0655 11.8594 22.9366L15.6094 17.6866C15.6894 17.5746 15.7371 17.4426 15.7471 17.3053C15.7571 17.1679 15.7291 17.0304 15.6662 16.9079C15.6032 16.7854 15.5078 16.6826 15.3903 16.6108C15.2727 16.539 15.1377 16.5009 15 16.5007H13.7105L14.0855 15.0007H18.953C20.0821 14.9962 21.164 14.5468 21.9641 13.7501C22.7642 12.9533 23.2181 11.8734 23.2275 10.7443C23.2368 9.61513 22.8007 8.52783 22.0139 7.71799C21.227 6.90816 20.1527 6.44104 19.0238 6.41789Z'
        fill={contentColor}
      />
    </Svg>
  )
}
