import React, { useState, useEffect } from 'react';
import type { Meta, Story } from '@storybook/react';
import { RadioSize } from '@scaleflex/ui/core/radio';

import _RadioGroup, { RadioGroupProps } from '../../src/core/radio-group';
import { StoryGroup } from './types';

export const RadioGroup = _RadioGroup;

export default {
  // title: `${StoryGroup.Inputs}/Radio/RadioGroup`,
  component: RadioGroup,
  excludeStories: ['RadioGroup'],
  argTypes: {
    radioProps: {
      description: 'input attributes applied directly input element.',
    },
  },
} as Meta;

const defaultArgs = {
  label: 'Group',
  checked: false,
  readOnly: false,
  disabled: false,
  size: RadioSize.Sm,
};

const BasicTemplate: Story<RadioGroupProps> = ({ checked, ...args }) => {
  const [checkedState, setCheckedState] = useState(false);

  useEffect(() => {
    setCheckedState(checked || false);
  }, [checked]);

  return <RadioGroup {...args} checked={checkedState} onChange={(event) => setCheckedState(event.target.checked)} />;
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
