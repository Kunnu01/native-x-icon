import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface GlassesIconProps {
  color?: string
  size?: IconSize
}

export function GlassesIcon({ size = 'normal', color = COLOR.SECONDARY }: GlassesIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M21.75 8.625H21.2391C21.0024 8.48523 20.7508 8.37234 20.4891 8.28844C19.6641 8.01563 18.5747 7.875 17.25 7.875C15.9253 7.875 14.8359 8.01563 14.0128 8.28844C13.3538 8.50828 13.0636 8.75063 12.9698 8.84484C12.6672 8.70013 12.336 8.62501 12.0005 8.62501C11.665 8.62501 11.3338 8.70013 11.0311 8.84484C10.9373 8.75109 10.6472 8.50828 9.98812 8.28844C9.16406 8.01563 8.07469 7.875 6.75 7.875C5.42531 7.875 4.33594 8.01563 3.51281 8.28844C3.25106 8.37234 2.9995 8.48523 2.76281 8.625H2.25C2.05109 8.625 1.86032 8.70402 1.71967 8.84467C1.57902 8.98532 1.5 9.17609 1.5 9.375C1.5 9.57391 1.57902 9.76468 1.71967 9.90533C1.86032 10.046 2.05109 10.125 2.25 10.125H2.25797C2.30484 12.2559 2.55984 13.5366 3.10687 14.4483C3.44955 15.0369 3.97487 15.4977 4.60312 15.7608C5.17641 16.0064 5.87906 16.1259 6.75 16.1259C7.88203 16.1259 9.49125 15.952 10.3931 14.4492C10.8469 13.6927 11.1005 12.6825 11.1998 11.1436C11.2329 11.0579 11.2499 10.9668 11.25 10.875C11.25 10.6761 11.329 10.4853 11.4697 10.3447C11.6103 10.204 11.8011 10.125 12 10.125C12.1989 10.125 12.3897 10.204 12.5303 10.3447C12.671 10.4853 12.75 10.6761 12.75 10.875C12.7502 10.9665 12.7672 11.0572 12.8002 11.1427C12.8995 12.6816 13.1531 13.6917 13.6069 14.4483C13.9496 15.0369 14.4749 15.4977 15.1031 15.7608C15.6764 16.0064 16.3791 16.1259 17.25 16.1259C18.382 16.1259 19.9913 15.952 20.8931 14.4492C21.4402 13.5375 21.6961 12.2569 21.742 10.1259H21.75C21.9489 10.1259 22.1397 10.0469 22.2803 9.90627C22.421 9.76562 22.5 9.57485 22.5 9.37594C22.5 9.17703 22.421 8.98626 22.2803 8.84561C22.1397 8.70496 21.9489 8.62594 21.75 8.62594V8.625Z'
        fill={contentColor}
      />
    </Svg>
  )
}
