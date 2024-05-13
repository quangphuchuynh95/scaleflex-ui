import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import { getIconSize } from '../button/button.utils';
import type { IconButtonProps } from './icon-button.props';
import { ButtonSize, IconButtonColor } from '../../utils/types';
import Styled from './icon-button.styles';

const IconButton = intrinsicComponent<IconButtonProps, HTMLButtonElement>(
  (
    { children, size = ButtonSize.Md, color = IconButtonColor.Secondary, active = false, ...rest }: IconButtonProps,
    ref
  ): JSX.Element => (
    <Styled.IconButton {...rest} size={size} color={color} $active={active} ref={ref}>
      {children && (typeof children === 'function' ? children({ size: getIconSize(size) }) : children)}
    </Styled.IconButton>
  )
);

IconButton.propTypes = {
  children: PT.oneOfType([PT.node, PT.func]).isRequired,
  size: PT.oneOf(objectValues(ButtonSize)),
  color: PT.oneOf(objectValues(IconButtonColor)),
  disabled: PT.bool,
  active: PT.bool,
};

export default IconButton;
