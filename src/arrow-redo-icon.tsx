import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ArrowRedoIconProps {
  color?: string
  size?: IconSize
}

export function ArrowRedoIcon({ size = 'normal', color = COLOR.SECONDARY }: ArrowRedoIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M2.75578 20.5842C2.60813 20.5333 2.48004 20.4376 2.38937 20.3105C2.2987 20.1834 2.24998 20.0311 2.25 19.8749C2.25 16.4484 2.93813 13.7081 4.29609 11.7295C5.93672 9.33884 8.52469 8.05165 12 7.89181V4.12493C12 3.97808 12.0431 3.83445 12.124 3.71188C12.2049 3.58931 12.32 3.49318 12.4551 3.43543C12.5901 3.37768 12.7391 3.36084 12.8836 3.387C13.0281 3.41316 13.1618 3.48117 13.268 3.58259L21.518 11.4576C21.5913 11.5276 21.6496 11.6118 21.6895 11.705C21.7294 11.7982 21.7499 11.8986 21.7499 11.9999C21.7499 12.1013 21.7294 12.2017 21.6895 12.2949C21.6496 12.3881 21.5913 12.4723 21.518 12.5423L13.268 20.4173C13.1618 20.5187 13.0281 20.5867 12.8836 20.6129C12.7391 20.639 12.5901 20.6222 12.4551 20.5644C12.32 20.5067 12.2049 20.4106 12.124 20.288C12.0431 20.1654 12 20.0218 12 19.8749V16.1357C9.89062 16.1995 8.29687 16.5412 7.02797 17.197C5.65687 17.9057 4.66266 18.9646 3.59109 20.3376C3.49496 20.4607 3.3628 20.5507 3.21306 20.5951C3.06331 20.6394 2.90345 20.6359 2.75578 20.5851V20.5842Z'
        fill={contentColor}
      />
    </Svg>
  )
}
