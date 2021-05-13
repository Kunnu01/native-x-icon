import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface InformationCircleIconProps {
  color?: string
  size?: IconSize
}

export function InformationCircleIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: InformationCircleIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 2.625C6.83063 2.625 2.625 6.83063 2.625 12C2.625 17.1694 6.83063 21.375 12 21.375C17.1694 21.375 21.375 17.1694 21.375 12C21.375 6.83063 17.1694 2.625 12 2.625ZM12 6.46875C12.241 6.46875 12.4767 6.54023 12.6771 6.67415C12.8775 6.80806 13.0337 6.99841 13.126 7.2211C13.2182 7.4438 13.2424 7.68885 13.1953 7.92527C13.1483 8.16168 13.0322 8.37884 12.8618 8.54929C12.6913 8.71973 12.4742 8.83581 12.2378 8.88283C12.0014 8.92986 11.7563 8.90572 11.5336 8.81348C11.3109 8.72123 11.1206 8.56502 10.9866 8.3646C10.8527 8.16418 10.7812 7.92855 10.7812 7.6875C10.7812 7.36427 10.9097 7.05427 11.1382 6.82571C11.3668 6.59715 11.6768 6.46875 12 6.46875ZM14.25 17.0625H10.125C9.92609 17.0625 9.73532 16.9835 9.59467 16.8428C9.45402 16.7022 9.375 16.5114 9.375 16.3125C9.375 16.1136 9.45402 15.9228 9.59467 15.7822C9.73532 15.6415 9.92609 15.5625 10.125 15.5625H11.4375V11.4375H10.6875C10.4886 11.4375 10.2978 11.3585 10.1572 11.2178C10.0165 11.0772 9.9375 10.8864 9.9375 10.6875C9.9375 10.4886 10.0165 10.2978 10.1572 10.1572C10.2978 10.0165 10.4886 9.9375 10.6875 9.9375H12.1875C12.3864 9.9375 12.5772 10.0165 12.7178 10.1572C12.8585 10.2978 12.9375 10.4886 12.9375 10.6875V15.5625H14.25C14.4489 15.5625 14.6397 15.6415 14.7803 15.7822C14.921 15.9228 15 16.1136 15 16.3125C15 16.5114 14.921 16.7022 14.7803 16.8428C14.6397 16.9835 14.4489 17.0625 14.25 17.0625Z'
        fill={contentColor}
      />
    </Svg>
  )
}
