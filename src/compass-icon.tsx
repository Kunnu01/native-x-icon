import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface CompassIconProps {
  color?: string
  size?: IconSize
}

export function CompassIcon({ size = 'normal', color = COLOR.SECONDARY }: CompassIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 13.125C12.6213 13.125 13.125 12.6213 13.125 12C13.125 11.3787 12.6213 10.875 12 10.875C11.3787 10.875 10.875 11.3787 10.875 12C10.875 12.6213 11.3787 13.125 12 13.125Z'
        fill={contentColor}
      />
      <Path
        d='M12 2.25C6.62391 2.25 2.25 6.62391 2.25 12C2.25 17.3761 6.62391 21.75 12 21.75C17.3761 21.75 21.75 17.3761 21.75 12C21.75 6.62391 17.3761 2.25 12 2.25ZM16.9252 7.56234L14.7277 13.0561C14.5768 13.4334 14.3508 13.7761 14.0635 14.0635C13.7761 14.3508 13.4334 14.5768 13.0561 14.7277L7.56234 16.9252C7.4942 16.9524 7.41954 16.9591 7.34763 16.9444C7.27573 16.9296 7.20973 16.8941 7.15782 16.8422C7.10592 16.7903 7.07039 16.7243 7.05564 16.6524C7.04089 16.5805 7.04757 16.5058 7.07484 16.4377L9.27234 10.9439C9.42323 10.5666 9.6492 10.2239 9.93654 9.93654C10.2239 9.6492 10.5666 9.42323 10.9439 9.27234L16.4377 7.07484C16.5058 7.04757 16.5805 7.04089 16.6524 7.05564C16.7243 7.07039 16.7903 7.10592 16.8422 7.15782C16.8941 7.20973 16.9296 7.27573 16.9444 7.34763C16.9591 7.41954 16.9524 7.4942 16.9252 7.56234Z'
        fill={contentColor}
      />
    </Svg>
  )
}
