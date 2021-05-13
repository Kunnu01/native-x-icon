import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ArrowUndoCircleIconProps {
  color?: string
  size?: IconSize
}

export function ArrowUndoCircleIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ArrowUndoCircleIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 2.25C6.61547 2.25 2.25 6.61547 2.25 12C2.25 17.3845 6.61547 21.75 12 21.75C17.3845 21.75 21.75 17.3845 21.75 12C21.75 6.61547 17.3845 2.25 12 2.25ZM16.5783 15.4266C15.45 14.2448 14.1637 13.6134 11.4886 13.6134V15.3628C11.4883 15.439 11.4657 15.5134 11.4236 15.5768C11.3815 15.6403 11.3218 15.6901 11.2518 15.72C11.1817 15.7499 11.1045 15.7586 11.0295 15.7451C10.9546 15.7316 10.8852 15.6965 10.83 15.6441L6.87094 11.9062C6.83277 11.8703 6.80236 11.8269 6.78157 11.7788C6.76078 11.7307 6.75006 11.6788 6.75006 11.6264C6.75006 11.574 6.76078 11.5221 6.78157 11.474C6.80236 11.4259 6.83277 11.3825 6.87094 11.3466L10.8281 7.60734C10.8833 7.5549 10.9527 7.51976 11.0276 7.50627C11.1026 7.49279 11.1799 7.50154 11.2499 7.53144C11.3199 7.56135 11.3797 7.61111 11.4218 7.67458C11.4638 7.73804 11.4864 7.81244 11.4867 7.88859V9.63797C15.6459 9.63797 16.9908 12.2461 17.2463 15.1266C17.2805 15.4884 16.8314 15.6914 16.5783 15.4266Z'
        fill={contentColor}
      />
    </Svg>
  )
}
