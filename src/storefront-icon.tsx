import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface StorefrontIconProps {
  color?: string
  size?: IconSize
}

export function StorefrontIcon({ size = 'normal', color = COLOR.SECONDARY }: StorefrontIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M22.5001 21.0003H21.9376C21.8878 21.0003 21.8401 20.9806 21.805 20.9454C21.7698 20.9102 21.7501 20.8625 21.7501 20.8128V12.8211C21.7505 12.7913 21.7438 12.7618 21.7305 12.735C21.7173 12.7083 21.6978 12.6852 21.6738 12.6675C21.6498 12.6498 21.6219 12.6381 21.5924 12.6333C21.563 12.6286 21.5328 12.6309 21.5044 12.6402C21.0743 12.7753 20.6276 12.8507 20.1769 12.8642C20.1216 12.8642 20.0691 12.8666 20.0176 12.8666C19.1507 12.8686 18.2978 12.6485 17.5402 12.2272C17.4829 12.1953 17.4183 12.1786 17.3527 12.1786C17.2871 12.1786 17.2226 12.1953 17.1652 12.2272C16.4078 12.6485 15.555 12.8686 14.6883 12.8666C13.8265 12.8678 12.9791 12.645 12.2293 12.2202C12.1715 12.1874 12.1061 12.1702 12.0397 12.1702C11.9732 12.1702 11.9079 12.1874 11.8501 12.2202C11.089 12.6466 10.2306 12.8694 9.35819 12.867C8.49056 12.8676 7.63784 12.6414 6.8846 12.2108C6.82631 12.1776 6.76041 12.1602 6.69335 12.1602C6.62629 12.1602 6.56038 12.1776 6.5021 12.2108C5.74885 12.6414 4.89614 12.8676 4.0285 12.867C3.97741 12.867 3.92585 12.867 3.87054 12.8647H3.86772C3.40122 12.8507 2.93908 12.7704 2.49522 12.6261C2.46711 12.617 2.43726 12.6147 2.40808 12.6193C2.37891 12.624 2.35125 12.6355 2.32735 12.6528C2.30346 12.6702 2.284 12.693 2.27057 12.7193C2.25714 12.7456 2.25011 12.7747 2.25007 12.8042V20.8128C2.25007 20.8625 2.23031 20.9102 2.19515 20.9454C2.15999 20.9806 2.11229 21.0003 2.06257 21.0003H1.5235C1.1185 21.0003 0.768816 21.3116 0.751004 21.7166C0.746445 21.8178 0.76244 21.9189 0.798026 22.0137C0.833611 22.1086 0.888048 22.1953 0.958052 22.2685C1.02805 22.3418 1.11217 22.4001 1.20533 22.4399C1.29849 22.4797 1.39875 22.5003 1.50007 22.5003H22.4766C22.8816 22.5003 23.2313 22.1891 23.2491 21.7841C23.2537 21.6829 23.2377 21.5818 23.2021 21.4869C23.1665 21.392 23.1121 21.3054 23.0421 21.2321C22.9721 21.1589 22.888 21.1006 22.7948 21.0607C22.7016 21.0209 22.6014 21.0003 22.5001 21.0003ZM10.5001 17.8128C10.5001 17.8625 10.4803 17.9102 10.4451 17.9454C10.41 17.9806 10.3623 18.0003 10.3126 18.0003H6.18757C6.13784 18.0003 6.09015 17.9806 6.05498 17.9454C6.01982 17.9102 6.00007 17.8625 6.00007 17.8128V14.8128C6.00007 14.6636 6.05933 14.5206 6.16482 14.4151C6.27031 14.3096 6.41338 14.2503 6.56257 14.2503H9.93757C10.0868 14.2503 10.2298 14.3096 10.3353 14.4151C10.4408 14.5206 10.5001 14.6636 10.5001 14.8128V17.8128ZM17.8126 21.0003H14.4376C14.3878 21.0003 14.3401 20.9806 14.305 20.9454C14.2698 20.9102 14.2501 20.8625 14.2501 20.8128V14.8128C14.2501 14.6636 14.3093 14.5206 14.4148 14.4151C14.5203 14.3096 14.6634 14.2503 14.8126 14.2503H17.4376C17.5868 14.2503 17.7298 14.3096 17.8353 14.4151C17.9408 14.5206 18.0001 14.6636 18.0001 14.8128V20.8128C18.0001 20.8625 17.9803 20.9102 17.9451 20.9454C17.91 20.9806 17.8623 21.0003 17.8126 21.0003Z'
        fill={contentColor}
      />
      <Path
        d='M23.0893 7.98187L21.0775 3.36516C20.5506 2.23219 19.3473 1.5 18.0118 1.5H5.98607C4.6506 1.5 3.44732 2.23219 2.92044 3.36516L0.908565 7.98187C0.48669 8.89172 1.04403 9.82594 1.0445 9.82641L1.05763 9.8475C1.0806 9.88406 1.12138 9.94125 1.14622 9.97781C1.14857 9.98063 1.15044 9.98391 1.15278 9.98719L1.38716 10.2708C1.39592 10.2815 1.40531 10.2917 1.41528 10.3012L1.64966 10.5277L1.66935 10.5445C1.80699 10.6625 1.95422 10.7688 2.1095 10.8623V10.8647C2.61965 11.1737 3.20086 11.346 3.797 11.3648C3.83544 11.3648 3.87388 11.3648 3.91278 11.3648C4.81479 11.3665 5.68392 11.0263 6.34513 10.4128L6.3606 10.3983C6.42965 10.3332 6.52095 10.297 6.61583 10.297C6.71071 10.297 6.80201 10.3332 6.87107 10.3983L6.88653 10.4128C7.55479 11.0253 8.42834 11.3651 9.33482 11.3651C10.2413 11.3651 11.1148 11.0253 11.7831 10.4128C11.8524 10.3486 11.9434 10.313 12.0379 10.313C12.1323 10.313 12.2233 10.3486 12.2926 10.4128C12.9589 11.0234 13.8293 11.3629 14.733 11.3649C15.6367 11.3669 16.5085 11.0312 17.1775 10.4236C17.2458 10.3603 17.3354 10.3252 17.4285 10.3252C17.5216 10.3252 17.6112 10.3603 17.6795 10.4236C18.3492 11.0349 19.2248 11.371 20.1315 11.3648H20.2483C20.8294 11.3431 21.3949 11.1703 21.8889 10.8633C21.9334 10.8366 21.9761 10.8084 22.0192 10.7803C22.3523 10.5557 22.6423 10.2729 22.8751 9.94547L22.9567 9.82219C22.9648 9.80969 22.9723 9.79656 22.9792 9.78281C23.057 9.62437 23.4742 8.80969 23.0893 7.98187Z'
        fill={contentColor}
      />
    </Svg>
  )
}
