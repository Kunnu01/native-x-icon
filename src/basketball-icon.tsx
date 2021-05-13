import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface BasketballIconProps {
  color?: string
  size?: IconSize
}

export function BasketballIcon({ size = 'normal', color = COLOR.SECONDARY }: BasketballIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 10.9393L13.6148 9.32446C12.0973 7.56102 11.2635 5.31116 11.2655 2.98462C11.2655 2.75024 11.2744 2.51353 11.2908 2.28149C9.21323 2.42789 7.23784 3.23859 5.6564 4.59384L12 10.9393Z'
        fill={contentColor}
      />
      <Path
        d='M14.6784 8.26097L18.3436 4.59394C16.7851 3.25801 14.8431 2.45058 12.7969 2.28769C12.7777 2.51738 12.7669 2.74988 12.7669 2.98472C12.7649 4.91333 13.4416 6.78114 14.6784 8.26097Z'
        fill={contentColor}
      />
      <Path
        d='M15.7392 9.32165C17.2189 10.5589 19.0867 11.2361 21.0155 11.2346C21.2498 11.2346 21.4842 11.2238 21.7125 11.2046C21.5499 9.15787 20.7425 7.2154 19.4063 5.65649L15.7392 9.32165Z'
        fill={contentColor}
      />
      <Path
        d='M8.26078 14.6783C6.78118 13.4409 4.91333 12.7637 2.98453 12.7653C2.74953 12.7653 2.51719 12.7753 2.2875 12.7953C2.4501 14.8421 3.25755 16.7845 4.59375 18.3434L8.26078 14.6783Z'
        fill={contentColor}
      />
      <Path
        d='M12 13.0609L10.3852 14.6758C11.9027 16.4392 12.7365 18.6891 12.7345 21.0156C12.7345 21.25 12.7256 21.4867 12.7092 21.7187C14.7868 21.5724 16.7622 20.7617 18.3436 19.4064L12 13.0609Z'
        fill={contentColor}
      />
      <Path
        d='M21.0155 12.7347C18.6889 12.7367 16.4391 11.9029 14.6756 10.3853L13.0608 12.0002L19.4063 18.3438C20.7625 16.7627 21.5742 14.7873 21.7214 12.7094C21.4866 12.7258 21.2517 12.7347 21.0155 12.7347Z'
        fill={contentColor}
      />
      <Path
        d='M10.9392 12.0001L4.59375 5.65649C3.2374 7.23751 2.42569 9.21296 2.27859 11.2909C2.51297 11.2745 2.74734 11.2655 2.98172 11.2655C5.30826 11.2636 7.55812 12.0973 9.32156 13.6149L10.9392 12.0001Z'
        fill={contentColor}
      />
      <Path
        d='M5.6564 19.4062C7.21493 20.7422 9.15686 21.5496 11.2031 21.7125C11.2228 21.4828 11.2328 21.2504 11.2331 21.0154C11.2347 19.0866 10.5575 17.2188 9.32015 15.7392L5.6564 19.4062Z'
        fill={contentColor}
      />
    </Svg>
  )
}
