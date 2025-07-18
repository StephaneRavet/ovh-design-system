import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { CARD_COLOR, CARD_COLORS, Card, type CardProp } from '../../../../ods-react/src/components/card/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<CardProp>;

const meta: Meta<CardProp> = {
  component: Card,
  title: 'React Components/Card',
};

export default meta;

export const Demo: Story = {
  argTypes: orderControls({
    color: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: { summary: 'CARD_COLOR' },
      },
      control: 'select',
      options: CARD_COLORS,
    },
    children: {
      table: {
        category: CONTROL_CATEGORY.slot,
      },
      control: 'text',
    },
  }),
  args: {
    children: 'Hello, world!',
  },
};

export const Color: Story = {
  decorators: [(story) => <div style={{ display: 'flex', gap: '16px' }}>{ story() }</div>],
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Card color={ CARD_COLOR.critical }>
        <p>Critical</p>
      </Card>

      <Card color={ CARD_COLOR.information }>
        <p>Information</p>
      </Card>

      <Card color={ CARD_COLOR.neutral }>
        <p>Neutral</p>
      </Card>

      <Card color={ CARD_COLOR.primary }>
        <p>Primary</p>
      </Card>

      <Card color={ CARD_COLOR.success }>
        <p>Success</p>
      </Card>

      <Card color={ CARD_COLOR.warning }>
        <p>Warning</p>
      </Card>
    </>
  ),
};

export const Default: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Card>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
    </Card>
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <Card style={{ padding: '8px' }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
      Interdum et malesuada fames ac ante ipsum primis in faucibus.
    </Card>
  ),
};
