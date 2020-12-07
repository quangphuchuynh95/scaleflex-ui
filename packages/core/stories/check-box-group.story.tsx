import React, { useState, useEffect } from 'react';
import type { Meta, Story } from '@storybook/react';
import _CheckBoxGroup, { CheckBoxGroupProps } from '../src/check-box-group';
import { StoryGroup } from './types';

export const CheckBoxGroup = _CheckBoxGroup;

export default {
  title: `${StoryGroup.Inputs}/CheckBoxGroup`,
  component: CheckBoxGroup,
  excludeStories: ['CheckBoxGroup'],
} as Meta;

const defaultArgs = {
  label: 'label',
  checked: false
};

const BasicTemplate: Story<CheckBoxGroupProps> = ({
  checked, ...args
}) => {
  const [checkedState, setCheckedState] = useState(false);

  useEffect(() => {
    setCheckedState(checked || false);
  }, [checked]);

  return (
    <CheckBoxGroup
      {...args}
      checked={checkedState}
      onChange={(event) => setCheckedState(event.target.checked)}
    />
  );
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
