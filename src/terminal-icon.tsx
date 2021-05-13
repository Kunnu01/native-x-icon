import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface TerminalIconProps {
  color?: string
  size?: IconSize
}

export function TerminalIcon({ size = 'normal', color = COLOR.SECONDARY }: TerminalIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M20.25 1.5H3.75C2.95462 1.50087 2.19206 1.81722 1.62964 2.37964C1.06722 2.94206 0.750869 3.70462 0.75 4.5V19.5C0.750869 20.2954 1.06722 21.0579 1.62964 21.6204C2.19206 22.1828 2.95462 22.4991 3.75 22.5H20.25C21.0454 22.4991 21.8079 22.1828 22.3704 21.6204C22.9328 21.0579 23.2491 20.2954 23.25 19.5V4.5C23.2491 3.70462 22.9328 2.94206 22.3704 2.37964C21.8079 1.81722 21.0454 1.50087 20.25 1.5ZM4.5 12C4.34461 12 4.19306 11.9517 4.06629 11.8619C3.93952 11.772 3.84379 11.645 3.79233 11.4984C3.74086 11.3518 3.73621 11.1928 3.77901 11.0434C3.82181 10.894 3.90995 10.7616 4.03125 10.6645L7.04953 8.25L4.03125 5.83547C3.9543 5.77391 3.89024 5.6978 3.8427 5.61148C3.79517 5.52517 3.76511 5.43033 3.75422 5.3324C3.74334 5.23446 3.75186 5.13534 3.77928 5.04069C3.80671 4.94604 3.85251 4.85773 3.91406 4.78078C3.97562 4.70383 4.05173 4.63977 4.13805 4.59223C4.22436 4.5447 4.3192 4.51464 4.41714 4.50375C4.51507 4.49287 4.61419 4.50139 4.70884 4.52881C4.80349 4.55624 4.8918 4.60204 4.96875 4.66359L8.71875 7.66359C8.80668 7.73385 8.87768 7.823 8.92646 7.92443C8.97525 8.02586 9.00059 8.13698 9.00059 8.24953C9.00059 8.36209 8.97525 8.4732 8.92646 8.57463C8.87768 8.67606 8.80668 8.76521 8.71875 8.83547L4.96875 11.8355C4.83573 11.942 4.6704 12 4.5 12ZM12 12H9C8.80109 12 8.61032 11.921 8.46967 11.7803C8.32902 11.6397 8.25 11.4489 8.25 11.25C8.25 11.0511 8.32902 10.8603 8.46967 10.7197C8.61032 10.579 8.80109 10.5 9 10.5H12C12.1989 10.5 12.3897 10.579 12.5303 10.7197C12.671 10.8603 12.75 11.0511 12.75 11.25C12.75 11.4489 12.671 11.6397 12.5303 11.7803C12.3897 11.921 12.1989 12 12 12Z'
        fill={contentColor}
      />
    </Svg>
  )
}
