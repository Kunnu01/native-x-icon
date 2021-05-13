import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface RoseIconProps {
  color?: string
  size?: IconSize
}

export function RoseIcon({ size = 'normal', color = COLOR.SECONDARY }: RoseIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M20.1352 5.60114C20.0526 5.46977 19.9314 5.36722 19.7882 5.30762C19.645 5.24801 19.4868 5.23429 19.3355 5.26832C18.4617 5.46473 17.5983 5.6902 16.77 5.93489C15.1266 6.42192 13.5202 7.05614 11.7145 7.93129C10.8417 8.35551 10.4958 8.55707 9.46453 9.15614L9.25359 9.28129C7.70906 10.1719 6.5775 11.1563 5.79469 12.2949C4.93547 13.5418 4.5 15 4.5 16.6238C4.5 18.5335 5.23641 20.2379 6.57375 21.4224C7.92188 22.6182 9.79969 23.25 12 23.25C14.1919 23.25 16.073 22.5783 17.4375 21.308C18.7664 20.0729 19.5 18.3366 19.5 16.4194C19.5 15.2475 19.2098 14.2163 18.9295 13.2216C18.3394 11.1268 17.8298 9.31739 20.0878 6.46551C20.1841 6.34399 20.2403 6.19563 20.2488 6.04084C20.2573 5.88605 20.2176 5.73244 20.1352 5.60114Z'
        fill={contentColor}
      />
      <Path
        d='M10.2656 5.60312C7.89652 4.31546 4.75589 3.78156 4.62324 3.75953C4.45064 3.73121 4.27358 3.76411 4.12267 3.85253C3.97176 3.94096 3.85651 4.07934 3.79683 4.24375C3.75052 4.37888 3.7426 4.52421 3.77397 4.66357C3.80533 4.80293 3.87475 4.93086 3.97449 5.03312C5.46699 6.61656 5.5148 8.25765 5.31746 9.93765C5.31232 9.98092 5.32085 10.0247 5.34187 10.0629C5.36289 10.101 5.39533 10.1317 5.43464 10.1505C5.47379 10.1691 5.51777 10.1751 5.56046 10.1675C5.60315 10.1599 5.64242 10.1392 5.67277 10.1083C6.44105 9.33437 7.37761 8.63078 8.50402 7.98062L8.71402 7.85875C9.74996 7.25546 10.1357 7.03047 11.0625 6.58093L11.1886 6.52C11.2177 6.506 11.2428 6.48468 11.2613 6.45812C11.2798 6.43155 11.2912 6.40065 11.2942 6.36841C11.2972 6.33617 11.2918 6.3037 11.2786 6.27416C11.2653 6.24462 11.2446 6.21902 11.2186 6.19984C10.9146 5.9798 10.5963 5.78045 10.2656 5.60312Z'
        fill={contentColor}
      />
      <Path
        d='M10.9811 4.28672C11.1423 4.37437 11.3134 4.47422 11.492 4.58156C11.9873 4.88519 12.4515 5.23672 12.8781 5.63109C12.9045 5.65574 12.9376 5.67222 12.9732 5.67854C13.0087 5.68486 13.0454 5.68075 13.0787 5.66672C14.1447 5.21642 15.2346 4.82521 16.3436 4.49484C16.5623 4.43016 16.7823 4.36766 17.0036 4.30734C17.0302 4.30003 17.0548 4.28693 17.0758 4.26898C17.0968 4.25104 17.1135 4.22868 17.1248 4.20352C17.1362 4.17836 17.1418 4.15101 17.1413 4.12342C17.1409 4.09582 17.1343 4.06868 17.1222 4.04391C16.7345 3.255 16.4345 2.68922 16.412 2.6475C16.3481 2.52746 16.2527 2.42706 16.1361 2.35704C16.0196 2.28702 15.8861 2.25002 15.7501 2.25C15.6606 2.25 14.1901 2.26688 12.1469 3.24844C11.7226 3.45272 11.3096 3.67977 10.9098 3.92859C10.8817 3.9459 10.8586 3.97034 10.843 3.99942C10.8273 4.02851 10.8196 4.06122 10.8207 4.09424C10.8217 4.12726 10.8314 4.15941 10.8489 4.18745C10.8664 4.21549 10.891 4.23842 10.9201 4.25391L10.9811 4.28672Z'
        fill={contentColor}
      />
      <Path
        d='M9.81219 2.85003C10.1544 2.62644 10.5031 2.41785 10.8552 2.22613C10.869 2.21861 10.8807 2.20774 10.8892 2.19452C10.8977 2.18129 10.9027 2.16614 10.9039 2.15045C10.905 2.13477 10.9021 2.11905 10.8956 2.10475C10.8891 2.09045 10.879 2.07803 10.8664 2.06863C9.64766 1.15128 8.53532 0.803002 8.46876 0.783314C8.3202 0.73795 8.16121 0.739833 8.01377 0.788701C7.86633 0.83757 7.73769 0.931013 7.64563 1.05613C7.30106 1.53498 6.99868 2.04282 6.74188 2.57394C6.73582 2.5864 6.73259 2.60006 6.73243 2.61392C6.73227 2.62778 6.73519 2.6415 6.74097 2.6541C6.74675 2.6667 6.75526 2.67785 6.76587 2.68677C6.77649 2.69569 6.78895 2.70214 6.80235 2.70566C7.44032 2.873 8.18048 3.09425 8.94032 3.3755C8.95406 3.38061 8.96881 3.38242 8.98339 3.38079C8.99796 3.37917 9.01195 3.37414 9.02422 3.36613L9.81219 2.85003Z'
        fill={contentColor}
      />
    </Svg>
  )
}
