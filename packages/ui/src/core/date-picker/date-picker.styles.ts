import styled, { css } from 'styled-components';
import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';

import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import InputGroup from '../input-group';
import { InputProps } from '../input';

const baseClassName = 'Date-picker';

const DatePicker = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})`
  position: relative;
`;

const Placeholder = styled.div.attrs({
  className: generateClassNames(baseClassName, 'placeholder'),
})(
  ({ fullWidth, theme }: With<WithTheme, InputProps>) => css`
    position: absolute;
    top: 32px;
    left: 19px;
    width: ${fullWidth ? '95%' : '244px'};
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    z-index: 10000;
    color: ${theme.palette[PColor.TextPlaceholder]};
    background: ${theme.palette[PColor.BackgroundStateless]};
  `
);

const DatePickerInput = styled(InputGroup).attrs({
  className: generateClassNames(baseClassName, 'input'),
})<InputProps>(
  () => css`
    & > input::-webkit-calendar-picker-indicator {
      display: none;
      -webkit-appearance: none;
    }
  `
);

const Styled = applyDisplayNames({
  DatePicker,
  DatePickerInput,
  Placeholder,
});

export default Styled;
