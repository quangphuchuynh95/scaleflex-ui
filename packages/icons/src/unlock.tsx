import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Unlock = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M20.0122 42.5122V38.4181C21.5199 37.8185 22.5091 36.3597 22.5122 34.7075C22.617 32.5175 20.7604 30.6872 18.4997 30.6872C16.2325 30.6872 14.3872 32.5217 14.3872 34.6997C14.3872 36.3551 15.3771 37.8175 16.8872 38.4181V42.5122H20.0122ZM18.4997 35.6872C17.9723 35.6872 17.5122 35.2271 17.5122 34.6997C17.5122 34.1723 17.9723 33.7122 18.4997 33.7122C18.9953 33.7122 19.3872 34.1387 19.3872 34.6997C19.3872 35.2607 18.9953 35.6872 18.4997 35.6872Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.0183 8.91887L30.4773 8.79533L30.2842 8.37038C28.2367 3.86609 23.73 0.687195 18.4997 0.687195C11.4271 0.687195 5.68716 6.42711 5.68716 13.4997V20.6872H3.49966C1.92708 20.6872 0.687164 21.9271 0.687164 23.4997V48.4997C0.687164 50.0723 1.92708 51.3122 3.49966 51.3122H33.4997C35.0722 51.3122 36.3122 50.0723 36.3122 48.4997V23.4997C36.3122 21.9271 35.0722 20.6872 33.4997 20.6872H8.81216V13.4997C8.81216 8.17228 13.1723 3.81219 18.4997 3.81219C22.0857 3.81219 25.2806 5.75014 26.9257 8.74995L27.0183 8.91887ZM3.81216 23.8122V48.1872H33.1872V23.8122H3.81216Z"
        fill={color}
      />
    </svg>
  )
);

export default Unlock;
