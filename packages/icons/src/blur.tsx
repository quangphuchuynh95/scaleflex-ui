import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Blur = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M18.3626 41.293C17.5103 41.4285 16.7096 40.8474 16.5742 39.9952C16.4387 39.143 17.0198 38.3423 17.872 38.2068C18.2902 38.1403 18.6988 38.0456 19.0958 37.9246C21.9368 37.059 24.1957 34.8468 25.1254 32.0335C25.2671 31.6049 25.378 31.1621 25.4555 30.7076C25.6005 29.857 26.4076 29.2849 27.2583 29.4299C28.109 29.5749 28.681 30.3821 28.536 31.2327C28.432 31.8429 28.283 32.4379 28.0926 33.0142C26.8449 36.7893 23.8206 39.7519 20.0065 40.914C19.4728 41.0766 18.9239 41.2038 18.3626 41.293Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.9356 31.0645C33.9356 23.9644 24.1764 8.59028 19.4747 1.59549C18.2785 -0.184172 15.7216 -0.184172 14.5254 1.59548C9.82374 8.59028 0.0645752 23.9644 0.0645752 31.0645C0.0645752 40.4177 7.64685 48 17.0001 48C26.3533 48 33.9356 40.4177 33.9356 31.0645ZM30.8106 31.0645C30.8106 29.8836 30.375 28.0316 29.4236 25.578C28.5 23.1959 27.1988 20.5159 25.7187 17.7756C22.8106 12.3913 19.3287 6.98743 17.0001 3.51586C14.6715 6.98743 11.1895 12.3913 8.28145 17.7756C6.80135 20.5159 5.50017 23.1959 4.57655 25.578C3.62517 28.0316 3.18958 29.8836 3.18958 31.0645C3.18958 38.6918 9.37274 44.875 17.0001 44.875C24.6274 44.875 30.8106 38.6918 30.8106 31.0645Z"
        fill={color}
      />
    </svg>
  )
);

export default Blur;
