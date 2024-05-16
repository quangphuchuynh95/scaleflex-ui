import styled from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';

const baseClassName = 'ModalContent';

const ModalContent = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})`
  position: relative;
  padding: 12px 24px 0px;
`;

const Styled = applyDisplayNames({
  ModalContent,
});

export default Styled;
