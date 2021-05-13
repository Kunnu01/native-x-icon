import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface MedalIconProps {
  color?: string
  size?: IconSize
}

export function MedalIcon({ size = 'normal', color = COLOR.SECONDARY }: MedalIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 18C12.8284 18 13.5 17.3284 13.5 16.5C13.5 15.6716 12.8284 15 12 15C11.1716 15 10.5 15.6716 10.5 16.5C10.5 17.3284 11.1716 18 12 18Z'
        fill={contentColor}
      />
      <Path
        d='M4.6772 1.5C4.25931 1.49992 3.84965 1.61622 3.49414 1.83587C3.13863 2.05552 2.85131 2.36984 2.66439 2.74359L1.21127 5.64984C1.06927 5.93563 0.989343 6.24823 0.976741 6.5671C0.964138 6.88597 1.01914 7.2039 1.13814 7.5H14.1788C14.2105 7.50003 14.2417 7.49201 14.2695 7.47668C14.2973 7.46135 14.3208 7.43921 14.3377 7.41234L17.8767 1.78734C17.8946 1.75903 17.9045 1.72646 17.9054 1.69302C17.9064 1.65958 17.8985 1.62649 17.8823 1.59717C17.8662 1.56785 17.8426 1.54338 17.8138 1.5263C17.785 1.50921 17.7522 1.50013 17.7188 1.5H4.6772Z'
        fill={contentColor}
      />
      <Path
        d='M22.7892 5.65157L21.3361 2.74532C21.1863 2.44343 20.9703 2.17928 20.7042 1.97262C20.438 1.76596 20.1286 1.62213 19.799 1.55188L16.0546 7.50032L13.9687 10.8322C12.6936 10.3893 11.3063 10.3893 10.0312 10.8322L8.93809 9.08844C8.92124 9.06149 8.89782 9.03926 8.87002 9.02384C8.84223 9.00843 8.81097 9.00033 8.77918 9.00032H2.39715C2.36352 9.00037 2.33052 9.00947 2.30161 9.02667C2.27271 9.04386 2.24896 9.06851 2.23286 9.09803C2.21675 9.12756 2.20888 9.16087 2.21008 9.19448C2.21127 9.22809 2.22149 9.26076 2.23965 9.28907L6.11621 15.3233C5.94156 16.1939 5.96235 17.0925 6.17707 17.9542C6.3918 18.8158 6.7951 19.6191 7.35789 20.3059C7.92067 20.9928 8.62891 21.5462 9.4315 21.9262C10.2341 22.3062 11.111 22.5033 11.999 22.5033C12.887 22.5033 13.764 22.3062 14.5665 21.9262C15.3691 21.5462 16.0774 20.9928 16.6402 20.3059C17.2029 19.6191 17.6063 18.8158 17.821 17.9542C18.0357 17.0925 18.0565 16.1939 17.8818 15.3233L22.6696 7.87532C22.8798 7.54651 23.0013 7.16888 23.0223 6.77918C23.0432 6.38949 22.9629 6.00101 22.7892 5.65157ZM12.1954 19.4942C11.5867 19.534 10.9803 19.3873 10.4571 19.0736C9.93392 18.7599 9.51879 18.2941 9.26708 17.7385C9.01537 17.1828 8.93904 16.5636 9.04827 15.9634C9.15751 15.3633 9.44711 14.8106 9.87847 14.3793C10.3098 13.9479 10.8624 13.6583 11.4626 13.5491C12.0628 13.4399 12.682 13.5162 13.2376 13.7679C13.7933 14.0196 14.2591 14.4347 14.5728 14.9579C14.8864 15.4811 15.0332 16.0875 14.9934 16.6963C14.9452 17.4224 14.6349 18.1063 14.1204 18.6209C13.6059 19.1355 12.922 19.4459 12.1959 19.4942H12.1954Z'
        fill={contentColor}
      />
    </Svg>
  )
}
