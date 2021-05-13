import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LogoDockerIconProps {
  color?: string
  size?: IconSize
}

export function LogoDockerIcon({ size = 'normal', color = COLOR.SECONDARY }: LogoDockerIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <G clip-path='url(#clip0)'>
        <Path
          d='M23.7656 9.89827C23.6991 9.84249 23.0977 9.38546 21.8067 9.38546C21.4672 9.38742 21.1284 9.41721 20.7938 9.47452C20.5491 7.76827 19.1353 6.94327 19.0795 6.8964L18.7345 6.69577L18.5119 7.01921C18.2311 7.45831 18.0243 7.94049 17.8997 8.44655C17.6653 9.41686 17.8106 10.3309 18.3005 11.1114C17.7103 11.4461 16.7536 11.5239 16.553 11.5333H0.747169C0.648673 11.5332 0.551138 11.5526 0.460181 11.5904C0.369224 11.6282 0.286642 11.6836 0.217191 11.7535C0.14774 11.8233 0.0927933 11.9062 0.0555148 11.9974C0.0182362 12.0885 -0.000637462 12.1862 -1.91376e-05 12.2847C-0.0212517 13.6723 0.213122 15.052 0.691388 16.3548C1.23701 17.7822 2.04936 18.8439 3.09373 19.488C4.27592 20.2126 6.20155 20.6251 8.37187 20.6251C9.35376 20.6252 10.3336 20.5356 11.2992 20.3575C12.6454 20.1134 13.9403 19.6421 15.1284 18.9639C16.1066 18.3956 16.9862 17.6726 17.7333 16.8231C18.9909 15.407 19.7367 13.8231 20.2823 12.4169H20.505C21.8742 12.4169 22.7203 11.8703 23.1877 11.402C23.4979 11.108 23.7409 10.7505 23.9002 10.3539L24.0005 10.0642L23.7656 9.89827Z'
          fill={contentColor}
        />
        <Path
          d='M2.21667 11.0802H4.33121C4.38093 11.0802 4.42863 11.0604 4.46379 11.0253C4.49895 10.9901 4.51871 10.9424 4.51871 10.8927V8.99518C4.51871 8.94545 4.49895 8.89776 4.46379 8.8626C4.42863 8.82743 4.38093 8.80768 4.33121 8.80768H2.21667C2.16695 8.80768 2.11926 8.82743 2.08409 8.8626C2.04893 8.89776 2.02917 8.94545 2.02917 8.99518V10.8908C2.03103 10.9399 2.05138 10.9866 2.08615 11.0213C2.12092 11.0561 2.16754 11.0764 2.21667 11.0783'
          fill={contentColor}
        />
        <Path
          d='M5.13281 11.0802H7.24781C7.29754 11.0802 7.34523 11.0604 7.38039 11.0253C7.41556 10.9901 7.43531 10.9424 7.43531 10.8927V8.99518C7.43531 8.94545 7.41556 8.89776 7.38039 8.8626C7.34523 8.82743 7.29754 8.80768 7.24781 8.80768H5.13281C5.08308 8.80768 5.03539 8.82743 5.00023 8.8626C4.96507 8.89776 4.94531 8.94545 4.94531 8.99518V10.8908C4.94717 10.9399 4.96752 10.9866 5.00229 11.0213C5.03706 11.0561 5.08368 11.0764 5.13281 11.0783'
          fill={contentColor}
        />
        <Path
          d='M8.10472 11.0802H10.2188C10.2685 11.0802 10.3162 11.0604 10.3514 11.0253C10.3865 10.9901 10.4063 10.9424 10.4063 10.8927V8.99518C10.4063 8.94545 10.3865 8.89776 10.3514 8.8626C10.3162 8.82743 10.2685 8.80768 10.2188 8.80768H8.10472C8.05499 8.80768 8.0073 8.82743 7.97214 8.8626C7.93698 8.89776 7.91722 8.94545 7.91722 8.99518V10.8908C7.91637 10.9157 7.92064 10.9404 7.92976 10.9636C7.93888 10.9867 7.95266 11.0077 7.97025 11.0253C7.98783 11.0429 8.00884 11.0566 8.03197 11.0658C8.05511 11.0749 8.07987 11.0792 8.10472 11.0783'
          fill={contentColor}
        />
        <Path
          d='M11.0325 11.0802H13.1475C13.1972 11.0802 13.2449 11.0604 13.2801 11.0253C13.3152 10.9901 13.335 10.9424 13.335 10.8927V8.99518C13.335 8.94545 13.3152 8.89776 13.2801 8.8626C13.2449 8.82743 13.1972 8.80768 13.1475 8.80768H11.0325C10.9827 8.80768 10.9351 8.82743 10.8999 8.8626C10.8647 8.89776 10.845 8.94545 10.845 8.99518V10.8908C10.845 10.9405 10.8647 10.9882 10.8999 11.0234C10.9351 11.0585 10.9827 11.0783 11.0325 11.0783'
          fill={contentColor}
        />
        <Path
          d='M5.13281 8.37062H7.24781C7.29695 8.36876 7.34357 8.34841 7.37834 8.31364C7.41311 8.27887 7.43346 8.23225 7.43531 8.18312V6.28561C7.43531 6.23589 7.41556 6.18819 7.38039 6.15303C7.34523 6.11787 7.29754 6.09811 7.24781 6.09811H5.13281C5.08308 6.09811 5.03539 6.11787 5.00023 6.15303C4.96507 6.18819 4.94531 6.23589 4.94531 6.28561V8.18124C4.94898 8.22975 4.96992 8.27534 5.00432 8.30973C5.03872 8.34413 5.0843 8.36507 5.13281 8.36874'
          fill={contentColor}
        />
        <Path
          d='M8.10474 8.37062H10.2188C10.2679 8.36876 10.3146 8.34841 10.3493 8.31364C10.3841 8.27887 10.4044 8.23225 10.4063 8.18312V6.28561C10.4063 6.23589 10.3865 6.18819 10.3514 6.15303C10.3162 6.11787 10.2685 6.09811 10.2188 6.09811H8.10474C8.05501 6.09811 8.00732 6.11787 7.97215 6.15303C7.93699 6.18819 7.91724 6.23589 7.91724 6.28561V8.18124C7.91724 8.23097 7.93699 8.27866 7.97215 8.31382C8.00732 8.34899 8.05501 8.36874 8.10474 8.36874'
          fill={contentColor}
        />
        <Path
          d='M11.0325 8.37062H13.1475C13.1966 8.36876 13.2432 8.34841 13.278 8.31364C13.3128 8.27887 13.3331 8.23225 13.335 8.18312V6.28561C13.3331 6.23648 13.3128 6.18986 13.278 6.15509C13.2432 6.12032 13.1966 6.09997 13.1475 6.09811H11.0325C10.9827 6.09811 10.9351 6.11787 10.8999 6.15303C10.8647 6.18819 10.845 6.23589 10.845 6.28561V8.18124C10.8468 8.23038 10.8672 8.277 10.9019 8.31176C10.9367 8.34653 10.9833 8.36688 11.0325 8.36874'
          fill={contentColor}
        />
        <Path
          d='M11.0325 5.64984H13.1475C13.1972 5.64984 13.2449 5.63009 13.2801 5.59493C13.3152 5.55976 13.335 5.51207 13.335 5.46234V3.5625C13.3331 3.51336 13.3128 3.46674 13.278 3.43198C13.2432 3.39721 13.1966 3.37686 13.1475 3.375H11.0325C10.9827 3.375 10.9351 3.39475 10.8999 3.42992C10.8647 3.46508 10.845 3.51277 10.845 3.5625V5.45813C10.8469 5.50722 10.8673 5.55378 10.9021 5.58853C10.9368 5.62328 10.9834 5.64366 11.0325 5.64563'
          fill={contentColor}
        />
        <Path
          d='M13.9818 11.0802H16.0968C16.1465 11.0802 16.1942 11.0604 16.2294 11.0253C16.2646 10.9901 16.2843 10.9424 16.2843 10.8927V8.99518C16.2843 8.94545 16.2646 8.89776 16.2294 8.8626C16.1942 8.82743 16.1465 8.80768 16.0968 8.80768H13.9818C13.9321 8.80768 13.8844 8.82743 13.8492 8.8626C13.8141 8.89776 13.7943 8.94545 13.7943 8.99518V10.8908C13.7962 10.9399 13.8165 10.9866 13.8513 11.0213C13.8861 11.0561 13.9327 11.0764 13.9818 11.0783'
          fill={contentColor}
        />
      </G>
      <Defs>
        <ClipPath id='clip0'>
          <Rect width='24' height='24' fill={contentColor} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
