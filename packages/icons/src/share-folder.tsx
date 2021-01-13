import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const ShareFolder = intrinsicComponent<IconProps, SVGSVGElement>((
  { color = 'currentColor', size = 14, ...rest },
  ref
): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d="M13.2617 28.052C13.0452 28.052 12.8288 28.1602 12.7205 28.2684C12.6123 28.3766 12.5041 28.5931 12.5041 28.8095C12.5041 29.026 12.6123 29.2424 12.7205 29.3506C12.8288 29.4589 13.0452 29.5671 13.2617 29.5671C13.4781 29.5671 13.6946 29.4589 13.8028 29.3506C13.911 29.2424 14.0192 29.026 14.0192 28.8095C14.0192 28.5931 13.911 28.3766 13.8028 28.2684C13.6946 28.1602 13.4781 28.052 13.2617 28.052Z" fill={color} />
    <path d="M14.0192 30.2165H12.6123V35.4113H14.0192V30.2165Z" fill={color} />
    <path d="M42.8071 22.2078L36.3136 25.8875C36.3136 25.9957 36.3136 26.2121 36.3136 26.3203C36.3136 29.2424 33.9327 31.7316 30.9024 31.7316C27.9803 31.7316 25.5993 29.3507 25.5993 26.3203C25.5993 23.3983 27.9803 20.9091 30.9024 20.9091C32.0928 20.9091 33.2833 21.342 34.1491 22.0996L40.5344 18.4199C40.5344 18.2035 40.5344 17.987 40.5344 17.7706V17.6623H20.2963L19.3223 15.1732C18.24 12.3593 16.5084 12.684 15.9673 12.684H1.24868C0.707559 12.684 0.274658 13.1169 0.274658 13.658V44.9351C0.274658 45.4762 0.707559 45.9091 1.24868 45.9091H46.4868C47.0279 45.9091 47.4608 45.4762 47.4608 44.9351V22.8571C47.0279 22.9654 46.4868 23.0736 45.9457 23.0736C44.7552 23.1818 43.7812 22.7489 42.8071 22.2078ZM13.3699 40.3896C8.71622 40.3896 4.92834 36.6017 4.92834 31.9481C4.92834 27.2944 8.71622 23.5065 13.3699 23.5065C18.0236 23.5065 21.8115 27.2944 21.8115 31.9481C21.8115 36.6017 18.0236 40.3896 13.3699 40.3896Z" fill={color} />
    <path d="M45.9457 13.5498C44.7552 13.5498 43.7812 13.9827 42.9153 14.7403L35.1231 10.303C35.2314 9.97836 35.2314 9.65368 35.2314 9.329C35.2314 6.94805 33.2833 5 31.0106 5C28.6296 5 26.6816 6.94805 26.6816 9.329C26.6816 11.71 28.6296 13.658 31.0106 13.658C32.2011 13.658 33.3915 13.1169 34.1491 12.2511L41.9413 16.6883C41.8331 17.013 41.7249 17.4459 41.7249 17.7706V17.8788C41.7249 18.3117 41.8331 18.7446 41.9413 19.0693L34.1491 23.5065C33.3915 22.6407 32.2011 22.0996 31.0106 22.0996C28.6296 22.0996 26.6816 24.0476 26.6816 26.3203C26.6816 28.7013 28.6296 30.6493 31.0106 30.6493C33.3915 30.6493 35.2314 28.7013 35.2314 26.3203C35.2314 25.9957 35.2314 25.671 35.1231 25.3463L42.9153 20.9091C43.6729 21.6667 44.7552 22.0996 45.9457 22.0996C46.4868 22.0996 46.9197 21.9913 47.4608 21.7749C49.0842 21.1255 50.2747 19.6104 50.2747 17.7706C50.1664 15.3896 48.3266 13.5498 45.9457 13.5498Z" fill={color} />
  </svg>
));

export default ShareFolder;
