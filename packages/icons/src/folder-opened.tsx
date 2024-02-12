import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const FolderOpened = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M3.92971 18.1836C3.92971 15.7604 5.90109 13.7891 8.32424 13.7891H34.7149C37.138 13.7891 38.1094 15.7604 38.1094 18.1836V19.6484H41.0391V13.7656C41.0391 11.6117 40.2867 9.85938 38.1328 9.85938H20.5547L19.5 7.04297C19 6.04297 18.8024 5 16.6485 5H3.90627C1.75236 5 1.00002 5.75234 1.00002 7.90625V37.6708L3.92971 31.9802V18.1836Z"
        fill={color}
      />
      <path
        d="M34.4483 16H7.55174C6.69478 16 6.00002 16.6205 6.00002 17.3858V28L9.0266 21.6725C9.88295 20.4483 11.3589 19.7175 12.9749 19.7175H36V17.3858C36 16.6205 35.3053 16 34.4483 16Z"
        fill={color}
      />
      <path
        d="M10.437 23.1383C10.769 22.4428 11.4711 22 12.2418 22H46.8265C48.298 22 49.2657 23.5354 48.6308 24.8629L39.5438 43.8629C39.2115 44.5577 38.5098 45 37.7396 45H2.3783C1.27515 45 0.549383 43.8493 1.02465 42.8538L10.437 23.1383Z"
        fill={color}
      />
    </svg>
  )
);

export default FolderOpened;
