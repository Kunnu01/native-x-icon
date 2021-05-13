import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface EarthOutlineIconProps {
  color?: string
  size?: IconSize
}

export function EarthOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: EarthOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M21.75 12C21.75 6.61547 17.3845 2.25 12 2.25C6.61547 2.25 2.25 6.61547 2.25 12C2.25 17.3845 6.61547 21.75 12 21.75C17.3845 21.75 21.75 17.3845 21.75 12Z'
        stroke={contentColor}
        stroke-miterlimit='10'
      />
      <Path
        d='M20.8862 8.0693C20.1334 8.07398 20.2075 9.46289 19.2695 8.80758C18.9212 8.56477 18.707 8.2118 18.2696 8.10445C17.8876 8.0107 17.4962 8.1082 17.1189 8.17336C16.6899 8.24742 16.1814 8.2807 15.856 8.60555C15.5415 8.9182 15.3751 9.33773 15.0404 9.65227C14.3931 10.2616 14.1198 10.9268 14.5388 11.7884C14.942 12.6166 15.7853 13.0662 16.6951 13.0071C17.589 12.9476 18.5176 12.4291 18.4918 13.728C18.4825 14.1874 18.5785 14.5062 18.7196 14.9332C18.8504 15.327 18.8415 15.7085 18.8715 16.1149C18.9268 16.8743 19.0665 17.7255 19.4434 18.3963L20.1465 17.4045C20.2332 17.2816 20.4146 17.1096 20.4578 16.9648C20.5342 16.7084 20.3837 16.2677 20.3664 15.9804C20.349 15.693 20.3575 15.402 20.3134 15.1146C20.2515 14.712 20.0134 14.3346 19.9806 13.9366C19.9201 13.1955 20.0556 12.604 19.4846 11.9843C18.9334 11.3866 18.1253 11.2432 17.3532 11.3646C16.9642 11.4255 15.3981 11.6759 16.0267 10.7866C16.1509 10.6118 16.3679 10.4684 16.5076 10.302C16.629 10.1571 16.7345 9.89086 16.877 9.77789C17.0195 9.66492 17.6739 9.53508 17.8614 9.59273C18.0489 9.65039 18.2443 9.92086 18.407 10.0409C18.7075 10.2672 19.0582 10.4177 19.4293 10.4796C20.0696 10.5734 21.4084 10.2012 21.3981 9.37992C21.3962 8.98617 21.0306 8.43773 20.8862 8.0693Z'
        fill={contentColor}
      />
      <Path
        d='M13.4742 14.8265C13.2244 13.7746 11.7952 13.4231 11.0246 12.8526C10.5816 12.5245 10.1874 12.0178 9.60565 11.9765C9.33753 11.9573 9.113 12.0154 8.84722 11.9465C8.60347 11.8837 8.41222 11.7525 8.15253 11.7867C7.66737 11.8504 7.36128 12.3689 6.84003 12.2985C6.3455 12.232 5.83597 11.6535 5.72347 11.1825C5.5791 10.5768 6.05816 10.3804 6.57144 10.3265C6.78566 10.304 7.02612 10.2796 7.23191 10.3579C7.50284 10.4587 7.63081 10.724 7.87409 10.8581C8.33019 11.1079 8.42253 10.7085 8.35269 10.3035C8.24815 9.69699 8.12628 9.44949 8.66722 9.0323C9.04222 8.74449 9.36284 8.53636 9.30284 8.01933C9.26722 7.71558 9.10081 7.57824 9.25597 7.27589C9.37362 7.04574 9.69659 6.83808 9.90706 6.70074C10.4503 6.34636 12.2344 6.37261 11.5055 5.38074C11.2913 5.08964 10.8961 4.56933 10.5211 4.49808C10.0524 4.40949 9.84425 4.93261 9.51753 5.16324C9.18003 5.40183 8.52284 5.67277 8.18487 5.30386C7.73019 4.80746 8.48628 4.64433 8.65362 4.29792C8.82097 3.95152 8.26597 3.29667 7.96878 3.13074L6.57144 4.69777C6.5313 4.9602 6.54527 5.22807 6.6125 5.48491C6.67973 5.74174 6.7988 5.9821 6.96237 6.19121C7.24034 6.54886 7.68284 6.66371 7.703 7.15214C7.72269 7.62089 7.64956 7.86089 7.343 8.19042C7.21034 8.33105 7.11659 8.53074 6.98159 8.66246C6.81613 8.82324 6.87753 8.77402 6.61925 8.81808C6.13363 8.90011 5.72019 9.02668 5.25097 9.15605C4.4691 9.37214 4.39691 8.0948 4.04066 7.59371L2.86879 8.54011C2.85613 8.69527 3.06097 8.98074 3.11676 9.14949C3.43691 10.1137 4.08285 10.8595 4.50003 11.782C4.93925 12.7589 6.11863 12.4879 6.63941 13.3439C7.10159 14.1032 6.608 15.0646 6.95394 15.8596C7.20519 16.4367 7.79769 16.5628 8.20644 16.9846C8.62409 17.4107 8.61518 17.9939 8.67894 18.5484C8.75083 19.2006 8.86751 19.8472 9.02815 20.4834C9.08487 20.7032 9.1369 20.9939 9.28737 21.1753C9.3905 21.3 9.7444 21.4073 9.60143 21.4485C9.80112 21.4814 10.1569 21.6679 10.3233 21.531C10.5427 21.351 10.4841 20.797 10.5221 20.5467C10.636 19.8014 11.0091 19.0725 11.5125 18.5146C12.0099 17.9643 12.6914 17.5917 13.1114 16.9678C13.5206 16.3593 13.6439 15.5385 13.4742 14.8265ZM11.9091 16.0603C11.6278 16.5623 11.0016 16.8984 10.5989 17.2973C10.4897 17.4056 10.2572 17.7806 10.1203 17.6995C10.0224 17.6414 9.98909 17.1548 9.953 17.0432C9.76679 16.4815 9.41132 15.9911 8.93534 15.6393C8.78862 15.5282 8.42487 15.3839 8.34097 15.2315C8.24722 15.066 8.33159 14.6756 8.33487 14.4956C8.34003 14.2331 8.2205 13.7967 8.28519 13.5581C8.36019 13.2829 8.21581 13.4489 8.4619 13.3945C8.59175 13.3654 9.128 13.4596 9.28972 13.4934C9.54659 13.5468 9.68815 13.7067 9.89065 13.8684C10.4232 14.2954 11.0096 14.6259 11.6063 14.9531C12.0685 15.209 12.2044 15.5329 11.9091 16.0603Z'
        fill={contentColor}
      />
      <Path
        d='M8.64661 3.14503C8.86879 3.36206 9.07786 3.61894 9.40926 3.6405C9.72286 3.6616 10.0186 3.49191 10.2924 3.70519C10.5961 3.93956 10.815 4.23628 11.2182 4.30941C11.6082 4.38019 12.0211 4.15238 12.1177 3.75347C12.2115 3.37331 12.0094 2.95988 11.9972 2.57832C11.9972 2.52535 12.0258 2.29004 11.9893 2.25019C11.9621 2.22019 11.7352 2.25394 11.7005 2.25488C11.4465 2.26238 11.193 2.27988 10.9402 2.30738C10.0186 2.40714 9.11595 2.63839 8.25989 2.9941C8.37379 3.07285 8.51676 3.10425 8.64661 3.14503Z'
        fill={contentColor}
      />
      <Path
        d='M16.7061 5.77868C17.1041 5.77868 17.5082 5.60055 17.3797 5.14024C17.2719 4.75446 17.0882 4.33586 16.641 4.54399C16.3565 4.67617 15.9533 5.01274 15.9201 5.34649C15.8821 5.72524 16.4408 5.77868 16.7061 5.77868Z'
        fill={contentColor}
      />
      <Path
        d='M16.3884 7.7924C16.7948 8.03569 17.3976 7.92131 17.7042 7.57397C17.9437 7.30209 18.0848 6.83006 18.5156 6.83053C18.7053 6.83014 18.8875 6.90439 19.0228 7.03725C19.2009 7.22147 19.1658 7.39444 19.2037 7.62506C19.2886 8.14303 19.8441 7.65459 19.9889 7.45397C20.0827 7.32319 20.2097 7.12912 20.167 6.95897C20.1277 6.80006 19.942 6.63084 19.8595 6.48506C19.6186 6.06319 19.4203 5.57241 19.0594 5.23163C18.712 4.90351 18.285 4.94147 17.9555 5.28225C17.6855 5.5635 17.3719 5.78616 17.1872 6.12835C17.0569 6.36881 16.9101 6.48366 16.6462 6.546C16.5009 6.58022 16.335 6.59288 16.2131 6.69038C15.8737 6.95756 16.0669 7.59928 16.3884 7.7924Z'
        fill={contentColor}
      />
    </Svg>
  )
}
