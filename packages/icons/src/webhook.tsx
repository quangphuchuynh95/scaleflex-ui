import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Webhook = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 36 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M34.2565 20.5466C33.7082 20.3196 33.0769 20.4449 32.6572 20.8647L21.6541 31.868C21.2343 32.2877 21.1088 32.9188 21.3359 33.4673C21.5631 34.0156 22.0981 34.3732 22.6917 34.3732H25.9398V36.0495C25.6996 42.4335 16.5337 42.437 16.2997 36.0495V20.7761C26.7433 15.7917 23.3102 0.111592 11.6884 0.000549316C0.0657546 0.112081 -3.36562 15.7943 7.0772 20.7761V36.0494C7.78543 54.6579 34.461 54.6439 35.1624 36.0494V21.9025C35.1624 21.3088 34.8049 20.7739 34.2565 20.5466ZM11.6886 15.5106C9.14593 15.5106 7.0772 13.442 7.0772 10.8994C7.30907 4.79026 16.0688 4.79182 16.2998 10.8995C16.2997 13.442 14.2312 15.5106 11.6886 15.5106Z"
        fill={color}
      />
    </svg>
  )
);

export default Webhook;
