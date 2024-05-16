import styled, { css } from 'styled-components';

import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';

const baseClassName = 'Rating';

const Rating = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})`
  display: inline-flex;
  align-items: center;
`;
const Item = styled.label.attrs({
  className: generateClassNames(baseClassName, 'Item'),
})<{ readOnly?: boolean }>(
  ({ readOnly = false }) => css`
    position: relative;
    display: inline-flex;
    margin-left: 3px;

    &:first-child {
      margin-left: 0;
    }

    ${!readOnly &&
    css`
      cursor: pointer;
    `}

    input {
      position: absolute;
      visibility: hidden;
    }
  `
);

const Icon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Icon'),
})<With<WithTheme, { active: boolean }>>(
  ({ active = false, theme: { palette } }) => css`
    display: inline-flex;
    color: ${active ? palette[PColor.Warning] : palette[PColor.TextPrimary]};
    transition: all 100ms ease-out;
  `
);

const Styled = applyDisplayNames({
  Rating,
  Item,
  Icon,
});

export default Styled;
