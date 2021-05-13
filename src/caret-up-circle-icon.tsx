import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface CaretUpCircleIconProps {
  color?: string
  size?: IconSize
}

export function CaretUpCircleIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: CaretUpCircleIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 2.25C6.61547 2.25 2.25 6.61547 2.25 12C2.25 17.3845 6.61547 21.75 12 21.75C17.3845 21.75 21.75 17.3845 21.75 12C21.75 6.61547 17.3845 2.25 12 2.25ZM15.4753 14.0625H8.52469C8.38225 14.0624 8.2428 14.0217 8.12263 13.9453C8.00246 13.8688 7.90655 13.7597 7.84612 13.6307C7.78569 13.5017 7.76323 13.3582 7.78138 13.2169C7.79952 13.0757 7.85753 12.9425 7.94859 12.833L11.4234 8.65687C11.4938 8.57227 11.582 8.5042 11.6816 8.45748C11.7812 8.41076 11.8899 8.38654 12 8.38654C12.1101 8.38654 12.2188 8.41076 12.3184 8.45748C12.418 8.5042 12.5062 8.57227 12.5766 8.65687L16.0514 12.833C16.1425 12.9425 16.2005 13.0757 16.2186 13.2169C16.2368 13.3582 16.2143 13.5017 16.1539 13.6307C16.0934 13.7597 15.9975 13.8688 15.8774 13.9453C15.7572 14.0217 15.6177 14.0624 15.4753 14.0625Z'
        fill={contentColor}
      />
    </Svg>
  )
}
