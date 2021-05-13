import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface DiceIconProps {
  color?: string
  size?: IconSize
}

export function DiceIcon({ size = 'normal', color = COLOR.SECONDARY }: DiceIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M20.6662 6.06444L13.5075 1.90428C13.0493 1.63874 12.5292 1.4989 11.9997 1.4989C11.4702 1.4989 10.9501 1.63874 10.492 1.90428L3.3337 6.06444C3.30551 6.08098 3.28213 6.10461 3.26588 6.13298C3.24964 6.16134 3.24109 6.19347 3.24109 6.22616C3.24109 6.25885 3.24964 6.29097 3.26588 6.31934C3.28213 6.3477 3.30551 6.37133 3.3337 6.38787L11.9062 11.4307C11.935 11.4477 11.9679 11.4566 12.0014 11.4566C12.0348 11.4566 12.0677 11.4477 12.0965 11.4307L20.6671 6.38787C20.6953 6.37125 20.7186 6.34755 20.7348 6.31914C20.7509 6.29072 20.7594 6.25858 20.7593 6.22589C20.7592 6.1932 20.7506 6.1611 20.7342 6.13278C20.7179 6.10446 20.6944 6.0809 20.6662 6.06444ZM12 7.12522C11.3789 7.12522 10.875 6.78959 10.875 6.37522C10.875 5.96084 11.3789 5.62522 12 5.62522C12.621 5.62522 13.125 5.96084 13.125 6.37522C13.125 6.78959 12.621 7.12522 12 7.12522Z'
        fill={contentColor}
      />
      <Path
        d='M11.1562 12.694L2.53125 7.66294C2.50276 7.64649 2.47044 7.63783 2.43755 7.63782C2.40465 7.63781 2.37233 7.64646 2.34383 7.66289C2.31534 7.67932 2.29166 7.70297 2.27519 7.73144C2.25872 7.75992 2.25003 7.79223 2.25 7.82512V15.9776C2.25071 16.3704 2.35424 16.7562 2.55029 17.0966C2.74634 17.4369 3.02808 17.7201 3.3675 17.9178L10.9688 22.4754C10.9972 22.4919 11.0296 22.5006 11.0625 22.5006C11.0953 22.5006 11.1277 22.4919 11.1562 22.4755C11.1847 22.4591 11.2083 22.4354 11.2248 22.4069C11.2413 22.3785 11.25 22.3461 11.25 22.3132V12.8562C11.25 12.8233 11.2413 12.791 11.2248 12.7626C11.2084 12.7341 11.1847 12.7105 11.1562 12.694ZM4.5 17.2498C4.08562 17.2498 3.75 16.7459 3.75 16.1248C3.75 15.5037 4.08562 14.9998 4.5 14.9998C4.91438 14.9998 5.25 15.5037 5.25 16.1248C5.25 16.7459 4.91438 17.2498 4.5 17.2498ZM9 15.7498C8.58563 15.7498 8.25 15.2459 8.25 14.6248C8.25 14.0037 8.58563 13.4998 9 13.4998C9.41437 13.4998 9.75 14.0037 9.75 14.6248C9.75 15.2459 9.41437 15.7498 9 15.7498Z'
        fill={contentColor}
      />
      <Path
        d='M21.4687 7.66489L12.8437 12.7297C12.8153 12.7461 12.7917 12.7697 12.7753 12.7981C12.7588 12.8265 12.7501 12.8587 12.75 12.8915V22.3129C12.75 22.3458 12.7587 22.3781 12.7752 22.4065C12.7917 22.435 12.8153 22.4587 12.8438 22.4751C12.8723 22.4915 12.9047 22.5002 12.9375 22.5002C12.9704 22.5002 13.0028 22.4915 13.0312 22.475L20.632 17.9174C20.9714 17.7198 21.2531 17.4369 21.4493 17.0967C21.6454 16.7565 21.7491 16.3709 21.75 15.9782V7.82849C21.7502 7.79547 21.7417 7.76298 21.7253 7.73431C21.709 7.70564 21.6853 7.6818 21.6568 7.66519C21.6282 7.64859 21.5958 7.63982 21.5628 7.63977C21.5298 7.63972 21.4973 7.64838 21.4687 7.66489ZM15 19.8754C14.5856 19.8754 14.25 19.3715 14.25 18.7504C14.25 18.1293 14.5856 17.6254 15 17.6254C15.4144 17.6254 15.75 18.1293 15.75 18.7504C15.75 19.3715 15.4144 19.8754 15 19.8754ZM15 15.7504C14.5856 15.7504 14.25 15.2465 14.25 14.6254C14.25 14.0043 14.5856 13.5004 15 13.5004C15.4144 13.5004 15.75 14.0043 15.75 14.6254C15.75 15.2465 15.4144 15.7504 15 15.7504ZM19.5 17.2504C19.0856 17.2504 18.75 16.7465 18.75 16.1254C18.75 15.5043 19.0856 15.0004 19.5 15.0004C19.9144 15.0004 20.25 15.5043 20.25 16.1254C20.25 16.7465 19.9144 17.2504 19.5 17.2504ZM19.5 13.1254C19.0856 13.1254 18.75 12.6215 18.75 12.0004C18.75 11.3793 19.0856 10.8754 19.5 10.8754C19.9144 10.8754 20.25 11.3793 20.25 12.0004C20.25 12.6215 19.9144 13.1254 19.5 13.1254Z'
        fill={contentColor}
      />
    </Svg>
  )
}
