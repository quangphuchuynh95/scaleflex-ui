import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const RobotWorried = intrinsicComponent<IconProps, SVGSVGElement>((
  { size = 59, ...rest },
  ref
): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 59 59"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d="M50.8184 49.7317C50.725 49.8308 50.6271 49.9241 50.5326 50.0209C50.3828 50.1776 50.2341 50.3298 50.0786 50.4819C50.0714 50.4897 50.0637 50.497 50.0555 50.5038C49.9403 50.619 49.817 50.7342 49.6995 50.8495C48.0349 52.4195 46.1929 53.79 44.2108 54.9334C44.204 54.9383 44.1967 54.9426 44.189 54.946L44.068 55.0129C43.766 55.1811 43.4641 55.3494 43.1553 55.5084L43.0481 55.566C42.714 55.7377 42.3775 55.9025 42.0341 56.065C41.3427 56.3892 40.6359 56.6869 39.9138 56.958C39.2915 57.1954 38.6554 57.4086 38.0135 57.6034C37.8799 57.6471 37.7462 57.6852 37.6125 57.7186C31.4735 59.4572 24.9357 59.1527 18.9849 56.8509L18.9561 56.8416C17.5942 56.3104 16.2738 55.6783 15.0059 54.9507C14.9989 54.9507 14.9955 54.9437 14.9897 54.9437L14.9482 54.9207C14.6498 54.749 14.3571 54.575 14.0644 54.3872C12.0384 53.1175 10.174 51.6065 8.5124 49.8873C8.50318 49.8769 8.48935 49.8642 8.48013 49.855C8.47091 49.8458 8.43865 49.8101 8.41675 49.7882C3.18695 44.3407 0.270688 37.0792 0.280052 29.5276C0.280052 13.3441 13.4006 0.220093 29.5876 0.220093C45.7746 0.220093 58.894 13.3441 58.894 29.5276C58.9056 37.0512 56.0127 44.2889 50.8184 49.7317Z" fill="#FFAC4A" />
    <path d="M50.5293 50.021C50.3794 50.1777 50.2308 50.3298 50.0752 50.4819C50.0681 50.4897 50.0604 50.4971 50.0522 50.5038C49.9369 50.619 49.8136 50.7343 49.6961 50.8495C48.0315 52.4195 46.1896 53.7901 44.2075 54.9334C44.2007 54.9384 44.1933 54.9426 44.1856 54.9461L44.0646 55.0129C43.7627 55.1846 43.4608 55.3494 43.1519 55.5119L43.0448 55.5695C42.7106 55.7412 42.3741 55.906 42.0307 56.0685C41.3393 56.3927 40.6325 56.6903 39.9104 56.9615C39.2881 57.1989 38.652 57.4121 38.0102 57.6068C37.8765 57.6506 37.7428 57.6887 37.6092 57.7221C31.4702 59.4607 24.9323 59.1562 18.9815 56.8544L18.9527 56.8451C17.5908 56.3139 16.2704 55.6818 15.0025 54.9541L14.9864 54.9449C14.9737 54.9357 14.9576 54.9299 14.9449 54.9196C14.6464 54.7479 14.3537 54.5739 14.061 54.386C12.035 53.1164 10.1707 51.6054 8.50903 49.8861C9.43091 46.6538 13.1184 46.1099 13.5206 46.0627L13.4929 45.891L12.7105 41.0373C12.3851 38.9292 12.5084 36.7762 13.0723 34.719C13.0884 34.6648 13.1046 34.6038 13.1207 34.553C13.1368 34.5023 13.1518 34.4482 13.1714 34.394C13.5717 33.0527 14.2065 31.7929 15.0463 30.6731C15.6603 29.8608 16.3808 29.1348 17.1885 28.5148L14.4044 15.9024L16.1018 15.4829L19.3088 27.1884C21.2574 26.2066 23.7557 25.5037 26.9523 25.2721C27.0065 25.2663 27.0572 25.2629 27.1113 25.2594L27.2703 25.2502C27.9617 25.2018 28.6716 25.1799 29.4218 25.1799C30.2284 25.1799 30.989 25.2052 31.7195 25.2559L31.8786 25.2663C31.9327 25.2663 31.9834 25.2721 32.0376 25.279C35.3909 25.529 37.9745 26.2769 39.9646 27.3129L43.137 15.718L44.8332 16.1328L42.0676 28.6646C42.7754 29.2263 43.4134 29.8708 43.9678 30.5844C44.49 31.2564 44.9334 31.9859 45.2895 32.7588C45.3276 32.8384 45.3667 32.9179 45.3979 32.9974C45.4843 33.1875 45.5638 33.3788 45.6283 33.5736C45.6606 33.6588 45.6917 33.7418 45.7205 33.8248C45.7908 34.0184 45.8542 34.2085 45.9118 34.4009C45.9279 34.4551 45.9429 34.5162 45.9591 34.5657L46.0063 34.734C46.042 34.8619 46.0731 34.9852 46.1019 35.1096C46.125 35.1984 46.1434 35.2871 46.163 35.3758C46.1826 35.4646 46.201 35.551 46.2172 35.6374C46.2448 35.7768 46.2702 35.9163 46.2932 36.0569C46.3948 36.6548 46.4564 37.2588 46.4776 37.8649C46.4776 37.9352 46.4776 38.002 46.4776 38.0688C46.5071 38.8585 46.4604 39.6493 46.3382 40.43L45.5684 45.6328L45.4866 46.1894C45.4915 46.1883 45.4966 46.1883 45.5016 46.1894C45.9176 46.2459 49.6039 46.7852 50.5293 50.021Z" fill="white" />
    <path d="M14.8608 16.7227C16.1775 16.7227 17.245 15.6553 17.245 14.3385C17.245 13.0218 16.1775 11.9543 14.8608 11.9543C13.544 11.9543 12.4766 13.0218 12.4766 14.3385C12.4766 15.6553 13.544 16.7227 14.8608 16.7227Z" fill="#7386F3" />
    <path d="M44.3791 16.7227C45.6958 16.7227 46.7633 15.6553 46.7633 14.3385C46.7633 13.0218 45.6958 11.9543 44.3791 11.9543C43.0623 11.9543 41.9949 13.0218 41.9949 14.3385C41.9949 15.6553 43.0623 16.7227 44.3791 16.7227Z" fill="#7386F3" />
    <path d="M46.3532 40.4357L45.5834 45.6386L45.5016 46.1952L44.8943 50.3171L44.8528 50.5844L44.2075 54.9288C44.2007 54.9337 44.1933 54.938 44.1856 54.9414L44.0646 55.0083C43.7627 55.1765 43.4608 55.3448 43.1519 55.5038L43.0448 55.5614C42.7106 55.7331 42.3741 55.8979 42.0307 56.0604C41.3393 56.3846 40.6325 56.6822 39.9104 56.9534C40.1201 54.4183 40.3241 51.8958 40.5085 49.5669L40.5177 49.4805V49.4644L40.5269 49.3215V49.2996C40.5269 49.2546 40.5269 49.2074 40.5396 49.1624C40.5592 48.9216 40.5741 48.6831 40.5972 48.4514L40.6479 47.8499C40.664 47.6529 40.679 47.4627 40.6986 47.2737C41.1215 42.8245 42.0434 40.6028 42.2301 38.4157V38.3811C42.2589 38.0354 42.2773 37.7104 42.2877 37.3959C42.2877 37.3325 42.2877 37.2691 42.2934 37.2023C42.3822 34.6176 42.0872 33.0665 43.9655 30.5844C44.4876 31.2563 44.9311 31.9859 45.2872 32.7588C45.3253 32.8383 45.3644 32.9178 45.3956 32.9974C45.482 33.1875 45.5615 33.3788 45.626 33.5735C45.6583 33.6588 45.6894 33.7418 45.7182 33.8247C45.7885 34.0183 45.8519 34.2085 45.9095 34.4009C45.9256 34.4551 45.9406 34.5161 45.9567 34.5657L46.004 34.7339C46.0397 34.8619 46.0708 34.9852 46.0996 35.1096C46.1227 35.1983 46.1411 35.2871 46.1607 35.3758C46.1803 35.4645 46.1987 35.551 46.2149 35.6374C46.2425 35.7768 46.2679 35.9162 46.2909 36.0568C46.3925 36.6547 46.4541 37.2588 46.4753 37.8649C46.4753 37.9352 46.4753 38.002 46.4753 38.0688C46.5109 38.8599 46.47 39.6525 46.3532 40.4357Z" fill="#D8DDEE" />
    <path d="M18.9526 56.8451C17.5907 56.3139 16.2703 55.6818 15.0023 54.9541C14.9827 54.9449 14.9643 54.9322 14.9447 54.9219L13.4928 45.8933L12.7103 41.0396C12.3768 38.8739 12.5167 36.6617 13.1206 34.5554C13.5212 33.1557 14.1738 31.8409 15.0461 30.6754C16.7182 33.0458 16.5015 34.6003 16.5684 37.0663C16.5684 37.1746 16.5753 37.2887 16.5787 37.4005C16.5914 37.7404 16.6099 38.0919 16.6421 38.471V38.5067C16.8265 40.6904 17.7126 42.9087 18.1609 47.2438C18.1667 47.3256 18.177 47.4086 18.1828 47.4916C18.2058 47.722 18.2277 47.9686 18.2496 48.2129L18.3003 48.8237C18.313 48.9689 18.3257 49.1129 18.3361 49.2558C18.3361 49.2777 18.3361 49.303 18.3361 49.3249C18.3453 49.4459 18.3557 49.5692 18.3649 49.6902L18.3868 49.9703C18.5677 52.1482 18.759 54.4874 18.9526 56.8451Z" fill="#D8DDEE" />
    <path d="M26.565 37.1251L25.4081 34.8389L24.1774 37.1228L26.565 37.1251Z" fill="#7386F3" />
    <path d="M26.8231 37.284H23.9111L25.4092 34.4977L26.8231 37.284ZM24.4435 36.9637H26.3057L25.4034 35.1799L24.4435 36.9637Z" fill="#7386F3" />
    <path d="M34.3779 37.1251L33.2221 34.8389L31.9902 37.1228L34.3779 37.1251Z" fill="#7386F3" />
    <path d="M34.6361 37.284H31.7241L33.2222 34.4977L34.6361 37.284ZM32.2565 36.9637H34.1198L33.2176 35.1799L32.2565 36.9637Z" fill="#7386F3" />
    <path d="M37.2277 41.7252C38.1346 41.7252 38.8698 40.99 38.8698 40.0831C38.8698 39.1762 38.1346 38.441 37.2277 38.441C36.3208 38.441 35.5856 39.1762 35.5856 40.0831C35.5856 40.99 36.3208 41.7252 37.2277 41.7252Z" fill="#F7EBE4" />
    <path d="M21.6537 42.1493C22.5606 42.1493 23.2958 41.4141 23.2958 40.5072C23.2958 39.6003 22.5606 38.8651 21.6537 38.8651C20.7468 38.8651 20.0116 39.6003 20.0116 40.5072C20.0116 41.4141 20.7468 42.1493 21.6537 42.1493Z" fill="#F7EBE4" />
    <path d="M46.5431 34.1774C46.3172 34.1899 46.1004 34.2702 45.9208 34.4078C45.9162 34.4102 45.9119 34.4134 45.9082 34.4171C45.3193 34.8492 44.7639 35.9151 44.2615 37.5987C43.4548 40.2652 42.9835 43.7672 42.7634 45.6178C42.6712 46.4337 42.6044 47.1366 42.5595 47.7059C42.532 48.1031 42.3546 48.475 42.0632 48.7463C41.7717 49.0176 41.3881 49.168 40.99 49.1671H18.0503C17.6432 49.1659 17.2524 49.0074 16.9595 48.7248C16.6666 48.4422 16.4942 48.0573 16.4785 47.6506C16.4473 46.9707 16.4093 46.3058 16.3632 45.6732C16.1247 42.2979 15.6799 39.5807 15.0438 37.5941C14.3524 35.4426 13.5884 34.6798 13.2196 34.4378C13.2056 34.4208 13.1884 34.4067 13.1689 34.3963C13.1689 34.3963 13.1597 34.3963 13.1563 34.3906C13.0594 34.3202 12.9492 34.2704 12.8324 34.2442C12.812 34.2407 12.7911 34.2412 12.7709 34.2457C12.7506 34.2502 12.7315 34.2587 12.7145 34.2706C12.6803 34.2947 12.657 34.3314 12.6498 34.3727C12.6426 34.414 12.6521 34.4564 12.6762 34.4906C12.7003 34.5249 12.737 34.5482 12.7783 34.5553C12.8545 34.5802 12.9264 34.6168 12.9915 34.6637L13.0099 34.6729L13.0191 34.6833C13.0372 34.6942 13.0542 34.707 13.0698 34.7213C13.442 34.9875 14.1069 35.725 14.7384 37.6897C15.3699 39.6545 15.8101 42.3463 16.0452 45.6985C16.0901 46.3254 16.1282 46.9857 16.1604 47.6633C16.1794 48.1518 16.3866 48.6141 16.7386 48.9534C17.0906 49.2927 17.5602 49.4828 18.0491 49.484H40.9946C41.473 49.4857 41.9342 49.3055 42.2847 48.9798C42.6352 48.6541 42.8488 48.2074 42.8821 47.7301C42.9236 47.1608 42.9973 46.4625 43.0849 45.6559C43.2981 43.8121 43.7763 40.332 44.5668 37.6874C45.0278 36.1652 45.5106 35.173 46.0153 34.7409C46.0408 34.7153 46.0685 34.6921 46.0983 34.6717C46.2299 34.5667 46.3911 34.5054 46.5592 34.4966C46.6015 34.4948 46.6414 34.4763 46.6701 34.4452C46.6988 34.4141 46.7141 34.3729 46.7125 34.3306C46.7123 34.3092 46.7076 34.288 46.6988 34.2684C46.69 34.2489 46.6772 34.2314 46.6613 34.217C46.6454 34.2026 46.6267 34.1916 46.6063 34.1848C46.586 34.178 46.5645 34.1755 46.5431 34.1774Z" fill="#7386F3" />
    <path d="M31.8784 25.2628L31.7194 25.2525V30.0589H27.2702V25.2467L27.1112 25.2559C27.057 25.2559 27.0063 25.2628 26.9521 25.2686V30.2168C26.9521 30.2589 26.9689 30.2994 26.9987 30.3292C27.0285 30.359 27.069 30.3758 27.1112 30.3758H31.8784C31.9204 30.3752 31.9605 30.3582 31.9902 30.3286C32.0199 30.2989 32.0368 30.2588 32.0374 30.2168V25.2755C31.9833 25.2686 31.9326 25.2651 31.8784 25.2628Z" fill="#7386F3" />
    <path d="M29.5681 44.0449C30.3363 44.0449 30.959 42.9615 30.959 41.625C30.959 40.2885 30.3363 39.2051 29.5681 39.2051C28.8 39.2051 28.1772 40.2885 28.1772 41.625C28.1772 42.9615 28.8 44.0449 29.5681 44.0449Z" fill="#C9D1E5" />
    <path d="M22.9202 33.3396C22.9202 33.3396 24.8791 30.3965 27.0087 33.1218" stroke="#7386F3" strokeMiterlimit="10" strokeLinecap="round" />
    <path d="M35.4922 33.3396C35.4922 33.3396 33.5332 30.3965 31.4037 33.1218" stroke="#7386F3" strokeMiterlimit="10" strokeLinecap="round" />
    <path d="M13.1714 34.3963L13.0723 34.7212L12.7934 34.659L12.4362 34.5023L12.5399 34.1715L12.8187 34.1681L13.1714 34.3963Z" fill="#FFAC4A" />
    <path d="M45.9209 34.4067L46.0154 34.7397L46.7679 34.4401L46.6745 34.1405L46.2747 34.0645L45.9209 34.4067Z" fill="#FFAC4A" />
  </svg>
));

export default RobotWorried;
