import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Book = intrinsicComponent<IconProps, SVGSVGElement>(
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
      <g clipPath="url(#clip0_23772_10548)">
        <path
          d="M44.8246 26.5644C45.923 26.5644 46.8134 25.69 46.8134 24.6114V1.95636C46.8134 0.877711 45.923 0.00334458 44.8246 0.00334458H13.9557C13.937 0.00285632 13.9187 0.000610352 13.8999 0.000610352C13.8811 0.000610352 13.8628 0.00285632 13.8441 0.00334458H9.92243C6.63267 0.00334458 3.95624 2.63172 3.95624 5.8624V44.1416C3.95624 47.3722 6.63267 50.0006 9.92243 50.0006H44.8246C45.923 50.0006 46.8134 49.1262 46.8134 48.0476C46.8134 46.9689 45.923 46.0946 44.8246 46.0946H9.92243C8.82584 46.0946 7.9337 45.2184 7.9337 44.1416C7.9337 43.0647 8.82584 42.1885 9.92243 42.1885H44.8246C45.923 42.1885 46.8134 41.3142 46.8134 40.2355V20.0908C46.8134 19.0121 45.923 18.1377 44.8246 18.1377C43.7263 18.1377 42.8359 19.0121 42.8359 20.0908V38.2825H15.8886V3.90938H42.8359V24.6114C42.8359 25.69 43.7263 26.5644 44.8246 26.5644ZM11.9112 38.2825H9.92243C9.22528 38.2825 8.55617 38.4016 7.9337 38.6184V5.8624C7.9337 4.7855 8.82584 3.90938 9.92243 3.90938H11.9112V38.2825ZM35.8754 11.6238C36.9737 11.6238 37.8641 12.4982 37.8641 13.5768C37.8641 14.6555 36.9737 15.5298 35.8754 15.5298H22.8492C21.7508 15.5298 20.8604 14.6555 20.8604 13.5768C20.8604 12.4982 21.7508 11.6238 22.8492 11.6238H35.8754Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_23772_10548">
          <rect width="50" height="50" fill="white" transform="translate(0 0.000610352)" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default Book;
