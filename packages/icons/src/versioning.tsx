import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Versioning = intrinsicComponent<IconProps, SVGSVGElement>((
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
    <path d="M49.7804 19.9722C48.4616 13.4797 44.7081 7.79874 39.1286 4.1467C28.8826 -2.65016 15.1874 -0.925591 6.97032 8.10307L6.56451 5.87127C6.26018 4.55248 4.94139 3.63947 3.6226 3.94381C2.3038 4.24815 1.3908 5.56693 1.69513 6.88573L3.31827 14.8999C3.41972 15.5086 3.8255 16.1173 4.33273 16.4216C4.83996 16.8274 5.55006 16.9288 6.15874 16.8274L14.1729 15.2043C15.4917 14.8999 16.4048 13.5811 16.1004 12.2623C15.7961 10.9436 14.4773 10.0305 13.1585 10.3349L11.0281 10.7407C14.3759 7.39296 18.8395 5.2626 23.6074 4.85681C28.8826 4.45103 34.0563 6.07417 38.1141 9.52332C46.5341 16.6245 47.5486 29.3052 40.3459 37.7252C33.2447 46.1452 20.564 47.1596 12.144 39.957C8.28909 36.6093 5.85441 32.0442 5.24573 26.972C5.14429 26.3633 4.83996 25.7546 4.33273 25.3488C3.8255 24.943 3.21681 24.7402 2.50669 24.7402C1.89801 24.8416 1.28936 25.1459 0.883582 25.6532C0.4778 26.1604 0.274902 26.7691 0.274902 27.4792V27.5806C0.376348 28.2907 0.477781 29.0009 0.579227 29.711C3.01392 41.4787 13.3614 49.6958 25.0276 49.6958C26.6508 49.6958 28.3753 49.4929 29.9985 49.1885C36.491 47.8698 42.1719 44.1163 45.824 38.5368C49.7804 33.1601 51.0992 26.4647 49.7804 19.9722Z" fill={color} />
    <path d="M25.332 9.11748C24.0132 9.11748 22.8973 10.2334 22.8973 11.5522V24.943C22.8973 25.5517 23.2017 26.2618 23.6075 26.6676L30.6072 33.6673C31.1144 34.1745 31.7231 34.3774 32.3318 34.3774C32.9405 34.3774 33.6506 34.0731 34.0563 33.6673C34.5636 33.1601 34.7665 32.5514 34.7665 31.9427C34.7665 31.2326 34.4621 30.624 34.0563 30.2182L27.7667 23.9285V11.5522C27.7667 10.1319 26.7523 9.11748 25.332 9.11748Z" fill={color} />
  </svg>
));

export default Versioning;
