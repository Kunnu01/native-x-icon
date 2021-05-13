import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface CaretForwardCircleIconProps {
  color?: string
  size?: IconSize
}

export function CaretForwardCircleIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: CaretForwardCircleIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M21.75 12C21.75 6.61547 17.3845 2.25 12 2.25C6.61547 2.25 2.25 6.61547 2.25 12C2.25 17.3845 6.61547 21.75 12 21.75C17.3845 21.75 21.75 17.3845 21.75 12ZM9.9375 15.4753V8.52469C9.93761 8.38225 9.97828 8.2428 10.0547 8.12263C10.1312 8.00246 10.2403 7.90655 10.3693 7.84612C10.4983 7.78569 10.6418 7.76323 10.7831 7.78138C10.9243 7.79952 11.0575 7.85753 11.167 7.94859L15.3431 11.4234C15.4277 11.4938 15.4958 11.582 15.5425 11.6816C15.5892 11.7812 15.6135 11.8899 15.6135 12C15.6135 12.1101 15.5892 12.2188 15.5425 12.3184C15.4958 12.418 15.4277 12.5062 15.3431 12.5766L11.167 16.0514C11.0575 16.1425 10.9243 16.2005 10.7831 16.2186C10.6418 16.2368 10.4983 16.2143 10.3693 16.1539C10.2403 16.0934 10.1312 15.9975 10.0547 15.8774C9.97828 15.7572 9.93761 15.6177 9.9375 15.4753Z'
        fill={contentColor}
      />
    </Svg>
  )
}
