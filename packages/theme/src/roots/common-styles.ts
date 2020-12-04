import { createGlobalStyle /* , css */ } from 'styled-components';

// Example with theme: ${({ theme }) => css``;

const CommonStyles = createGlobalStyle`
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default CommonStyles;
