import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LogoIonicIconProps {
  color?: string
  size?: IconSize
}

export function LogoIonicIcon({ size = 'normal', color = COLOR.SECONDARY }: LogoIonicIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12.0001 7.21368C11.0535 7.21368 10.1282 7.49437 9.34113 8.02026C8.55408 8.54614 7.94066 9.2936 7.57842 10.1681C7.21619 11.0426 7.12141 12.0049 7.30607 12.9333C7.49074 13.8617 7.94656 14.7145 8.61588 15.3838C9.28521 16.0531 10.138 16.5089 11.0664 16.6936C11.9947 16.8783 12.957 16.7835 13.8316 16.4212C14.7061 16.059 15.4535 15.4456 15.9794 14.6585C16.5053 13.8715 16.786 12.9462 16.786 11.9996C16.7844 10.7308 16.2796 9.51442 15.3824 8.61723C14.4853 7.72005 13.2689 7.2153 12.0001 7.21368Z'
        fill={contentColor}
      />
      <Path
        d='M18.8714 7.6395C20.0757 7.6395 21.052 6.6632 21.052 5.45888C21.052 4.25456 20.0757 3.27826 18.8714 3.27826C17.6671 3.27826 16.6908 4.25456 16.6908 5.45888C16.6908 6.6632 17.6671 7.6395 18.8714 7.6395Z'
        fill={contentColor}
      />
      <Path
        d='M21.5559 7.64953L21.4645 7.44891L21.3188 7.61391C20.9616 8.0195 20.5098 8.33058 20.0034 8.51953L19.8628 8.5711L19.92 8.70844C20.3558 9.75086 20.5795 10.8697 20.5781 11.9995C20.5781 16.7302 16.7297 20.5777 12 20.5777C7.27031 20.5777 3.42188 16.7302 3.42188 11.9995C3.42188 7.26891 7.26938 3.42141 12 3.42141C13.2722 3.41875 14.5287 3.70231 15.6764 4.2511L15.8109 4.31203L15.8695 4.17516C16.0832 3.67894 16.4158 3.24298 16.838 2.90578L17.01 2.76844L16.8145 2.67141C15.3277 1.89814 13.6759 1.49608 12 1.49953C6.21047 1.49953 1.5 6.21 1.5 11.9995C1.5 17.7891 6.21047 22.4995 12 22.4995C17.7895 22.4995 22.5 17.7891 22.5 11.9995C22.5025 10.4984 22.1804 9.01456 21.5559 7.64953Z'
        fill={contentColor}
      />
    </Svg>
  )
}