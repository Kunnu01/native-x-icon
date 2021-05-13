import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LockClosedIconProps {
  color?: string
  size?: IconSize
}

export function LockClosedIcon({ size = 'normal', color = COLOR.SECONDARY }: LockClosedIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M17.25 9H16.5V5.25C16.5 4.05653 16.0259 2.91193 15.182 2.06802C14.3381 1.22411 13.1935 0.75 12 0.75C10.8065 0.75 9.66193 1.22411 8.81802 2.06802C7.97411 2.91193 7.5 4.05653 7.5 5.25V9H6.75C5.95462 9.00087 5.19206 9.31722 4.62964 9.87964C4.06722 10.4421 3.75087 11.2046 3.75 12V20.25C3.75087 21.0454 4.06722 21.8079 4.62964 22.3704C5.19206 22.9328 5.95462 23.2491 6.75 23.25H17.25C18.0454 23.2491 18.8079 22.9328 19.3704 22.3704C19.9328 21.8079 20.2491 21.0454 20.25 20.25V12C20.2491 11.2046 19.9328 10.4421 19.3704 9.87964C18.8079 9.31722 18.0454 9.00087 17.25 9ZM15 9H9V5.25C9 4.45435 9.31607 3.69129 9.87868 3.12868C10.4413 2.56607 11.2044 2.25 12 2.25C12.7956 2.25 13.5587 2.56607 14.1213 3.12868C14.6839 3.69129 15 4.45435 15 5.25V9Z'
        fill={contentColor}
      />
    </Svg>
  )
}
