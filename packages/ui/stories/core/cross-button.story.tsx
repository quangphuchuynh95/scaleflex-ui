import React from 'react';
import type { Meta, Story } from '@storybook/react';
import _CrossButton, { CrossButtonProps } from '../../src/core/cross-button';
import { Size } from '../../src/core/cross-button/types';
import { StoryGroup } from './types';

export const CrossButton = _CrossButton;

export default {
  // title: `${StoryGroup.Inputs}/CrossButton`,
  component: CrossButton,
  excludeStories: ['CrossButton'],
} as Meta;

const defaultArgs = {
  size: Size.Lg,
};

const BasicTemplate: Story<CrossButtonProps> = ({ ...args }) => <CrossButton {...args} />;

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
