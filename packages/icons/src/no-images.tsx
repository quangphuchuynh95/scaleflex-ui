import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const NoImages = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 50 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5515 1.2919C19.5601 1.06194 19.7535 0.882471 19.9834 0.891042L32.9645 1.37482C33.1945 1.38339 33.3739 1.57675 33.3653 1.80671L32.996 11.718C32.9874 11.948 32.794 12.1275 32.5641 12.1189L19.583 11.6351C19.3531 11.6265 19.1736 11.4332 19.1822 11.2032L19.5515 1.2919ZM29.9763 5.10535C30.5061 5.12509 30.9516 4.71161 30.9714 4.18181C30.9911 3.652 30.5776 3.20651 30.0478 3.18677C29.518 3.16702 29.0725 3.58051 29.0528 4.11031C29.033 4.64011 29.4465 5.08561 29.9763 5.10535ZM20.0144 9.32601L24.226 6.5489C24.3047 6.497 24.4085 6.50443 24.479 6.567L27.6163 9.35119C27.6883 9.41509 27.7947 9.42133 27.8737 9.36628L29.679 8.10801C29.7519 8.05716 29.8491 8.05823 29.9209 8.11068L32.208 9.78081C32.2639 9.82165 32.2959 9.88762 32.2933 9.95682L32.2523 11.0574C32.248 11.1724 32.1513 11.2621 32.0363 11.2578L20.0802 10.8122C19.9652 10.808 19.8754 10.7113 19.8797 10.5963L19.9209 9.49218C19.9234 9.42494 19.9582 9.36305 20.0144 9.32601Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.22 8.44204C35.9929 8.4053 35.7789 8.55968 35.7422 8.78685L34.6497 15.5428C34.613 15.7699 34.7674 15.9839 34.9946 16.0206L43.9158 17.4632C44.1429 17.4999 44.3569 17.3455 44.3936 17.1184L45.4861 10.3625C45.5228 10.1353 45.3684 9.92136 45.1413 9.88462L36.22 8.44204ZM43.6005 11.7182C43.54 12.0919 43.1881 12.3459 42.8144 12.2855C42.4407 12.225 42.1867 11.8731 42.2471 11.4994C42.3076 11.1257 42.6595 10.8717 43.0332 10.9321C43.4069 10.9926 43.6609 11.3445 43.6005 11.7182ZM38.5721 12.8247L35.4125 14.3896C35.3522 14.4194 35.3101 14.4766 35.2993 14.543L35.1878 15.2327C35.1694 15.3463 35.2466 15.4533 35.3602 15.4717L43.6761 16.8164C43.7897 16.8347 43.8967 16.7575 43.915 16.644L44.026 15.9577C44.0371 15.8894 44.0134 15.82 43.9629 15.7726L42.5427 14.4394C42.4779 14.3785 42.3815 14.3655 42.3029 14.407L40.9924 15.0987C40.9073 15.1436 40.8024 15.1244 40.7388 15.0521L38.8209 12.8737C38.7586 12.8029 38.6565 12.7828 38.5721 12.8247Z"
        fill={color}
      />
      <path
        d="M45.8772 22.045C45.6178 22.045 45.4075 22.2553 45.4075 22.5147C45.4075 22.7741 45.6178 22.9844 45.8772 22.9844H49.3219C49.5814 22.9844 49.7917 22.7741 49.7917 22.5147C49.7917 22.2553 49.5814 22.045 49.3219 22.045H45.8772Z"
        fill={color}
      />
      <path
        d="M41.9627 25.9593C41.9627 25.6999 42.173 25.4896 42.4324 25.4896H47.7561C48.0155 25.4896 48.2258 25.6999 48.2258 25.9593C48.2258 26.2187 48.0155 26.429 47.7561 26.429H42.4324C42.173 26.429 41.9627 26.2187 41.9627 25.9593Z"
        fill={color}
      />
      <path
        d="M3.13151 35.3539C3.13151 35.0945 3.34182 34.8842 3.60125 34.8842H7.04595C7.30537 34.8842 7.51568 35.0945 7.51568 35.3539C7.51568 35.6134 7.30537 35.8237 7.04595 35.8237H3.60125C3.34182 35.8237 3.13151 35.6134 3.13151 35.3539Z"
        fill={color}
      />
      <path
        d="M0 31.9092C0 31.6498 0.210308 31.4395 0.469735 31.4395H5.79336C6.05279 31.4395 6.2631 31.6498 6.2631 31.9092C6.2631 32.1686 6.05279 32.379 5.79336 32.379H0.469736C0.210308 32.379 0 32.1686 0 31.9092Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.82575 10.4524C5.59982 10.4961 5.45209 10.7146 5.49578 10.9406L7.01438 18.7936C7.05807 19.0195 7.27665 19.1672 7.50258 19.1235L17.833 17.1258C18.059 17.0821 18.2067 16.8636 18.163 16.6376L16.6444 8.78466C16.6007 8.55872 16.3821 8.41099 16.1562 8.45468L5.82575 10.4524ZM15.1564 11.0571C15.2391 11.4847 14.9595 11.8984 14.5319 11.9811C14.1043 12.0637 13.6907 11.7841 13.608 11.3566C13.5253 10.929 13.8049 10.5153 14.2325 10.4326C14.66 10.3499 15.0737 10.6295 15.1564 11.0571ZM10.1795 14.2256L7.35871 17.196C7.31238 17.2448 7.29246 17.313 7.30523 17.379L7.46686 18.2148C7.4887 18.3278 7.59799 18.4017 7.71096 18.3798L17.2873 16.5279C17.4003 16.5061 17.4741 16.3968 17.4523 16.2838L17.2913 15.4515C17.2782 15.3836 17.2321 15.3265 17.1684 15.2994L15.0706 14.4064C14.9888 14.3715 14.8939 14.3925 14.8343 14.4585L13.6611 15.7594C13.5967 15.8309 13.4916 15.8489 13.407 15.803L10.43 14.186C10.3472 14.141 10.2445 14.1573 10.1795 14.2256Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.1262 37.6232C35.9724 37.8075 35.7413 37.923 35.486 37.923H18.1508C18.1441 37.923 18.1374 37.923 18.1307 37.9228H16.3716C16.0052 37.9228 15.6817 37.6834 15.5746 37.333L11.1114 22.7243C10.9477 22.1888 11.3483 21.6475 11.9083 21.6475H30.6266C30.993 21.6475 31.3164 21.8869 31.4235 22.2374L36.1262 37.6232ZM27.5717 22.8172C27.6112 22.808 27.6523 22.8032 27.6944 22.8032C27.9942 22.8032 28.2395 23.0473 28.2395 23.3456C28.2395 23.5938 28.0697 23.8044 27.8401 23.8682C27.7938 23.881 27.7451 23.8879 27.6948 23.8879C27.395 23.8879 27.1497 23.6438 27.1497 23.3455C27.1497 23.1088 27.3042 22.9061 27.5178 22.8326C27.5354 22.8266 27.5534 22.8214 27.5717 22.8172ZM29.2309 22.8811C29.3129 22.8317 29.409 22.8032 29.5114 22.8032C29.8112 22.8032 30.0565 23.0473 30.0565 23.3456C30.0565 23.5321 29.9607 23.6973 29.8156 23.795C29.7975 23.8073 29.7786 23.8184 29.759 23.8284C29.6847 23.8664 29.6005 23.8879 29.5116 23.8879C29.2118 23.8879 28.9666 23.6438 28.9666 23.3455C28.9666 23.1492 29.0728 22.9764 29.2309 22.8811ZM26.0001 23.874C25.9607 23.8831 25.9198 23.8879 25.8778 23.8879C25.578 23.8879 25.3327 23.6438 25.3327 23.3455C25.3327 23.0968 25.5032 22.8858 25.7337 22.8225C25.7795 22.8099 25.8277 22.8032 25.8774 22.8032C26.1772 22.8032 26.4224 23.0473 26.4224 23.3456C26.4224 23.583 26.2671 23.786 26.0527 23.8591C26.0355 23.8649 26.018 23.8699 26.0001 23.874Z"
        fill={color}
      />
      <path
        d="M19.6876 20.907L19.8165 20.0307C19.8766 19.6217 20.2275 19.3186 20.6409 19.3186L37.7372 19.3189C38.2411 19.3189 38.6297 19.7625 38.5633 20.262L36.449 36.1693L31.9829 21.6476L31.9439 21.5113C31.8417 21.1536 31.5147 20.907 31.1427 20.907H19.6876Z"
        fill={color}
      />
    </svg>
  )
);

export default NoImages;
