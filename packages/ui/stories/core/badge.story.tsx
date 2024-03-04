import React from 'react';
import type { Meta, Story } from '@storybook/react';

import _Badge, { BadgeProps } from '../../src/core/badge';
import { BadgeColor } from '../../src/utils/types';
import { StoryGroup } from './types';

export const Badge = _Badge;

export default {
  // title: `${StoryGroup.DataDisplay}/Badge`,
  component: Badge,
  excludeStories: ['Badge'],
} as Meta;

const defaultArgs = {
  color: BadgeColor.Secondary,
  badgeContent: '5',
  size: 20,
  fontSize: 12,
  padding: '0 6px',
};

const BasicTemplate: Story<BadgeProps> = (args) => <Badge {...args} />;

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
