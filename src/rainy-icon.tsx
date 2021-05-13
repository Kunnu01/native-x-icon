import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface RainyIconProps {
  color?: string
  size?: IconSize
}

export function RainyIcon({ size = 'normal', color = COLOR.SECONDARY }: RainyIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M21.3872 6.53227C20.6011 5.74805 19.5511 5.20055 18.3323 4.93852C18.2181 4.91393 18.1112 4.86298 18.0201 4.78973C17.929 4.71649 17.8563 4.62297 17.8078 4.51664C17.3596 3.53777 16.6811 2.68197 15.8302 2.02243C14.7413 1.18946 13.417 0.749301 12 0.749301C10.3853 0.744175 8.82521 1.33351 7.61719 2.40493C6.48281 3.41555 5.69953 4.81149 5.34703 6.42821C5.31764 6.56506 5.25064 6.69099 5.15359 6.79186C5.05654 6.89272 4.93327 6.9645 4.79766 6.99914C3.62578 7.29446 3.12375 7.58696 2.49094 8.15039C1.59375 8.94914 1.125 10.0371 1.125 11.2868C1.125 12.7188 1.65141 13.8949 2.64703 14.688C3.51938 15.3823 4.71094 15.7493 6.09375 15.7493H17.0625C18.6187 15.7493 20.0677 15.2121 21.1406 14.2362C22.2581 13.2213 22.875 11.8141 22.875 10.2743C22.875 8.79821 22.3594 7.50446 21.3872 6.53227Z'
        fill={contentColor}
      />
      <Path
        d='M5.25004 20.9996C5.1143 20.9996 4.98113 20.9627 4.86473 20.8928C4.74833 20.823 4.65305 20.7229 4.58906 20.6032C4.52507 20.4835 4.49477 20.3487 4.50138 20.2131C4.50799 20.0775 4.55127 19.9463 4.6266 19.8334L6.1266 17.5834C6.18126 17.5015 6.25152 17.4311 6.33338 17.3763C6.41524 17.3215 6.50708 17.2834 6.60367 17.2641C6.70025 17.2449 6.79969 17.2448 6.89631 17.2639C6.99292 17.2831 7.08482 17.3211 7.16675 17.3757C7.24868 17.4304 7.31905 17.5007 7.37382 17.5825C7.4286 17.6644 7.46672 17.7562 7.486 17.8528C7.50528 17.9494 7.50535 18.0488 7.48621 18.1455C7.46706 18.2421 7.42907 18.334 7.37441 18.4159L5.87441 20.6659C5.80586 20.7686 5.713 20.8529 5.60408 20.9111C5.49516 20.9693 5.37354 20.9997 5.25004 20.9996Z'
        fill={contentColor}
      />
      <Path
        d='M7.50006 23.2496C7.36436 23.2495 7.23126 23.2125 7.11492 23.1426C6.99858 23.0728 6.90337 22.9727 6.83944 22.853C6.77551 22.7333 6.74524 22.5985 6.75187 22.463C6.7585 22.3275 6.80178 22.1963 6.87709 22.0834L9.87709 17.5834C9.93175 17.5015 10.002 17.4311 10.0839 17.3763C10.1657 17.3215 10.2576 17.2834 10.3542 17.2641C10.4507 17.2449 10.5502 17.2448 10.6468 17.2639C10.7434 17.2831 10.8353 17.3211 10.9172 17.3757C10.9992 17.4304 11.0695 17.5007 11.1243 17.5825C11.1791 17.6644 11.2172 17.7562 11.2365 17.8528C11.2558 17.9494 11.2558 18.0488 11.2367 18.1455C11.2176 18.2421 11.1796 18.334 11.1249 18.4159L8.1249 22.9159C8.05631 23.0187 7.96338 23.103 7.85437 23.1612C7.74536 23.2194 7.62364 23.2498 7.50006 23.2496Z'
        fill={contentColor}
      />
      <Path
        d='M12.7499 20.9997C12.6142 20.9996 12.481 20.9627 12.3646 20.8928C12.2482 20.823 12.1529 20.7229 12.0889 20.6032C12.0249 20.4835 11.9946 20.3487 12.0013 20.2131C12.0079 20.0776 12.0511 19.9463 12.1265 19.8334L13.6265 17.5834C13.7369 17.4179 13.9085 17.3031 14.1036 17.2642C14.2986 17.2252 14.5012 17.2653 14.6666 17.3757C14.8321 17.4861 14.947 17.6578 14.9859 17.8528C15.0248 18.0479 14.9847 18.2504 14.8743 18.4159L13.3743 20.6659C13.3057 20.7686 13.2129 20.8529 13.104 20.9111C12.995 20.9693 12.8734 20.9997 12.7499 20.9997Z'
        fill={contentColor}
      />
      <Path
        d='M14.9999 23.2497C14.8642 23.2496 14.731 23.2127 14.6146 23.1428C14.4982 23.073 14.4029 22.9729 14.3389 22.8532C14.2749 22.7335 14.2446 22.5987 14.2513 22.4631C14.2579 22.3276 14.3011 22.1963 14.3765 22.0834L17.3765 17.5834C17.4869 17.4179 17.6585 17.3031 17.8536 17.2642C18.0486 17.2252 18.2512 17.2653 18.4166 17.3757C18.5821 17.4861 18.6969 17.6578 18.7359 17.8528C18.7748 18.0479 18.7347 18.2504 18.6243 18.4159L15.6243 22.9159C15.5557 23.0186 15.4629 23.1029 15.354 23.1611C15.245 23.2193 15.1234 23.2497 14.9999 23.2497Z'
        fill={contentColor}
      />
    </Svg>
  )
}
