import React from 'react';
import PT, { Validator } from 'prop-types';

import { InputSize } from '../../utils/types';
import { intrinsicComponent, objectValues } from '../../utils/functions';
import Label from '../label';
import type { LabelProps } from '../label';
import { propTypes as labelPropTypes } from '../label/label.component';
import Select from '../select';
import type { SelectProps } from '../select';
import { propTypes as selectPropTypes } from '../select/select.component';
import FormHint from '../form-hint';
import type { SelectGroupProps } from './select-group.props';
import Styled from './select-group.styles';

const SelectGroup = intrinsicComponent<SelectGroupProps, HTMLDivElement>(
  (
    {
      children,
      size,
      error,
      label,
      placeholder,
      hint,
      LabelProps: LabelPropsData,
      SelectProps: SelectPropsData,
      selectProps,
      scroll = true,
      fullWidth,
      showSelectionKey,
      value,
      multiple,
      hideMenuItemsActions,
      onChange,
      readOnly,
      disabled,
      showClearIcon,
      ...rest
    }: SelectGroupProps,
    ref
  ): JSX.Element => {
    const renderLabel = (): string | number | null | JSX.Element | any => {
      if (label) {
        if (typeof label === 'function') {
          return label({ error });
        }

        if (typeof label === 'object') {
          return label;
        }

        return (
          <Label error={error} {...(LabelPropsData || {})}>
            {label}
          </Label>
        );
      }

      return null;
    };

    const renderHint = (): string | number | null | JSX.Element | any => {
      if (hint) {
        if (typeof hint === 'function') {
          return hint({ error });
        }

        if (typeof hint === 'object') {
          return hint;
        }

        return <FormHint error={error}>{hint}</FormHint>;
      }

      return null;
    };

    return (
      <Styled.SelectGroup {...rest} ref={ref}>
        {renderLabel()}

        <Select
          error={error}
          value={value}
          size={size}
          scroll={scroll}
          onChange={onChange}
          multiple={multiple}
          fullWidth={Boolean(fullWidth)}
          {...(SelectPropsData || {})}
          selectProps={selectProps}
          readOnly={readOnly}
          disabled={disabled}
          placeholder={placeholder}
          showSelectionKey={showSelectionKey}
          hideMenuItemsActions={hideMenuItemsActions}
          showClearIcon={showClearIcon}
        >
          {children}
        </Select>

        {renderHint()}
      </Styled.SelectGroup>
    );
  }
);

SelectGroup.defaultProps = {
  error: false,
  fullWidth: false,
  readOnly: false,
  disabled: false,
  scroll: true,
  hideMenuItemsActions: false,
};

const { size, ...restSelectPropTypes } = selectPropTypes;

SelectGroup.propTypes = {
  ...restSelectPropTypes, // Extends from SelectProps: multiple, error, children, value, onChange
  fullWidth: PT.bool,
  size: PT.oneOf(objectValues(InputSize)),
  label: PT.node,
  hint: PT.node,
  LabelProps: PT.exact(labelPropTypes) as Validator<LabelProps>,
  SelectProps: PT.exact(selectPropTypes) as Validator<SelectProps>,
  selectProps: PT.object,
  readOnly: PT.bool,
  scroll: PT.bool,
  showSelectionKey: PT.bool,
  disabled: PT.bool,
};

export default SelectGroup;
