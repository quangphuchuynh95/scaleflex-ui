import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import type { SwitcherProps } from './switcher.props';
import Styled from './switcher.styles';
import { SwitcherSize } from './switcher-size';

const Switcher = intrinsicComponent<SwitcherProps, HTMLDivElement>(
  (
    {
      size = SwitcherSize.Sm,
      checked = false,
      onChange,
      SwitcherPropsData,
      switcherProps,
      readOnly,
      disabled,
      ...rest
    }: SwitcherProps,
    ref
  ): JSX.Element => (
    <Styled.SwitcherWrapper disabled={disabled} ref={ref} {...SwitcherPropsData} {...rest}>
      <Styled.Input
        checked={checked}
        onChange={readOnly || disabled ? undefined : onChange}
        readOnly={readOnly}
        $disabled={disabled}
        size={size}
        {...switcherProps}
      />
      <Styled.Switcher disabled={disabled} size={size} />
    </Styled.SwitcherWrapper>
  )
);

Switcher.propTypes = {
  checked: PT.bool,
  onChange: PT.func,
  switcherProps: PT.object,
  SwitcherPropsData: PT.object,
  readOnly: PT.bool,
  disabled: PT.bool,
  size: PT.oneOf(objectValues(SwitcherSize)),
};

export default Switcher;
