import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const UploadOutline = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M17.5911 1.54582C16.7075 0.680052 15.2937 0.680014 14.4101 1.54573L4.05296 11.6925C3.15635 12.5709 3.14159 14.0098 4.01999 14.9064C4.89839 15.8031 6.33733 15.8178 7.23394 14.9394L13.7278 8.57741V30.4419C13.7278 31.6971 14.7454 32.7147 16.0006 32.7147C17.2558 32.7147 18.2733 31.6971 18.2733 30.4419V8.57782L24.766 14.9393C25.6625 15.8178 27.1015 15.8031 27.9799 14.9065C28.8584 14.01 28.8437 12.571 27.9471 11.6926L17.5911 1.54582Z"
        fill={color}
      />
      <path
        d="M2.78827 36.5543C1.53308 36.5543 0.515541 37.5719 0.515541 38.827C0.515541 40.0822 1.53308 41.0998 2.78827 41.0998H29.1519C30.4071 41.0998 31.4246 40.0822 31.4246 38.827C31.4246 37.5719 30.4071 36.5543 29.1519 36.5543H2.78827Z"
        fill={color}
      />
    </svg>
  )
);

export default UploadOutline;
