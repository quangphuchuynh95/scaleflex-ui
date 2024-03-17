import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Documentation } from '@scaleflex/icons';
import Menu, { MenuProps } from '../../src/core/menu';
import MenuItem from '../../src/core/menu-item';
import Button from '../../src/core/button';

const meta: Meta<typeof Menu> = {
  title: 'Navigation/Menu',
  component: Menu,
  excludeStories: ['Menu'],
  argTypes: {
    children: {
      description: 'Menu contents, normally `MenuItem`s.',
    },
    scroll: {
      description: 'Prop directly change scroll design',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Menu>;

const defaultArgs = {
  list: [
    {
      content: 'item1',
      onClick: () => console.log('item1'),
      prefix: <Documentation width="14" height="14" color="#768A9F" />,
      subList: [
        { content: 'item1.1', key: 'Item 1.1' },
        {
          content: 'divider',
          key: 'ITEM1.1_DIVIDER',
        },
        { content: 'item1.2', key: 'Item 1.2', onClick: () => console.log('item1.2') },
        {
          content: 'divider',
          key: 'ITEM1.2_DIVIDER',
        },
        { content: 'item1.3', key: 'Item 1.3' },
        {
          content: 'divider',
          key: 'ITEM1.3_DIVIDER',
        },
        {
          content: 'item1.4',
          key: 'Item 1.4',
          subList: [
            { content: 'item1.4.1', key: 'Item 1.4.1' },
            { content: 'item1.4.2', key: 'Item 1.4.2' },
            { content: 'item1.4.3', key: '1tem 4.4.3' },
          ],
        },
      ],
      key: 'Item 1',
    },

    { content: 'item 2', prefix: <Documentation width="14" height="14" color="#768A9F" />, key: 'Item 2' },
  ],
};

const BasicTemplate = (args: MenuProps): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState(undefined);
  const handleClick = (event: any): void => setAnchorEl(event.currentTarget);
  const handleClose = (): void => setAnchorEl(undefined);

  return (
    <div>
      <Button onClick={handleClick} color="basic">
        Open menu
      </Button>

      <Menu {...args} anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem list={defaultArgs.list} />
        <MenuItem onClick={handleClose}>Item 3</MenuItem>
        <MenuItem onClick={handleClose}>Item 4</MenuItem>
      </Menu>
    </div>
  );
};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => <BasicTemplate {...args} />,
};
