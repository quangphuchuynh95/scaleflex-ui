import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Csv = intrinsicComponent<IconProps, SVGSVGElement>(
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
      <g clipPath="url(#clip0)">
        <path
          d="M44.3379 17.8848H43.1374V12.0912C43.1374 12.0548 43.1316 12.0187 43.1268 11.9818C43.1249 11.752 43.0517 11.5258 42.8942 11.3471L33.2539 0.335315C33.2511 0.332215 33.2481 0.331303 33.2462 0.328476C33.1888 0.264003 33.1218 0.210655 33.0509 0.164694C33.0299 0.150377 33.0088 0.138613 32.9867 0.126484C32.9255 0.0931989 32.8604 0.0652027 32.7933 0.0450492C32.7752 0.0403071 32.7589 0.0328293 32.7408 0.0279049C32.6678 0.0107607 32.5922 0 32.5158 0H8.82353C7.74162 0 6.86279 0.879918 6.86279 1.96082V17.8842H5.66243C4.1147 17.8842 2.8598 19.1387 2.8598 20.6866V35.2601C2.8598 36.8073 4.1147 38.063 5.66243 38.063H6.86279V48.0394C6.86279 49.1204 7.74162 50.0001 8.82353 50.0001H41.1766C42.2575 50.0001 43.1374 49.1204 43.1374 48.0394V38.0631H44.3379C45.885 38.0631 47.1401 36.8079 47.1401 35.2606V20.6871C47.1402 19.1388 45.885 17.8848 44.3379 17.8848ZM8.82353 1.96082H31.5353V11.9926C31.5353 12.5342 31.9747 12.973 32.5157 12.973H41.1766V17.8847H8.82353V1.96082ZM23.5841 28.5597C21.151 27.7124 19.5658 26.3662 19.5658 24.2382C19.5658 21.7391 21.6506 19.8274 25.1042 19.8274C26.7555 19.8274 27.972 20.1749 28.8402 20.5667L28.1025 23.2386C27.5161 22.9553 26.4736 22.5426 25.0393 22.5426C23.606 22.5426 22.911 23.1946 22.911 23.9548C22.911 24.8892 23.736 25.3016 25.6267 26.0186C28.2112 26.9742 29.4277 28.3202 29.4277 30.3844C29.4277 32.8383 27.5381 34.9245 23.5191 34.9245C21.8468 34.9245 20.1952 34.489 19.3701 34.0335L20.0431 31.2963C20.9343 31.7535 22.3024 32.2088 23.7149 32.2088C25.2352 32.2088 26.0392 31.5788 26.0392 30.6224C26.0388 29.7096 25.3433 29.1888 23.5841 28.5597ZM6.33552 27.6033C6.33552 22.6077 9.89878 19.8274 14.3289 19.8274C16.0453 19.8274 17.3486 20.1749 17.9355 20.4793L17.2614 23.1071C16.5884 22.8259 15.6535 22.5655 14.4808 22.5655C11.8525 22.5655 9.81123 24.15 9.81123 27.4078C9.81123 30.3403 11.5485 32.1863 14.5036 32.1863C15.5019 32.1863 16.6099 31.9694 17.2614 31.7086L17.7614 34.2935C17.153 34.5981 15.7849 34.9245 14.0035 34.9245C8.94235 34.9246 6.33552 31.7737 6.33552 27.6033ZM41.1766 47.5079H8.82353V38.0631H41.1766V47.5079ZM38.9865 34.7064H35.12L30.4282 20.0667H34.0564L35.8371 26.2581C36.3367 27.995 36.7927 29.6674 37.141 31.4923H37.2057C37.5748 29.7324 38.0305 27.9949 38.5303 26.3223L40.3986 20.0667H43.9186L38.9865 34.7064Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="50" height="50" fill="white" transform="translate(0 0.000549316)" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default Csv;
