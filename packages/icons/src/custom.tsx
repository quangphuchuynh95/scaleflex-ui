import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Custom = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M0.562515 0.562512H3.68752V2.90626H2.90627V3.68751H0.562515V0.562512ZM0.562515 44.3125V47.4375H3.68752V45.0938H2.90627V44.3125H0.562515ZM44.3125 47.4375H47.4375V44.3125H45.0938V45.0938H44.3125V47.4375ZM47.4375 3.68751V0.562512H44.3125V2.90626H45.0938V3.68751H47.4375ZM7.59376 0.562512V3.68751H12.2813V0.562512H7.59376ZM16.9688 0.562512V3.68751H21.6563V0.562512H16.9688ZM26.3438 0.562512V3.68751H31.0313V0.562512H26.3438ZM35.7188 0.562512V3.68751H40.4063V0.562512H35.7188ZM47.4375 7.59376H44.3125V12.2813H47.4375V7.59376ZM47.4375 16.9688H44.3125V21.6563H47.4375V16.9688ZM47.4375 26.3438H44.3125V31.0313H47.4375V26.3438ZM47.4375 35.7188H44.3125V40.4063H47.4375V35.7188ZM40.4063 47.4375V44.3125H35.7188V47.4375H40.4063ZM31.0313 47.4375V44.3125H26.3438V47.4375H31.0313ZM21.6563 47.4375V44.3125H16.9688V47.4375H21.6563ZM12.2813 47.4375V44.3125H7.59377V47.4375H12.2813ZM0.562515 40.4063H3.68752V35.7188H0.562515V40.4063ZM0.562515 31.0313H3.68752V26.3438H0.562515V31.0313ZM0.562515 21.6563H3.68752V16.9688H0.562515V21.6563ZM0.562515 12.2813H3.68752V7.59376H0.562515V12.2813Z"
        fill={color}
      />
    </svg>
  )
);

export default Custom;
