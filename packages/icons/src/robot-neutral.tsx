import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const RobotNeutral = intrinsicComponent<IconProps, SVGSVGElement>((
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
    <path d="M50.8183 49.6509C50.7249 49.7488 50.627 49.8422 50.5325 49.939C50.3827 50.0945 50.234 50.2466 50.0785 50.3999C50.0716 50.4057 50.0658 50.416 50.0554 50.4218C49.9402 50.537 49.8169 50.6523 49.6994 50.7675C48.0341 52.3385 46.1909 53.7095 44.2073 54.8526C44.2007 54.8579 44.1933 54.8622 44.1854 54.8652L44.0644 54.9321C43.7625 55.1003 43.4606 55.2685 43.1517 55.4276L43.0446 55.4852C42.7104 55.6569 42.3739 55.8217 42.0305 55.9842C41.3391 56.308 40.6316 56.6076 39.9102 56.8772C39.2879 57.1158 38.6518 57.3289 38.01 57.5225C37.8763 57.5663 37.7426 57.6055 37.609 57.6435C31.4698 59.3806 24.9324 59.076 18.9813 56.7758L18.9525 56.7654C17.5906 56.2342 16.2702 55.6021 15.0023 54.8744C14.9954 54.8744 14.9919 54.8687 14.9862 54.8687L14.9447 54.8468C14.6462 54.6751 14.3535 54.5011 14.0608 54.3121C12.0345 53.0428 10.1702 51.5317 8.50883 49.8122L8.47657 49.7799C8.45813 49.758 8.43508 49.7361 8.41319 49.7131C3.18279 44.2635 0.267624 36.9991 0.279946 29.4457C0.279946 13.2622 13.4005 0.139282 29.5875 0.139282C45.7745 0.139282 58.8939 13.2622 58.8939 29.4457C58.9054 36.9696 56.0125 44.2076 50.8183 49.6509Z" fill="#6E7BB2" />
    <path d="M50.529 49.9391C50.3792 50.0947 50.2305 50.2468 50.075 50.4001C50.0681 50.4058 50.0623 50.4162 50.0519 50.422C49.9367 50.5372 49.8134 50.6524 49.6959 50.7677C48.0316 52.338 46.1895 53.7086 44.2072 54.8516C44.2007 54.857 44.1933 54.8612 44.1853 54.8643L44.0644 54.9311C43.7624 55.1028 43.4605 55.2687 43.1517 55.4301L43.0445 55.4877C42.7104 55.6594 42.3739 55.8242 42.0305 55.9866C41.3391 56.3104 40.6315 56.6101 39.9102 56.8797C39.2879 57.1182 38.6518 57.3314 38.0099 57.525C37.8763 57.5688 37.7426 57.608 37.6089 57.646C31.4697 59.383 24.9324 59.0785 18.9813 56.7783L18.9525 56.7679C17.5906 56.2367 16.2702 55.6046 15.0022 54.8769C14.9965 54.8745 14.9911 54.8715 14.9861 54.8677C14.9734 54.8585 14.9573 54.8516 14.9446 54.8424C14.6462 54.6707 14.3535 54.4967 14.0608 54.3077C12.0345 53.0384 10.1701 51.5273 8.50879 49.8078C9.43066 46.5812 13.1182 46.0315 13.5203 45.9843L13.4927 45.8126L12.7102 40.9589C12.3849 38.8508 12.5082 36.6978 13.0721 34.6406L13.1205 34.4758C13.1366 34.4217 13.1516 34.371 13.1712 34.3168C13.5714 32.9751 14.2062 31.715 15.046 30.5947C15.6603 29.7827 16.3808 29.0568 17.1882 28.4364L14.4042 15.8159L16.1016 15.3965L19.3086 27.1031C21.2572 26.1202 23.7554 25.4184 26.952 25.1856C27.0062 25.1799 27.0569 25.1764 27.1111 25.173L27.2701 25.1637C27.9615 25.1165 28.6713 25.0935 29.4215 25.0935C30.2282 25.0935 30.9887 25.12 31.7193 25.1707L31.8783 25.1799C31.9325 25.1799 31.9832 25.1856 32.0373 25.1926C35.3907 25.4438 37.9742 26.1905 39.9643 27.2264L43.1367 15.635L44.833 16.0545L42.0673 28.5874C42.7755 29.1488 43.4135 29.7933 43.9676 30.5072C44.4897 31.1788 44.9332 31.9079 45.2893 32.6805C45.3273 32.76 45.3665 32.8395 45.3976 32.919C45.484 33.1092 45.5636 33.3005 45.6281 33.4952C45.6603 33.5816 45.6915 33.6634 45.7203 33.7464C45.7906 33.94 45.8539 34.1313 45.9116 34.3226C45.9277 34.3767 45.9427 34.4378 45.9588 34.4874L46.0061 34.6568C46.0418 34.7835 46.0729 34.908 46.1017 35.0313C46.1247 35.12 46.1432 35.2099 46.1628 35.2986C46.1824 35.3873 46.2008 35.4726 46.2169 35.559C46.2446 35.6985 46.2699 35.8391 46.293 35.9785C46.3945 36.5764 46.4561 37.1804 46.4774 37.7865C46.4774 37.8568 46.4774 37.9237 46.4774 37.9905C46.5068 38.7802 46.4601 39.5709 46.3379 40.3516L45.5682 45.5545L45.4863 46.1111C45.4912 46.1095 45.4965 46.1095 45.5013 46.1111C45.9173 46.1629 49.6037 46.7034 50.529 49.9391Z" fill="white" />
    <path d="M14.8605 16.6399C16.1773 16.6399 17.2447 15.5724 17.2447 14.2557C17.2447 12.9389 16.1773 11.8715 14.8605 11.8715C13.5438 11.8715 12.4763 12.9389 12.4763 14.2557C12.4763 15.5724 13.5438 16.6399 14.8605 16.6399Z" fill="#7386F3" />
    <path d="M44.3791 16.6399C45.6958 16.6399 46.7633 15.5724 46.7633 14.2557C46.7633 12.9389 45.6958 11.8715 44.3791 11.8715C43.0623 11.8715 41.9949 12.9389 41.9949 14.2557C41.9949 15.5724 43.0623 16.6399 44.3791 16.6399Z" fill="#7386F3" />
    <path d="M46.3529 40.3529L45.5831 45.5557L45.5013 46.1123L44.894 50.2342L44.8526 50.5016L44.2072 54.8459C44.2007 54.8513 44.1933 54.8556 44.1854 54.8586L44.0644 54.9254C43.7624 55.0937 43.4605 55.2619 43.1517 55.4209L43.0445 55.4785C42.7104 55.6502 42.3739 55.815 42.0305 55.9775C41.3391 56.3013 40.6315 56.6009 39.9102 56.8706C40.1199 54.3354 40.3238 51.8141 40.5082 49.4841L40.5174 49.3988V49.3826L40.5267 49.2397V49.2167C40.5267 49.1729 40.5267 49.1245 40.5393 49.0807C40.5589 48.8387 40.5739 48.6002 40.597 48.3686L40.6477 47.7682C40.6638 47.5712 40.6788 47.3799 40.6984 47.192C41.1213 42.7428 42.0431 40.5211 42.2298 38.3351V38.2994C42.2586 37.9537 42.2771 37.6287 42.2874 37.3141C42.2874 37.2508 42.2874 37.1874 42.2932 37.1205C42.3819 34.537 42.0869 32.9859 43.9653 30.5038C44.4874 31.1754 44.9309 31.9046 45.287 32.6771C45.325 32.7566 45.3642 32.8361 45.3953 32.9156C45.4817 33.1058 45.5613 33.2971 45.6258 33.4918C45.658 33.5782 45.6892 33.6601 45.718 33.743C45.7883 33.9366 45.8516 34.1279 45.9093 34.3192C45.9254 34.3734 45.9404 34.4344 45.9565 34.484L46.0038 34.6534C46.0395 34.7801 46.0706 34.9046 46.0994 35.0279C46.1224 35.1166 46.1409 35.2065 46.1605 35.2952C46.1801 35.384 46.1985 35.4692 46.2146 35.5557C46.2423 35.6951 46.2676 35.8357 46.2907 35.9751C46.3922 36.573 46.4538 37.177 46.4751 37.7831C46.4751 37.8534 46.4751 37.9203 46.4751 37.9871C46.5105 38.7778 46.4696 39.57 46.3529 40.3529Z" fill="#D8DDEE" />
    <path d="M18.9526 56.7623C17.5907 56.231 16.2703 55.5989 15.0023 54.8713C14.9828 54.862 14.9643 54.8494 14.9447 54.8401L13.4928 45.8104L12.7103 40.9567C12.3768 38.7914 12.5167 36.5796 13.1206 34.4736C13.5215 33.0738 14.174 31.7586 15.0461 30.5925C16.7182 32.9641 16.5015 34.5174 16.5684 36.9846C16.5684 37.0917 16.5753 37.207 16.5788 37.3176C16.5914 37.6633 16.6099 38.009 16.6421 38.3893V38.4239C16.8265 40.6075 17.7127 42.8258 18.1609 47.1609C18.1667 47.2439 18.1771 47.3269 18.1828 47.4087C18.2059 47.6392 18.2278 47.8858 18.2497 48.1301L18.3004 48.7408C18.313 48.8871 18.3257 49.03 18.3361 49.1729C18.3361 49.1948 18.3361 49.2202 18.3361 49.2432C18.3453 49.3584 18.3557 49.4887 18.3649 49.6097L18.3868 49.8885C18.5677 52.0653 18.759 54.4046 18.9526 56.7623Z" fill="#D8DDEE" />
    <path d="M26.5649 37.0421L25.4079 34.7559L24.1772 37.041L26.5649 37.0421Z" fill="#7386F3" />
    <path d="M26.8231 37.2012H23.9111L25.4092 34.4148L26.8231 37.2012ZM24.4435 36.882H26.3057L25.4034 35.0981L24.4435 36.882Z" fill="#7386F3" />
    <path d="M34.3778 37.0421L33.222 34.7559L31.9901 37.041L34.3778 37.0421Z" fill="#7386F3" />
    <path d="M34.6359 37.2012H31.7239L33.2219 34.4148L34.6359 37.2012ZM32.2563 36.882H34.1196L33.2173 35.0981L32.2563 36.882Z" fill="#7386F3" />
    <path d="M37.2275 41.6423C38.1344 41.6423 38.8696 40.9071 38.8696 40.0002C38.8696 39.0933 38.1344 38.3582 37.2275 38.3582C36.3206 38.3582 35.5854 39.0933 35.5854 40.0002C35.5854 40.9071 36.3206 41.6423 37.2275 41.6423Z" fill="#F7EBE4" />
    <path d="M21.6537 42.0664C22.5606 42.0664 23.2958 41.3312 23.2958 40.4243C23.2958 39.5174 22.5606 38.7822 21.6537 38.7822C20.7468 38.7822 20.0116 39.5174 20.0116 40.4243C20.0116 41.3312 20.7468 42.0664 21.6537 42.0664Z" fill="#F7EBE4" />
    <path d="M33.4927 41.4844C33.4927 42.5664 31.6674 42.6863 29.4146 42.6863C27.1617 42.6863 25.3341 42.571 25.3341 41.4844C25.3341 40.3977 27.2274 40.5948 29.4825 40.5948C31.7377 40.5948 33.4927 40.4046 33.4927 41.4844Z" fill="#C9D1E5" />
    <path d="M46.5431 34.0945C46.3172 34.107 46.1003 34.1873 45.9208 34.325L45.9081 34.3342C45.3193 34.7663 44.7639 35.838 44.2614 37.5158C43.4548 40.1823 42.9835 43.6855 42.7634 45.535C42.6712 46.352 42.6044 47.0538 42.5594 47.623C42.5334 48.0204 42.3573 48.3931 42.0667 48.6655C41.7761 48.9379 41.3928 49.0896 40.9946 49.0899H18.0502C17.6422 49.0887 17.2506 48.9295 16.9575 48.6456C16.6645 48.3618 16.4927 47.9754 16.4784 47.5677C16.4473 46.8878 16.4093 46.2229 16.3632 45.5914C16.1247 42.2151 15.6799 39.4978 15.0438 37.5112C14.3524 35.3598 13.5884 34.5969 13.2196 34.3561C13.2062 34.3385 13.1888 34.3243 13.1689 34.3146C13.1689 34.3146 13.1597 34.3146 13.1562 34.3077C13.0594 34.2373 12.9492 34.1875 12.8324 34.1613C12.7915 34.1552 12.7497 34.1651 12.7158 34.1889C12.6819 34.2127 12.6585 34.2486 12.6504 34.2892C12.6444 34.3304 12.6543 34.3724 12.6781 34.4066C12.7018 34.4408 12.7376 34.4647 12.7783 34.4736C12.8546 34.4977 12.9266 34.5338 12.9914 34.5808L13.0099 34.5912L13.0191 34.6004C13.0372 34.6114 13.0542 34.6241 13.0698 34.6384C13.442 34.9057 14.1069 35.6432 14.7384 37.6068C15.3699 39.5704 15.8101 42.2635 16.0452 45.6168C16.0901 46.2425 16.1281 46.9039 16.1604 47.5758C16.1791 48.0645 16.3862 48.5271 16.7382 48.8667C17.0902 49.2062 17.56 49.3965 18.0491 49.3976H40.9946C41.4731 49.3991 41.9343 49.2186 42.2848 48.8927C42.6353 48.5669 42.8488 48.12 42.8821 47.6426C42.9236 47.0733 42.9973 46.375 43.0849 45.5684C43.2981 43.7246 43.7763 40.2446 44.5668 37.5999C45.0278 36.0777 45.5106 35.0867 46.0153 34.6545C46.041 34.6289 46.0688 34.6054 46.0983 34.5842C46.2302 34.4798 46.3912 34.4186 46.5592 34.4091C46.5801 34.4083 46.6006 34.4035 46.6197 34.3948C46.6387 34.3861 46.6558 34.3738 46.67 34.3585C46.6842 34.3432 46.6953 34.3252 46.7026 34.3056C46.7099 34.286 46.7132 34.2652 46.7125 34.2443C46.7118 34.2231 46.7068 34.2024 46.6978 34.1832C46.6887 34.164 46.6759 34.1469 46.6601 34.1329C46.6442 34.1189 46.6256 34.1082 46.6055 34.1016C46.5854 34.095 46.5642 34.0926 46.5431 34.0945Z" fill="#7386F3" />
    <path d="M31.8784 25.18L31.7194 25.1707V29.976H27.2702V25.1638L27.1112 25.173C27.057 25.173 27.0063 25.18 26.9521 25.1857V30.135C26.9525 30.1771 26.9693 30.2174 26.9991 30.2471C27.0288 30.2769 27.0691 30.2938 27.1112 30.2941H31.8784C31.9204 30.2935 31.9605 30.2765 31.9902 30.2468C32.0199 30.2171 32.0368 30.177 32.0374 30.135V25.1926C31.9833 25.1857 31.9326 25.1834 31.8784 25.18Z" fill="#7386F3" />
    <path d="M13.1712 34.3146L13.0721 34.6384L12.587 34.5059L12.4729 34.0103L12.8635 33.9954L13.1712 34.3146Z" fill="#6E7BB2" />
    <path d="M45.9209 34.3237L46.0154 34.6579L46.8359 34.356L46.6861 34.0264L46.3 33.978L45.9209 34.3237Z" fill="#6E7BB2" />
  </svg>
));

export default RobotNeutral;
