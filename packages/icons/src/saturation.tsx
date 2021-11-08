import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Saturation = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M37.2341 37.6984H37.5121V37.4237C41.4447 33.4687 43.875 28.0182 43.875 22C43.875 15.9819 41.4447 10.5314 37.5121 6.57632V6.30045H37.2328C33.2942 2.47819 27.9219 0.125031 22 0.125031C9.91877 0.125031 0.125 9.9188 0.125 22C0.125 34.0813 9.91877 43.875 22 43.875C24.718 43.875 27.3203 43.3793 29.7213 42.4733H30.5303V42.1494C33.0389 41.0861 35.308 39.5679 37.2341 37.6984ZM20.4257 3.31519C10.807 4.1148 3.25 12.1749 3.25 22C3.25 31.8252 10.807 39.8853 20.4257 40.6849V3.31519ZM34.3871 36.0759C33.221 37.1029 31.9263 37.9873 30.5303 38.7017V5.29836C31.9263 6.01281 33.221 6.89715 34.3871 7.92411V36.0759ZM37.5121 11.4641C39.5556 14.4669 40.75 18.094 40.75 22C40.75 25.9061 39.5556 29.5332 37.5121 32.536V11.4641ZM23.5507 40.6868C24.8796 40.578 26.1693 40.3307 27.4053 39.9592V4.04089C26.1693 3.66941 24.8796 3.42203 23.5507 3.31324V40.6868Z"
        fill={color}
      />
    </svg>
  )
);

export default Saturation;
