import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface UnlinkIconProps {
  color?: string
  size?: IconSize
}

export function UnlinkIcon({ size = 'normal', color = COLOR.SECONDARY }: UnlinkIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M6.75 8.625C5.85489 8.625 4.99645 8.98058 4.36351 9.61351C3.73058 10.2465 3.375 11.1049 3.375 12C3.375 12.8951 3.73058 13.7536 4.36351 14.3865C4.99645 15.0194 5.85489 15.375 6.75 15.375H9.40594C10.0273 15.375 10.5309 15.8787 10.5309 16.5C10.5309 17.1213 10.0273 17.625 9.40594 17.625H6.75C5.25816 17.625 3.82742 17.0324 2.77252 15.9775C1.71763 14.9226 1.125 13.4918 1.125 12C1.125 10.5082 1.71763 9.07742 2.77252 8.02252C3.82742 6.96763 5.25816 6.375 6.75 6.375H9.34734C9.96866 6.375 10.4723 6.87868 10.4723 7.5C10.4723 8.12132 9.96866 8.625 9.34734 8.625H6.75Z'
        fill={contentColor}
      />
      <Path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M13.5276 7.5C13.5276 6.87868 14.0313 6.375 14.6526 6.375H17.2499C18.7418 6.375 20.1725 6.96763 21.2274 8.02252C22.2823 9.07742 22.8749 10.5082 22.8749 12C22.8749 13.4918 22.2823 14.9226 21.2274 15.9775C20.1725 17.0324 18.7418 17.625 17.2499 17.625H14.594C13.9727 17.625 13.469 17.1213 13.469 16.5C13.469 15.8787 13.9727 15.375 14.594 15.375H17.2499C18.145 15.375 19.0035 15.0194 19.6364 14.3865C20.2694 13.7536 20.6249 12.8951 20.6249 12C20.6249 11.1049 20.2694 10.2464 19.6364 9.61351C19.0035 8.98058 18.145 8.625 17.2499 8.625H14.6526C14.0313 8.625 13.5276 8.12132 13.5276 7.5Z'
        fill={contentColor}
      />
    </Svg>
  )
}
