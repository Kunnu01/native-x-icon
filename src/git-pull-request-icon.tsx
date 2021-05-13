import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface GitPullRequestIconProps {
  color?: string
  size?: IconSize
}

export function GitPullRequestIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: GitPullRequestIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M9 4.49959C9.00029 3.97291 8.86193 3.45544 8.59881 2.99919C8.33569 2.54294 7.9571 2.16401 7.50109 1.90047C7.04508 1.63694 6.52773 1.49811 6.00105 1.49792C5.47436 1.49774 4.95692 1.63622 4.50072 1.89943C4.04453 2.16264 3.66567 2.54132 3.40224 2.99738C3.1388 3.45345 3.00007 3.97083 3 4.49751C2.99993 5.02419 3.13851 5.54161 3.40182 5.99774C3.66513 6.45388 4.04388 6.83266 4.5 7.096V16.9032C3.92808 17.2334 3.48109 17.7431 3.22836 18.3532C2.97564 18.9633 2.9313 19.6398 3.10222 20.2777C3.27315 20.9156 3.64978 21.4793 4.17372 21.8813C4.69765 22.2833 5.3396 22.5013 6 22.5013C6.6604 22.5013 7.30235 22.2833 7.82628 21.8813C8.35022 21.4793 8.72685 20.9156 8.89778 20.2777C9.0687 19.6398 9.02436 18.9633 8.77164 18.3532C8.51891 17.7431 8.07193 17.2334 7.5 16.9032V7.096C7.95581 6.83284 8.33437 6.45439 8.59766 5.99865C8.86095 5.54291 8.99971 5.02592 9 4.49959ZM6 2.99959C6.29667 2.99959 6.58668 3.08757 6.83336 3.25239C7.08003 3.41721 7.27229 3.65148 7.38582 3.92557C7.49935 4.19966 7.52906 4.50126 7.47118 4.79223C7.4133 5.0832 7.27044 5.35048 7.06066 5.56025C6.85088 5.77003 6.58361 5.91289 6.29264 5.97077C6.00167 6.02865 5.70006 5.99895 5.42598 5.88541C5.15189 5.77188 4.91762 5.57962 4.7528 5.33295C4.58797 5.08628 4.5 4.79627 4.5 4.49959C4.5 4.10177 4.65804 3.72024 4.93934 3.43893C5.22065 3.15763 5.60218 2.99959 6 2.99959ZM6 20.9996C5.70333 20.9996 5.41332 20.9116 5.16665 20.7468C4.91997 20.582 4.72771 20.3477 4.61418 20.0736C4.50065 19.7995 4.47095 19.4979 4.52882 19.207C4.5867 18.916 4.72956 18.6487 4.93934 18.4389C5.14912 18.2292 5.41639 18.0863 5.70737 18.0284C5.99834 17.9705 6.29994 18.0002 6.57403 18.1138C6.84812 18.2273 7.08238 18.4196 7.24721 18.6662C7.41203 18.9129 7.5 19.2029 7.5 19.4996C7.5 19.8974 7.34197 20.2789 7.06066 20.5603C6.77936 20.8416 6.39783 20.9996 6 20.9996Z'
        fill={contentColor}
      />
      <Path
        d='M19.5001 16.9032V7.31215C19.4988 6.16879 19.0441 5.07261 18.2356 4.26413C17.4271 3.45564 16.3309 3.00089 15.1876 2.99965H14.2501V1.49965C14.25 1.35137 14.206 1.20643 14.1236 1.08316C14.0411 0.959884 13.924 0.863808 13.787 0.807071C13.65 0.750334 13.4993 0.735482 13.3539 0.764392C13.2084 0.793303 13.0748 0.864677 12.9699 0.969497L9.96992 3.9695C9.82938 4.11013 9.75043 4.30083 9.75043 4.49965C9.75043 4.69848 9.82938 4.88917 9.96992 5.02981L12.9699 8.02981C13.0748 8.13463 13.2084 8.206 13.3539 8.23491C13.4993 8.26382 13.65 8.24897 13.787 8.19223C13.924 8.1355 14.0411 8.03942 14.1236 7.91615C14.206 7.79288 14.25 7.64794 14.2501 7.49965V5.99965H15.1876C15.5357 5.99965 15.8695 6.13793 16.1156 6.38407C16.3618 6.63022 16.5001 6.96406 16.5001 7.31215V16.9032C15.9281 17.2334 15.4812 17.7431 15.2284 18.3533C14.9757 18.9634 14.9314 19.6399 15.1023 20.2778C15.2732 20.9157 15.6499 21.4794 16.1738 21.8814C16.6977 22.2834 17.3397 22.5013 18.0001 22.5013C18.6605 22.5013 19.3024 22.2834 19.8264 21.8814C20.3503 21.4794 20.7269 20.9157 20.8978 20.2778C21.0688 19.6399 21.0244 18.9634 20.7717 18.3533C20.519 17.7431 20.072 17.2334 19.5001 16.9032ZM18.0001 20.9997C17.7034 20.9997 17.4134 20.9117 17.1667 20.7469C16.92 20.582 16.7278 20.3478 16.6143 20.0737C16.5007 19.7996 16.471 19.498 16.5289 19.207C16.5868 18.916 16.7296 18.6488 16.9394 18.439C17.1492 18.2292 17.4165 18.0864 17.7074 18.0285C17.9984 17.9706 18.3 18.0003 18.5741 18.1138C18.8482 18.2274 19.0824 18.4196 19.2473 18.6663C19.4121 18.913 19.5001 19.203 19.5001 19.4997C19.5001 19.8975 19.342 20.279 19.0607 20.5603C18.7794 20.8416 18.3979 20.9997 18.0001 20.9997Z'
        fill={contentColor}
      />
    </Svg>
  )
}
