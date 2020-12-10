import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

// color #5D6D7E
export const Languages = intrinsicComponent<IconProps, SVGSVGElement>((
  { color = 'currentColor', size = 14, ...rest },
  ref
): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 51 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d="M26.1747 50C29.9747 49.499 33.3747 45.491 35.4747 39.5792C32.4747 38.8778 29.2747 38.5772 26.1747 38.477V50Z" fill={color} />
    <path d="M32.2747 49.0982C32.4747 48.998 32.7747 48.998 32.9747 48.8978C33.1747 48.7976 33.3747 48.7976 33.5747 48.6974C33.7747 48.5972 33.9747 48.497 34.2747 48.497C34.4747 48.3968 34.6747 48.3968 34.8747 48.2966C35.0747 48.1964 35.2747 48.0962 35.4747 47.996C35.6747 47.8958 35.8747 47.7956 35.9747 47.6954C36.1747 47.5952 36.3747 47.495 36.5747 47.3948C36.7747 47.2946 36.9747 47.1944 37.0747 47.0942C37.2747 46.994 37.4747 46.8938 37.6747 46.7936C37.8747 46.6934 38.0747 46.5932 38.1747 46.493C38.3747 46.3928 38.5747 46.2926 38.7747 46.0922C38.9747 45.992 39.0747 45.8918 39.2747 45.7916C39.4747 45.6914 39.6747 45.491 39.8747 45.3908C40.0747 45.2906 40.1747 45.1904 40.3747 44.99C40.5747 44.8898 40.7747 44.6894 40.8747 44.5892C41.0747 44.489 41.1747 44.2886 41.3747 44.1884C41.5747 44.0882 41.6747 43.8878 41.8747 43.6874C42.0747 43.5872 42.1747 43.3868 42.3747 43.2866C42.5747 43.0862 42.6747 42.986 42.8747 42.7856C42.9747 42.6854 43.1747 42.485 43.2747 42.3848L43.3747 42.2846C41.4747 41.2826 39.3747 40.481 37.2747 39.8798C36.1747 43.3868 34.1747 46.5932 31.5747 49.1984C31.6747 49.1984 31.6747 49.1984 31.7747 49.0982C31.8747 49.1984 32.0747 49.0982 32.2747 49.0982Z" fill={color} />
    <path d="M50.2747 25.8517H39.5747C39.5747 30.0601 38.9747 34.1683 37.7747 38.2766C40.1747 38.8778 42.3747 39.7796 44.5747 40.982C48.0747 36.7736 50.0747 31.4629 50.2747 25.8517Z" fill={color} />
    <path d="M26.1747 24.1483H37.7747C37.7747 20.1403 37.1747 16.1323 35.9747 12.2244C32.7747 12.9259 29.4747 13.3267 26.1747 13.4269V24.1483Z" fill={color} />
    <path d="M26.1747 0V11.523C29.2747 11.523 32.3747 11.1222 35.4747 10.4208C33.3747 4.50902 29.9747 0.501002 26.1747 0Z" fill={color} />
    <path d="M26.1747 36.6733C29.4747 36.6733 32.7747 37.0742 35.9747 37.8758C37.0747 33.9679 37.6747 29.9599 37.7747 25.9519H26.1747V36.6733Z" fill={color} />
    <path d="M44.5747 9.01804C42.4747 10.2204 40.1747 11.1222 37.7747 11.7234C38.9747 15.7315 39.5747 19.9399 39.5747 24.1483H50.2747C50.0747 18.5371 48.0747 13.2265 44.5747 9.01804Z" fill={color} />
    <path d="M43.3747 7.61523C43.2747 7.61523 43.2747 7.61523 43.3747 7.61523C43.1747 7.41483 42.9747 7.21443 42.8747 7.11423C42.6747 7.01403 42.4747 6.81363 42.2747 6.61323C42.1747 6.51303 41.9747 6.31262 41.7747 6.21242C41.5747 6.01202 41.4747 5.91182 41.2747 5.71142C41.0747 5.61122 40.9747 5.41082 40.7747 5.31062C40.5747 5.21042 40.3747 5.01002 40.2747 4.90982C40.0747 4.80962 39.9747 4.70942 39.7747 4.50902C39.5747 4.40882 39.3747 4.20842 39.1747 4.10822C38.9747 4.00802 38.8747 3.90782 38.6747 3.80762C38.4747 3.70741 38.2747 3.60721 38.0747 3.40681C37.8747 3.30661 37.7747 3.20641 37.5747 3.10621C37.4747 3.10621 37.2747 3.00601 37.0747 2.90581C36.8747 2.80561 36.6747 2.70541 36.5747 2.60521C36.3747 2.50501 36.1747 2.40481 35.9747 2.30461C35.7747 2.20441 35.5747 2.10421 35.4747 2.10421C35.2747 2.00401 35.0747 1.90381 34.8747 1.80361C34.6747 1.70341 34.4747 1.70341 34.2747 1.60321C34.0747 1.50301 33.8747 1.40281 33.5747 1.40281C33.3747 1.30261 33.1747 1.30261 32.9747 1.2024C32.6747 1.1022 32.4747 1.002 32.2747 0.901804C32.0747 0.801603 31.8747 0.801603 31.6747 0.701403C31.5747 0.701403 31.5747 0.701403 31.4747 0.601202C34.0747 3.20641 36.0747 6.41283 37.1747 9.91984C39.2747 9.41884 41.3747 8.61723 43.3747 7.61523Z" fill={color} />
    <path d="M0.274658 24.1483H10.9747C10.9747 19.9399 11.5747 15.8317 12.7747 11.7234C10.3747 11.1222 8.17466 10.2204 5.97466 9.01804C2.47466 13.2265 0.474658 18.5371 0.274658 24.1483Z" fill={color} />
    <path d="M24.3747 50V38.477C21.2747 38.477 18.1747 38.8778 15.0747 39.5792C17.1747 45.491 20.5747 49.499 24.3747 50Z" fill={color} />
    <path d="M24.3747 25.8517H12.7747C12.7747 29.8597 13.3747 33.8677 14.5747 37.7756C17.7747 37.0741 21.0747 36.6733 24.3747 36.5731V25.8517Z" fill={color} />
    <path d="M24.3747 0C20.5747 0.501002 17.1747 4.50902 15.0747 10.4208C18.0747 11.1222 21.2747 11.4228 24.3747 11.523V0Z" fill={color} />
    <path d="M24.3747 13.3267C21.0747 13.3267 17.7747 12.9259 14.5747 12.1242C13.4747 16.0321 12.8747 20.0401 12.7747 24.0481H24.3747V13.3267Z" fill={color} />
    <path d="M19.0747 0.701403C18.9747 0.701403 18.9747 0.701403 18.8747 0.801603C18.6747 0.901804 18.4747 0.901804 18.2747 1.002C18.0747 1.1022 17.8747 1.1022 17.5747 1.2024C17.3747 1.30261 17.1747 1.30261 16.9747 1.40281C16.7747 1.50301 16.5747 1.60321 16.2747 1.60321C16.0747 1.70341 15.8747 1.70341 15.6747 1.80361C15.4747 1.90381 15.2747 2.00401 15.0747 2.10421C14.8747 2.20441 14.6747 2.30461 14.5747 2.40481C14.3747 2.50501 14.1747 2.60521 13.9747 2.70541C13.7747 2.80561 13.5747 2.90581 13.4747 3.00601C13.2747 3.00601 13.0747 3.10621 12.8747 3.20641C12.6747 3.30661 12.4747 3.40681 12.3747 3.50701C12.1747 3.60721 11.9747 3.70741 11.7747 3.90782C11.5747 4.00802 11.4747 4.10822 11.2747 4.20842C11.0747 4.30862 10.8747 4.50902 10.6747 4.60922C10.5747 4.70942 10.3747 4.80962 10.1747 5.01002C10.0747 5.11022 9.87466 5.21042 9.67466 5.41082C9.47466 5.51102 9.37466 5.61122 9.17466 5.81162C9.07466 5.91182 8.87466 6.11222 8.67466 6.21242C8.57466 6.41283 8.37466 6.51303 8.27466 6.61323C8.07466 6.81363 7.87466 7.01403 7.77466 7.11423C7.57466 7.31463 7.47466 7.41483 7.27466 7.61523L7.17466 7.71543C9.07466 8.71743 11.1747 9.51904 13.2747 10.1202C14.4747 6.51303 16.3747 3.30661 19.0747 0.701403Z" fill={color} />
    <path d="M7.77466 42.8858C7.97466 43.0862 8.07466 43.1864 8.27466 43.3868C8.37466 43.487 8.57466 43.6874 8.77466 43.7876C8.97466 43.988 9.07466 44.0882 9.27466 44.2886C9.47466 44.3888 9.57466 44.5892 9.77466 44.6894C9.97466 44.7896 10.1747 44.99 10.2747 45.0902C10.4747 45.1904 10.5747 45.2906 10.7747 45.491C10.9747 45.5912 11.1747 45.7916 11.3747 45.8918C11.5747 45.992 11.6747 46.0922 11.8747 46.1924C12.0747 46.2926 12.2747 46.3928 12.4747 46.5932C12.6747 46.6934 12.7747 46.7936 12.9747 46.8938C13.1747 46.994 13.3747 47.0942 13.5747 47.1944C13.7747 47.2946 13.9747 47.3948 14.0747 47.495C14.2747 47.5952 14.4747 47.6954 14.6747 47.7956C14.8747 47.8958 15.0747 47.996 15.1747 47.996C15.3747 48.0962 15.5747 48.1964 15.7747 48.2966C15.9747 48.3968 16.1747 48.3968 16.3747 48.497C16.5747 48.5972 16.7747 48.6974 17.0747 48.6974C17.2747 48.7976 17.4747 48.7976 17.6747 48.8978C17.8747 48.998 18.0747 48.998 18.3747 49.0982C18.5747 49.1984 18.7747 49.1984 18.9747 49.2986C19.0747 49.2986 19.0747 49.2986 19.1747 49.3988C16.5747 46.7936 14.5747 43.5872 13.4747 40.0802C11.2747 40.5812 9.17466 41.3828 7.27466 42.3848L7.37466 42.485C7.47466 42.5852 7.57466 42.6854 7.77466 42.8858Z" fill={color} />
    <path d="M5.97466 40.982C8.07466 39.7796 10.3747 38.8778 12.7747 38.2766C11.5747 34.2685 10.9747 30.0601 10.9747 25.8517H0.274658C0.474658 31.4629 2.47466 36.7736 5.97466 40.982Z" fill={color} />
  </svg>
));

export default Languages;
