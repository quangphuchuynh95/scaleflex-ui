import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Home = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M48.2814 21.875L43.7501 17.3469V6.25C43.7501 4.53125 42.3439 3.125 40.6251 3.125H37.5001C35.7814 3.125 34.3751 4.53125 34.3751 6.25V7.97813L28.1251 1.73438C27.272 0.928125 26.4907 0 25.0001 0C23.5095 0 22.7282 0.928125 21.8751 1.73438L1.71887 21.875C0.743872 22.8906 0.00012207 23.6313 0.00012207 25C0.00012207 26.7594 1.35012 28.125 3.12512 28.125H6.25012V46.875C6.25012 48.5938 7.65637 50 9.37512 50H18.7501V34.375C18.7501 32.6562 20.1564 31.25 21.8751 31.25H28.1251C29.8439 31.25 31.2501 32.6562 31.2501 34.375V50H40.6251C42.3439 50 43.7501 48.5938 43.7501 46.875V28.125H46.8751C48.6501 28.125 50.0001 26.7594 50.0001 25C50.0001 23.6313 49.2564 22.8906 48.2814 21.875Z"
        fill={color}
      />
    </svg>
  )
);

export default Home;
