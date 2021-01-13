import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Desc = intrinsicComponent<IconProps, SVGSVGElement>((
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
    <path d="M33.0103 42.8573H25.7411C25.4759 42.8573 25.2584 42.9408 25.0879 43.1087C24.9179 43.2759 24.8325 43.49 24.8325 43.7502V49.1072C24.8325 49.3684 24.9175 49.5814 25.0879 49.7493C25.2585 49.9165 25.4759 50.0001 25.7411 50.0001H33.0103C33.2755 50.0001 33.4933 49.9165 33.6631 49.7493C33.8339 49.5813 33.918 49.3684 33.918 49.1072V43.7502C33.918 43.49 33.8338 43.2758 33.6631 43.1087C33.4933 42.9409 33.2755 42.8573 33.0103 42.8573Z" fill={color} />
    <path d="M19.38 39.2857H13.9279V0.892842C13.9279 0.632592 13.843 0.418275 13.6725 0.251063C13.502 0.0839482 13.2845 0 13.0192 0H7.56703C7.30216 0 7.08405 0.0835573 6.91387 0.250965C6.74389 0.418568 6.65846 0.632593 6.65846 0.892744V39.2856H1.20626C0.790114 39.2856 0.506056 39.4715 0.354479 39.8435C0.202803 40.1973 0.269441 40.5227 0.553101 40.8203L9.63987 49.7493C9.84814 49.9161 10.0657 49.9996 10.293 49.9996C10.5391 49.9996 10.757 49.9161 10.9462 49.7493L20.0046 40.8484C20.1942 40.6257 20.2887 40.4017 20.2887 40.1795C20.2887 39.918 20.2032 39.7047 20.0333 39.5361C19.8629 39.3694 19.6454 39.2857 19.38 39.2857Z" fill={color} />
    <path d="M38.4625 28.5719H25.7409C25.4758 28.5719 25.2582 28.6555 25.0878 28.8227C24.9177 28.9899 24.8323 29.2039 24.8323 29.4641V34.8218C24.8323 35.082 24.9174 35.2961 25.0878 35.4632C25.2582 35.6304 25.4758 35.714 25.7409 35.714H38.4625C38.7277 35.714 38.9454 35.6304 39.1153 35.4632C39.2859 35.296 39.3712 35.082 39.3712 34.8218V29.4641C39.3712 29.2039 39.2859 28.9898 39.1153 28.8227C38.9455 28.6556 38.7277 28.5719 38.4625 28.5719Z" fill={color} />
    <path d="M50.02 0.250965C49.8494 0.0839483 49.6319 0 49.3668 0H25.7411C25.4759 0 25.2584 0.0835573 25.0879 0.250965C24.9179 0.418569 24.8325 0.632593 24.8325 0.892744V6.24999C24.8325 6.51053 24.9175 6.72426 25.0879 6.89177C25.2585 7.05879 25.4759 7.14274 25.7411 7.14274H49.3668C49.6319 7.14274 49.8494 7.05918 50.0199 6.89177C50.1901 6.72426 50.2751 6.51053 50.2751 6.24999V0.892842C50.2755 0.632593 50.1901 0.418178 50.02 0.250965Z" fill={color} />
    <path d="M43.9148 14.2859H25.7409C25.4758 14.2859 25.2582 14.3694 25.0878 14.537C24.9177 14.7044 24.8323 14.9181 24.8323 15.1788V20.5358C24.8323 20.7965 24.9174 21.0102 25.0878 21.1776C25.2582 21.3448 25.4758 21.4288 25.7409 21.4288H43.9148C44.1797 21.4288 44.3975 21.3452 44.5682 21.1776C44.7381 21.0102 44.8232 20.7965 44.8232 20.5358V15.1788C44.8232 14.9181 44.7381 14.704 44.5682 14.537C44.3971 14.3698 44.1793 14.2859 43.9148 14.2859Z" fill={color} />
  </svg>
));

export default Desc;
