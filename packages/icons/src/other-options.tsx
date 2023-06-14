import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const OtherOptions = intrinsicComponent<IconProps, SVGSVGElement>(
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.5801 3.418L27.0264 11.9717C26.4277 12.5705 26.4274 13.4261 27.0257 14.0253L35.5731 22.5853C36.1715 23.1845 37.112 23.0993 37.6253 22.5861L46.179 14.0324C46.7777 13.4336 46.6926 12.4923 46.1797 11.9787L37.6323 3.41874C37.034 2.81954 36.0934 2.90478 35.5801 3.418ZM20.258 3.99812H5.74191C4.72578 3.99812 4 4.72393 4 5.74006V20.2562C4 21.2723 4.87094 21.9981 5.74191 21.9981H20.258C21.2742 21.9981 22 21.1272 22 20.2562V5.74006C22 4.72393 21.129 3.99812 20.258 3.99812ZM5.74191 27.998H20.258C21.129 27.998 22 28.7238 22 29.7399V44.2561C22 45.127 21.2742 45.998 20.258 45.998H5.74191C4.87094 45.998 4 45.2722 4 44.2561V29.7399C4 28.7238 4.72578 27.998 5.74191 27.998ZM44.258 27.998H29.7419C28.7258 27.998 28 28.7238 28 29.74V44.2561C28 45.2722 28.8709 45.998 29.7419 45.998H44.258C45.2742 45.998 46 45.1271 46 44.2561V29.74C46 28.7238 45.129 27.998 44.258 27.998Z"
        fill={color}
      />
    </svg>
  )
);

export default OtherOptions;
