import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface KeyOutlineIconProps {
  color?: string
  size?: IconSize
}

export function KeyOutlineIcon({ size = 'normal', color = COLOR.SECONDARY }: KeyOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M10.2234 7.83609C10.2234 8.44547 10.2234 9.03609 10.4156 9.58922C8.39531 11.9611 3.06094 18.2283 2.56406 18.7064C2.46531 18.795 2.38631 18.9034 2.3322 19.0245C2.27809 19.1457 2.25009 19.2769 2.25 19.4095C2.25 19.808 2.49375 20.1923 2.7 20.408C3.00937 20.7314 4.33125 21.9548 4.575 21.7205C5.29687 21.0173 5.44219 20.8298 5.7375 20.5392C6.18281 20.1033 5.69062 19.2127 5.84531 18.8517C6 18.4908 6.16406 18.4205 6.43125 18.3642C6.69844 18.308 7.17187 18.5002 7.54219 18.5048C7.93125 18.5095 8.14219 18.3455 8.43281 18.0736C8.66719 17.858 8.83594 17.6564 8.84063 17.3423C8.85 16.9205 8.24063 16.3627 8.69531 15.9173C9.15 15.472 9.80625 16.208 10.2891 16.1517C10.7719 16.0955 11.3578 15.4252 11.4188 15.1392C11.4797 14.8533 10.8703 14.1173 10.9641 13.7002C10.9969 13.5595 11.2828 13.2314 11.4984 13.1845C11.7141 13.1377 12.6703 13.508 12.8859 13.4611C13.1484 13.4048 13.4531 13.1283 13.7016 12.9736C14.4281 13.2877 15.0891 13.4142 15.9375 13.4142C19.1484 13.4142 21.75 10.9111 21.75 7.82672C21.75 4.74234 19.1484 2.25 15.9375 2.25C12.7266 2.25 10.2234 4.75172 10.2234 7.83609ZM18.75 6.75C18.75 7.04667 18.662 7.33668 18.4972 7.58336C18.3324 7.83003 18.0981 8.02229 17.824 8.13582C17.5499 8.24935 17.2483 8.27906 16.9574 8.22118C16.6664 8.1633 16.3991 8.02044 16.1893 7.81066C15.9796 7.60088 15.8367 7.33361 15.7788 7.04264C15.7209 6.75166 15.7506 6.45006 15.8642 6.17598C15.9777 5.90189 16.17 5.66762 16.4166 5.5028C16.6633 5.33797 16.9533 5.25 17.25 5.25C17.6478 5.25 18.0294 5.40804 18.3107 5.68934C18.592 5.97064 18.75 6.35218 18.75 6.75Z'
        stroke={contentColor}
        stroke-linejoin='round'
      />
    </Svg>
  )
}