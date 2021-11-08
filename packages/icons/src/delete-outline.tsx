import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const DeleteOutline = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M15.75 17.3125C15.75 16.4496 16.4496 15.75 17.3125 15.75C18.1754 15.75 18.875 16.4496 18.875 17.3125L18.875 32.9375C18.875 33.8005 18.1754 34.5 17.3125 34.5C16.4496 34.5 15.75 33.8005 15.75 32.9375L15.75 17.3125Z"
        fill={color}
      />
      <path
        d="M26.6875 15.75C25.8246 15.75 25.125 16.4496 25.125 17.3125L25.125 32.9375C25.125 33.8005 25.8246 34.5 26.6875 34.5C27.5504 34.5 28.25 33.8005 28.25 32.9375V17.3125C28.25 16.4496 27.5504 15.75 26.6875 15.75Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.625 6.37503V3.25003C12.625 1.52414 14.0241 0.125031 15.75 0.125031H28.25C29.9759 0.125031 31.375 1.52414 31.375 3.25003V6.37503H42.3125C43.1754 6.37503 43.875 7.07459 43.875 7.93753C43.875 8.80048 43.1754 9.50003 42.3125 9.50003H39.1875V40.75C39.1875 42.4759 37.7884 43.875 36.0625 43.875H7.9375C6.21161 43.875 4.8125 42.4759 4.8125 40.75V9.50003L1.6875 9.50003C0.824554 9.50003 0.125 8.80048 0.125 7.93753C0.125 7.07459 0.824555 6.37503 1.6875 6.37503H12.625ZM15.75 3.25003H28.25V6.37503H15.75V3.25003ZM7.9375 9.50003L7.9375 40.75H36.0625V9.50003H7.9375Z"
        fill={color}
      />
    </svg>
  )
);

export default DeleteOutline;
