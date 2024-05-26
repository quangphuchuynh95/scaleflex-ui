import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Similar = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.17437 0.279785C3.52413 0.279785 2.99701 0.806907 2.99701 1.45714V2.99677H1.45739C0.807151 2.99677 0.280029 3.52389 0.280029 4.17413V12.5424C0.280029 13.1927 0.807151 13.7198 1.45739 13.7198H9.82571C10.476 13.7198 11.0031 13.1927 11.0031 12.5424V11.0028H10.0974V12.5424C10.0974 12.6925 9.97577 12.8141 9.82571 12.8141H1.45739C1.30733 12.8141 1.18569 12.6925 1.18569 12.5424V4.17413C1.18569 4.02407 1.30733 3.90243 1.45739 3.90243H2.99701V9.82545C2.99701 10.4757 3.52413 11.0028 4.17437 11.0028H12.5427C13.1929 11.0028 13.7201 10.4757 13.7201 9.82545V1.45714C13.7201 0.806907 13.1929 0.279785 12.5427 0.279785H4.17437ZM12.5427 1.18545H4.17437C4.02432 1.18545 3.90267 1.30709 3.90267 1.45714V2.99677H10.103C10.598 2.99677 11.0031 3.42122 11.0031 3.94V10.0971H12.5427C12.6927 10.0971 12.8144 9.9755 12.8144 9.82545V1.45714C12.8144 1.30709 12.6927 1.18545 12.5427 1.18545Z"
        fill={color}
      />
    </svg>
  )
);

export default Similar;
