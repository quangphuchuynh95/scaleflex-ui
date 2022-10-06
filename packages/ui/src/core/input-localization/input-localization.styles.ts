import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';
import { InputSize } from '@scaleflex/ui/utils/types';
import type { InputLocalizationProps } from './input-localization.props';
import { sizeInputLabelMixin } from './input-localization.mixin';
// import { BorderRadiusSize as BRSize } from '../../utils/types/shape';

const baseClassName = 'InputLocalization';

const Icon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Icon'),
})(
  ({ theme: { palette } }: WithTheme) => css`
    display: flex;
    flex-shrink: 0;
    color: ${palette[PColor.IconsPrimary]};

    &:first-child {
      margin-right: 4px;
    }

    &:last-child {
      margin-left: 6px;
    }
  `
);

const Container = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Container'),
})`
  display: inline-flex;
`;

const InputLocalization = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({
    size = InputSize.Md,
    theme,
  }: With<WithTheme, InputLocalizationProps>) => css`
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: ${theme.palette[PColor.LinkStateless]};

    &:hover {
      color: ${theme.palette[PColor.LinkHover]};
    }

    ${sizeInputLabelMixin[size]}
  `
);

const Label = styled.label.attrs({
  className: generateClassNames(baseClassName, 'Label'),
})`
  flex-grow: 1;
`;

const Styled = applyDisplayNames({
  Container,
  InputLocalization,
  Label,
  Icon,
});

export default Styled;
