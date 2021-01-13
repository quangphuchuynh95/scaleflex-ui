import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Watermark = intrinsicComponent<IconProps, SVGSVGElement>((
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
    <g clipPath="url(#clip0)">
      <path d="M48.6641 25.0443C48.6641 23.9053 49.0783 22.6626 49.3889 21.3165C50.0102 19.1419 50.6315 16.9674 49.8031 14.7928C48.8712 12.6182 46.8002 11.4792 44.8327 10.3401C43.6936 9.71883 42.5546 9.09752 41.8297 8.37267C41.1049 7.64781 40.4836 6.50876 39.8623 5.3697C38.7232 3.40224 37.5842 1.22768 35.4096 0.399275C33.3386 -0.42913 31.0605 0.192174 28.8859 0.813477C27.6433 1.22768 26.2971 1.53833 25.1581 1.53833C24.019 1.53833 22.7764 1.12413 21.4303 0.813477C19.2557 0.192174 17.0812 -0.42913 14.9066 0.399275C12.732 1.33123 11.593 3.40224 10.4539 5.3697C10.0397 6.61231 9.41841 7.64781 8.69355 8.47622C7.9687 9.20107 6.82964 9.82238 5.69059 10.4437C3.72313 11.5827 1.54856 12.7218 0.72016 14.8964C-0.108245 16.9674 0.513058 19.2455 1.13436 21.42C1.54856 22.6626 1.85922 24.0088 1.85922 25.1479C1.85922 26.2869 1.44501 27.5295 1.13436 28.8757C0.513058 30.8431 -0.211795 33.1213 0.72016 35.1923C1.65211 37.3668 3.72313 38.5059 5.69059 39.6449C6.82964 40.2662 7.9687 40.8875 8.69355 41.6124C9.41841 42.3373 10.0397 43.4763 10.661 44.6154C11.8001 46.5828 12.9391 48.7574 15.1137 49.5858C15.8385 49.8964 16.5634 50 17.2882 50C18.738 50 20.1877 49.5858 21.5338 49.1716C22.7764 48.7574 24.1226 48.4467 25.2616 48.4467C26.4007 48.4467 27.6433 48.8609 28.9895 49.1716C30.3356 49.5858 31.7853 50 33.235 50C34.0634 50 34.7883 49.8964 35.4096 49.5858C37.5842 48.6538 38.7232 46.5828 39.8623 44.6154C40.4836 43.4763 41.1049 42.3373 41.8297 41.6124C42.5546 40.8875 43.6936 40.2662 44.8327 39.6449C46.8002 38.5059 48.9747 37.3668 49.8031 35.1923C50.6315 33.1213 50.0102 30.8431 49.3889 28.6686C49.0783 27.426 48.6641 26.0798 48.6641 25.0443ZM47.4215 34.1568C46.9037 35.5029 45.2469 36.3313 43.5901 37.2633C42.3475 37.9881 41.0013 38.713 39.9658 39.6449C38.9303 40.6804 38.2055 41.9231 37.5842 43.2692C36.6522 44.926 35.8238 46.5828 34.4776 47.1006C33.235 47.6183 31.5782 47.1006 29.7143 46.5828C28.2646 46.1686 26.8149 45.7544 25.2616 45.7544C23.8119 45.7544 22.2587 46.1686 20.809 46.5828C19.0486 47.1006 17.2882 47.6183 16.0456 47.1006C14.6995 46.5828 13.8711 44.926 12.9391 43.2692C12.2143 42.0266 11.4894 40.6804 10.5575 39.6449C9.52196 38.6094 8.27935 37.8846 6.93319 37.2633C5.27638 36.3313 3.61958 35.5029 3.10182 34.1568C2.58407 32.9142 3.10182 31.2573 3.61958 29.3934C4.03378 27.9437 4.44798 26.494 4.44798 24.9408C4.44798 23.491 4.03378 21.9378 3.61958 20.4881C3.10182 18.7277 2.58407 16.9674 3.10182 15.7248C3.61958 14.3786 5.27638 13.5502 6.93319 12.6182C8.1758 11.8934 9.52196 11.1685 10.5575 10.2366C11.593 9.20107 12.3178 7.95847 12.9391 6.61231C13.8711 4.9555 14.6995 3.29869 16.0456 2.78094C16.3563 2.67739 16.7705 2.57384 17.2882 2.57384C18.3238 2.57384 19.5664 2.88449 20.809 3.29869C22.2587 3.71289 23.7084 4.1271 25.2616 4.1271C26.7114 4.1271 28.2646 3.71289 29.7143 3.29869C31.4747 2.78094 33.235 2.26319 34.4776 2.78094C35.8238 3.29869 36.6522 4.9555 37.5842 6.61231C38.309 7.85492 39.0339 9.20107 39.9658 10.2366C41.0013 11.2721 42.2439 11.9969 43.5901 12.6182C45.2469 13.5502 46.9037 14.3786 47.4215 15.7248C47.9392 16.9674 47.4215 18.6242 46.9037 20.4881C46.4895 21.9378 46.0753 23.3875 46.0753 24.9408C46.0753 26.3905 46.4895 27.9437 46.9037 29.3934C47.4215 31.2573 47.9392 32.9142 47.4215 34.1568Z" fill={color} />
      <path d="M28.472 32.6036H31.2678V17.3817H28.6791V28.0474L22.0518 17.3817H19.256V32.6036H21.8447V21.9379L28.472 32.6036Z" fill={color} />
      <path d="M33.2349 37.0562C30.8532 38.6094 28.0574 39.4378 25.2615 39.4378C17.2881 39.4378 10.7644 32.9142 10.7644 24.9408C10.7644 22.0413 11.5928 19.349 13.1461 16.9674L13.4567 16.5532L11.2822 15.1035L10.9715 15.5177C9.1076 18.3135 8.07209 21.6271 8.07209 24.9408C8.07209 34.3639 15.7348 42.0266 25.1579 42.0266C28.5751 42.0266 31.7852 40.9911 34.581 39.1272L34.9952 38.8165L33.5455 36.642L33.2349 37.0562Z" fill={color} />
      <path d="M25.2618 7.85491C21.8446 7.85491 18.6345 8.89041 15.8387 10.7543L15.4245 11.065L16.8742 13.2395L17.2884 12.9289C19.67 11.3756 22.4659 10.5472 25.2618 10.5472C33.2352 10.5472 39.7589 17.0709 39.7589 25.0443C39.7589 27.9437 38.9305 30.636 37.3772 33.0177L37.0665 33.4319L39.2411 34.8816L39.5518 34.4674C41.4157 31.6715 42.4512 28.3579 42.4512 25.0443C42.3476 15.5177 34.6849 7.85491 25.2618 7.85491Z" fill={color} />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="50" height="50" fill="white" transform="translate(0.274902)" />
      </clipPath>
    </defs>
  </svg>
));

export default Watermark;
