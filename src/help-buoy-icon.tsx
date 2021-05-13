import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface HelpBuoyIconProps {
  color?: string
  size?: IconSize
}

export function HelpBuoyIcon({ size = 'normal', color = COLOR.SECONDARY }: HelpBuoyIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M19.4245 4.5751C18.4512 3.59221 17.2933 2.81131 16.0173 2.27725C14.7414 1.7432 13.3724 1.46652 11.9892 1.46312C10.606 1.45971 9.23573 1.72965 7.95714 2.25741C6.67856 2.78518 5.51685 3.56038 4.53876 4.53847C3.56067 5.51656 2.78547 6.67826 2.25771 7.95685C1.72994 9.23544 1.46001 10.6057 1.46341 11.9889C1.46682 13.3722 1.74349 14.7411 2.27754 16.0171C2.8116 17.293 3.5925 18.4509 4.5754 19.4242C5.54866 20.4071 6.70654 21.188 7.98251 21.722C9.25849 22.2561 10.6274 22.5327 12.0106 22.5361C13.3939 22.5396 14.7641 22.2696 16.0427 21.7419C17.3213 21.2141 18.483 20.4389 19.4611 19.4608C20.4392 18.4827 21.2144 17.321 21.7421 16.0424C22.2699 14.7638 22.5398 13.3936 22.5364 12.0103C22.533 10.6271 22.2564 9.25819 21.7223 7.98222C21.1883 6.70625 20.4074 5.54837 19.4245 4.5751ZM9.00602 12.1956C8.96624 11.5868 9.11297 10.9804 9.42667 10.4573C9.74036 9.93406 10.2061 9.51893 10.7618 9.26722C11.3174 9.01551 11.9367 8.93918 12.5368 9.04841C13.137 9.15765 13.6896 9.44725 14.121 9.87861C14.5523 10.31 14.8419 10.8626 14.9511 11.4627C15.0604 12.0629 14.9841 12.6821 14.7323 13.2378C14.4806 13.7935 14.0655 14.2592 13.5423 14.5729C13.0191 14.8866 12.4127 15.0333 11.804 14.9935C11.0778 14.9454 10.3937 14.6351 9.87908 14.1205C9.36443 13.6058 9.05418 12.9218 9.00602 12.1956ZM20.256 9.07182L15.7387 9.34557C15.7078 9.3472 15.6769 9.34126 15.6488 9.32827C15.6207 9.31529 15.5962 9.29564 15.5774 9.27104C15.3341 8.95221 15.0492 8.66734 14.7304 8.42401C14.7058 8.40522 14.6862 8.38071 14.6732 8.35261C14.6602 8.32452 14.6542 8.29367 14.6559 8.26276L14.9296 3.74542C14.9313 3.71597 14.9399 3.68734 14.9547 3.66184C14.9695 3.63635 14.9901 3.61471 15.0149 3.59868C15.0396 3.58265 15.0678 3.57268 15.0972 3.56959C15.1265 3.5665 15.1561 3.57037 15.1837 3.58088C16.3763 4.03517 17.4593 4.73664 18.3615 5.6392C19.2637 6.54176 19.9648 7.625 20.4187 8.81776C20.4292 8.84531 20.4331 8.87495 20.43 8.90428C20.4269 8.93361 20.4169 8.96179 20.4009 8.98654C20.3849 9.0113 20.3632 9.03192 20.3377 9.04674C20.3122 9.06155 20.2836 9.07015 20.2541 9.07182H20.256ZM9.07211 3.74542L9.34586 8.26276C9.34749 8.29367 9.34155 8.32452 9.32857 8.35261C9.31558 8.38071 9.29593 8.40522 9.27133 8.42401C8.9525 8.66734 8.66764 8.95221 8.4243 9.27104C8.40551 9.29564 8.381 9.31529 8.35291 9.32827C8.32481 9.34126 8.29396 9.3472 8.26305 9.34557L3.74571 9.07182C3.71627 9.07015 3.68763 9.06155 3.66214 9.04674C3.63664 9.03192 3.615 9.0113 3.59897 8.98654C3.58294 8.96179 3.57297 8.93361 3.56988 8.90428C3.56679 8.87495 3.57066 8.84531 3.58118 8.81776C4.03524 7.62482 4.73661 6.54146 5.63918 5.63889C6.54176 4.73631 7.62511 4.03495 8.81805 3.58088C8.8456 3.57037 8.87525 3.5665 8.90457 3.56959C8.9339 3.57268 8.96208 3.58265 8.98684 3.59868C9.01159 3.61471 9.03221 3.63635 9.04703 3.66184C9.06185 3.68734 9.07044 3.71597 9.07211 3.74542ZM3.74571 14.9274L8.26305 14.6537C8.29396 14.6521 8.32481 14.658 8.35291 14.671C8.381 14.684 8.40551 14.7036 8.4243 14.7282C8.66764 15.0471 8.9525 15.3319 9.27133 15.5753C9.29593 15.594 9.31558 15.6186 9.32857 15.6467C9.34155 15.6748 9.34749 15.7056 9.34586 15.7365L9.07211 20.2539C9.07044 20.2833 9.06185 20.3119 9.04703 20.3374C9.03221 20.3629 9.01159 20.3846 8.98684 20.4006C8.96208 20.4166 8.9339 20.4266 8.90457 20.4297C8.87525 20.4328 8.8456 20.4289 8.81805 20.4184C7.62511 19.9643 6.54176 19.263 5.63918 18.3604C4.73661 17.4578 4.03524 16.3745 3.58118 15.1815C3.57066 15.154 3.56679 15.1243 3.56988 15.095C3.57297 15.0657 3.58294 15.0375 3.59897 15.0127C3.615 14.988 3.63664 14.9674 3.66214 14.9525C3.68763 14.9377 3.71627 14.9291 3.74571 14.9274ZM14.9277 20.2539L14.654 15.7365C14.6524 15.7056 14.6583 15.6748 14.6713 15.6467C14.6843 15.6186 14.7039 15.594 14.7285 15.5753C15.0473 15.3319 15.3322 15.0471 15.5756 14.7282C15.5943 14.7036 15.6188 14.684 15.6469 14.671C15.675 14.658 15.7059 14.6521 15.7368 14.6537L20.2541 14.9274C20.2836 14.9291 20.3122 14.9377 20.3377 14.9525C20.3632 14.9674 20.3849 14.988 20.4009 15.0127C20.4169 15.0375 20.4269 15.0657 20.43 15.095C20.4331 15.1243 20.4292 15.154 20.4187 15.1815C19.9646 16.3745 19.2632 17.4578 18.3607 18.3604C17.4581 19.263 16.3747 19.9643 15.1818 20.4184C15.1543 20.4289 15.1246 20.4328 15.0953 20.4297C15.066 20.4266 15.0378 20.4166 15.013 20.4006C14.9883 20.3846 14.9676 20.3629 14.9528 20.3374C14.938 20.3119 14.9294 20.2833 14.9277 20.2539Z'
        fill={contentColor}
      />
    </Svg>
  )
}
