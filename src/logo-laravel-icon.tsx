import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LogoLaravelIconProps {
  color?: string
  size?: IconSize
}

export function LogoLaravelIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: LogoLaravelIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <G clip-path='url(#clip0)'>
        <Path
          d='M23.6986 10.9978C23.5448 10.8323 22.4414 9.48422 21.8466 8.75766C21.5302 8.37141 21.2803 8.06625 21.1753 7.93969L21.1669 7.92938L21.1575 7.91953C20.9128 7.64625 20.565 7.33313 20.0428 7.33313C19.9579 7.33422 19.8732 7.34111 19.7892 7.35375C19.7719 7.35609 19.7541 7.35891 19.7353 7.36078C19.6205 7.37344 19.2637 7.43109 18.4162 7.57078C17.76 7.67812 16.7705 7.84125 16.6205 7.85531L16.5872 7.85812L16.5548 7.86422C16.0861 7.94766 15.7758 8.15578 15.638 8.4825C15.5653 8.655 15.487 9.00516 15.7758 9.41344C15.8475 9.5175 16.0959 9.86156 16.523 10.4527C16.807 10.8464 17.1262 11.288 17.4019 11.6714L12.1828 12.8906L7.06219 4.50234L7.05281 4.48641L7.04203 4.47094L7.0214 4.44047C6.81187 4.13297 6.55125 3.75 5.79844 3.75C5.74547 3.75 5.69015 3.75 5.62828 3.75516C5.41265 3.76688 4.62422 3.82875 3.71156 3.90094C2.70422 3.98016 1.32562 4.08844 1.14656 4.09312H1.11234L1.07531 4.09688C0.646873 4.13859 0.336092 4.3125 0.151873 4.6125C-0.155158 5.11359 0.0853108 5.67609 0.164061 5.86078C0.32203 6.23438 1.76062 9.26719 3.02953 11.9442C3.87328 13.7227 4.74422 15.5616 4.81547 15.7247C4.94076 16.0294 5.15527 16.2891 5.43083 16.4697C5.70639 16.6503 6.03012 16.7434 6.35953 16.7367C6.51499 16.736 6.66993 16.7187 6.82172 16.6852H6.83156L6.84094 16.6828C7.49062 16.5244 9.55172 16.0013 11.0222 15.6239C11.1112 15.7795 11.205 15.9441 11.3034 16.1133C12.3314 17.918 13.08 19.2234 13.3266 19.5567C13.4531 19.7344 13.8281 20.25 14.5341 20.25C14.79 20.25 15.0244 20.1844 15.2719 20.1145L15.3436 20.0944H15.3464H15.3492C15.8428 19.9538 22.4128 17.6494 22.7494 17.4998L22.7597 17.4952C23.0147 17.3822 23.4 17.2116 23.5181 16.7733C23.5955 16.4864 23.5266 16.1953 23.3128 15.908L23.3095 15.9037L23.3062 15.8995C23.2664 15.848 23.1187 15.6553 22.9186 15.3886C22.4906 14.8228 21.7992 13.9087 21.1917 13.1133C22.0059 12.9023 23.0105 12.6394 23.2252 12.5719C23.7628 12.4111 23.9255 12.0708 23.9752 11.8814C24.0122 11.7337 24.0605 11.3564 23.6986 10.9978ZM8.69859 13.7255C7.86375 13.9209 7.28203 14.0573 6.9225 14.1427C6.60984 13.5173 5.99719 12.2841 5.39906 11.0803C4.005 8.27156 3.285 6.82547 2.90625 6.06937L3.28828 6.03656C3.91359 5.98266 4.77 5.90906 5.24672 5.86922C6.03234 7.19391 8.73047 11.7427 9.76078 13.477L8.69859 13.7255ZM17.0498 16.8492C15.915 17.2242 15.3 17.4291 14.9677 17.5402C14.6723 17.0555 14.0227 15.9689 13.4456 15L18.8691 13.6181C19.1034 13.9373 19.552 14.5425 20.4375 15.7242C19.5905 16.0073 18.1781 16.4752 17.0498 16.8492ZM19.6687 11.1478L18.555 9.66984C19.1958 9.55781 19.5647 9.49312 19.7808 9.45422L20.3433 10.1517L20.903 10.8464C20.5186 10.9397 20.0714 11.0489 19.6687 11.1478Z'
          fill={contentColor}
        />
      </G>
      <Defs>
        <ClipPath id='clip0'>
          <Rect width='24' height='24' fill={contentColor} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}