import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const NoCollections = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 80 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M64.0267 6.37632V41.7991C64.0267 42.3131 63.5193 42.827 63.0118 42.827H16.6312C16.1237 42.827 15.6163 42.3131 15.6163 41.7991V1.23664C15.6163 0.722669 16.1237 0.2087 16.6312 0.2087H31.7531C32.2605 0.2087 33.9859 -0.0996807 35.2037 2.77854L36.2186 5.34839H41.8005V21.5898C41.8005 22.7205 42.714 23.6457 43.7288 23.6457C44.1348 23.6457 44.5408 23.5429 44.8452 23.2345L50.3257 18.9172L55.7046 23.2345C56.0091 23.5429 56.415 23.6457 56.821 23.6457C57.8359 23.6457 58.7493 22.7205 58.7493 21.5898V5.34839H62.8088C63.5193 5.34839 64.0267 5.86235 64.0267 6.37632Z"
        fill={color}
      />
      <path
        d="M44.1348 20.5619C44.2363 20.6646 44.3378 20.6646 44.4393 20.6646C44.5408 20.6646 44.5408 20.6646 44.6423 20.5619L50.4271 16.0389L56.212 20.5619C56.3135 20.5619 56.3135 20.6646 56.415 20.6646C56.618 20.6646 56.821 20.4591 56.821 20.2535V5.45118H43.9318V20.2535C43.9318 20.3563 43.9318 20.3563 43.9318 20.4591C44.0333 20.4591 44.0333 20.5619 44.1348 20.5619Z"
        fill={color}
      />
      <path
        d="M4.89025 33.9266C4.89025 33.5148 5.21867 33.1809 5.6238 33.1809H11.0031C11.4083 33.1809 11.7367 33.5148 11.7367 33.9266C11.7367 34.3385 11.4083 34.6723 11.0031 34.6723H5.6238C5.21867 34.6723 4.89025 34.3385 4.89025 33.9266Z"
        fill={color}
      />
      <path
        d="M0.733552 27.7124C0.328422 27.7124 0 28.0462 0 28.4581C0 28.8699 0.328423 29.2038 0.733552 29.2038H9.04707C9.4522 29.2038 9.78062 28.8699 9.78062 28.4581C9.78062 28.0462 9.4522 27.7124 9.04707 27.7124H0.733552Z"
        fill={color}
      />
      <path
        d="M75.1097 11.711C75.1097 11.2991 74.7813 10.9653 74.3762 10.9653H68.9969C68.5917 10.9653 68.2633 11.2991 68.2633 11.711C68.2633 12.1228 68.5917 12.4567 68.9969 12.4567H74.3762C74.7813 12.4567 75.1097 12.1228 75.1097 11.711Z"
        fill={color}
      />
      <path
        d="M79.2664 5.4967C79.6716 5.4967 80 5.83056 80 6.24241C80 6.65425 79.6716 6.98812 79.2664 6.98812H70.9529C70.5478 6.98812 70.2194 6.65425 70.2194 6.24241C70.2194 5.83056 70.5478 5.4967 70.9529 5.4967H79.2664Z"
        fill={color}
      />
    </svg>
  )
);

export default NoCollections;
