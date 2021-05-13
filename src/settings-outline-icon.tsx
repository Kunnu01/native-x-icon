import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface SettingsOutlineIconProps {
  color?: string
  size?: IconSize
}

export function SettingsOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: SettingsOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12.2948 9.01453C11.6793 8.95374 11.06 9.08469 10.5218 9.38945C9.98353 9.69421 9.55266 10.1579 9.28813 10.717C9.02361 11.2761 8.93836 11.9033 9.04406 12.5127C9.14976 13.1221 9.44125 13.684 9.87861 14.1213C10.316 14.5587 10.8778 14.8502 11.4872 14.9559C12.0967 15.0616 12.7239 14.9763 13.283 14.7118C13.8421 14.4473 14.3057 14.0164 14.6105 13.4782C14.9152 12.94 15.0462 12.3207 14.9854 11.7052C14.9161 11.0151 14.6104 10.3703 14.12 9.87995C13.6296 9.38958 12.9848 9.08384 12.2948 9.01453V9.01453ZM19.5182 12C19.5163 12.3261 19.4923 12.6517 19.4465 12.9745L21.5657 14.6367C21.658 14.7132 21.7202 14.8199 21.7412 14.9379C21.7622 15.056 21.7407 15.1776 21.6806 15.2812L19.6757 18.75C19.6148 18.8527 19.5197 18.9305 19.407 18.9699C19.2943 19.0093 19.1713 19.0076 19.0598 18.9652L16.9551 18.1177C16.839 18.0714 16.7133 18.0547 16.5892 18.0691C16.4651 18.0834 16.3465 18.1283 16.244 18.1997C15.9228 18.4209 15.5853 18.6174 15.2343 18.7875C15.124 18.8411 15.0285 18.9211 14.9564 19.0203C14.8843 19.1196 14.8378 19.2351 14.8209 19.3566L14.5054 21.6014C14.4847 21.72 14.4234 21.8276 14.3321 21.906C14.2408 21.9844 14.1251 22.0287 14.0048 22.0312H9.99509C9.87675 22.0292 9.76264 21.9869 9.67155 21.9113C9.58047 21.8357 9.51784 21.7314 9.494 21.6155L9.179 19.3739C9.16131 19.2511 9.11354 19.1345 9.03994 19.0346C8.96634 18.9346 8.86919 18.8544 8.75712 18.8011C8.4066 18.6319 8.07021 18.4349 7.75118 18.2119C7.64904 18.1408 7.53082 18.0963 7.40717 18.0823C7.28353 18.0683 7.15835 18.0853 7.0429 18.1317L4.93868 18.9788C4.82717 19.0212 4.70425 19.023 4.59158 18.9837C4.4789 18.9444 4.3837 18.8666 4.32275 18.7641L2.3179 15.2953C2.25763 15.1917 2.23609 15.07 2.25712 14.952C2.27815 14.834 2.34039 14.7272 2.43275 14.6508L4.22384 13.2445C4.32197 13.1666 4.39909 13.0655 4.4482 12.9502C4.49732 12.835 4.51687 12.7093 4.50509 12.5845C4.48822 12.3891 4.4779 12.1941 4.4779 11.9986C4.4779 11.8031 4.48775 11.6109 4.50509 11.4197C4.51558 11.2957 4.49507 11.1711 4.4454 11.057C4.39573 10.9429 4.31846 10.843 4.22056 10.7662L2.4304 9.36C2.33954 9.28317 2.27862 9.17681 2.2583 9.05957C2.23799 8.94232 2.25959 8.82167 2.31931 8.71875L4.32415 5.25C4.38504 5.14734 4.48021 5.06946 4.59289 5.0301C4.70557 4.99074 4.82853 4.99242 4.94009 5.03484L7.04478 5.88234C7.16084 5.92856 7.28656 5.94525 7.41066 5.93094C7.53476 5.91662 7.65338 5.87174 7.75587 5.80031C8.07708 5.57912 8.41461 5.38262 8.76556 5.2125C8.87589 5.15887 8.97132 5.07891 9.04343 4.97966C9.11553 4.88042 9.16209 4.76494 9.179 4.64344L9.49447 2.39859C9.51519 2.28004 9.57644 2.17236 9.66775 2.09396C9.75906 2.01555 9.87476 1.9713 9.99509 1.96875H14.0048C14.1231 1.9708 14.2372 2.01309 14.3283 2.08867C14.4194 2.16425 14.482 2.2686 14.5059 2.38453L14.8209 4.62609C14.8386 4.74894 14.8863 4.86551 14.9599 4.96544C15.0335 5.06537 15.1307 5.14557 15.2427 5.19891C15.5933 5.3681 15.9297 5.56514 16.2487 5.78813C16.3508 5.85919 16.469 5.90373 16.5927 5.91772C16.7163 5.93172 16.8415 5.91473 16.957 5.86828L19.0612 5.02125C19.1727 4.97879 19.2956 4.97704 19.4083 5.01631C19.521 5.05558 19.6162 5.13336 19.6771 5.23594L21.682 8.70469C21.7422 8.80832 21.7638 8.92999 21.7428 9.04802C21.7217 9.16604 21.6595 9.27278 21.5671 9.34922L19.776 10.7555C19.6775 10.8331 19.5999 10.9342 19.5504 11.0494C19.5008 11.1647 19.4809 11.2905 19.4924 11.4155C19.5079 11.6095 19.5182 11.8045 19.5182 12Z'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </Svg>
  )
}
