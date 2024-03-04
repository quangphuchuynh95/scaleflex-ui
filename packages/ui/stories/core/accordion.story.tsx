import React, { useState, useEffect } from 'react';
import type { Meta, Story } from '@storybook/react';
import _Accordion, { AccordionProps } from '../../../src/core/accordion';

import { StoryGroup } from '../../core/types';

export const Accordion = _Accordion;

export default {
  // title: `${StoryGroup.Surfaces}/Accordion`,
  component: Accordion,
  argTypes: {
    children: {
      description: 'Accordion children are sub-module components: `AccordionHeader, AccordionDetails`.',
    },
  },
  excludeStories: ['Accordion'],
} as Meta;

const defaultArgs = {
  label: 'Folders (5)',
  expanded: false,
  hideIcon: false,
};

const BasicTemplate: Story<AccordionProps> = ({ expanded, ...args }) => {
  const [openState, setOpenState] = useState(expanded || false);

  useEffect(() => {
    setOpenState(expanded || false);
  }, [expanded]);

  return (
    <Accordion {...args} expanded={openState} onChange={(value) => setOpenState(value)}>
      <div>This is Scaleflex Accordion </div>
    </Accordion>
  );
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
