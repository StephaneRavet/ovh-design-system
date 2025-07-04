import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { FormField, FormFieldLabel } from '../../../../ods-react/src/components/form-field/src';
import { Quantity, QuantityControl, QuantityInput, type QuantityInputProp, type QuantityProp } from '../../../../ods-react/src/components/quantity/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { excludeFromDemoControls, orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<QuantityProp>;
type DemoArg = Partial<QuantityProp> & Partial<QuantityInputProp> & {};

const meta: Meta<QuantityProp> = {
  argTypes: excludeFromDemoControls(['defaultValue', 'name', 'onValueChange', 'required', 'value']),
  component: Quantity,
  subcomponents: { QuantityControl, QuantityInput },
  title: 'React Components/Quantity',
};

export default meta;

export const Demo: StoryObj = {
  render: (arg: DemoArg) => (
    <Quantity
      disabled={ arg.disabled }
      invalid={ arg.invalid }
      max={ arg.max }
      min={ arg.min }
      readOnly={ arg.readOnly }
      step={ arg.step }>
      <QuantityControl>
        <QuantityInput placeholder={ arg.placeholder } />
      </QuantityControl>
    </Quantity>
  ),
  argTypes: orderControls({
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: { type: 'boolean' },
    },
    invalid: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'boolean',
    },
    max: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: { type: 'number' },
    },
    min: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: { type: 'number' },
    },
    placeholder: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: { summary: 'string' },
      },
      control: 'text',
    },
    readOnly: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'boolean',
    },
    step: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: { type: 'number' },
    },
  }),
};

export const Default: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Quantity>
      <QuantityControl>
        <QuantityInput />
      </QuantityControl>
    </Quantity>
  ),
};

export const Disabled: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Quantity disabled>
      <QuantityControl>
        <QuantityInput />
      </QuantityControl>
    </Quantity>
  ),
};

export const InFormField: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <FormField>
      <FormFieldLabel>
        Set a quantity:
      </FormFieldLabel>

      <Quantity>
        <QuantityControl>
          <QuantityInput />
        </QuantityControl>
      </Quantity>
    </FormField>
  ),
};

export const Max: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Quantity max={ 10 }>
      <QuantityControl>
        <QuantityInput />
      </QuantityControl>
    </Quantity>
  ),
};

export const Min: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Quantity min={ 0 }>
      <QuantityControl>
        <QuantityInput />
      </QuantityControl>
    </Quantity>
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <Quantity
      defaultValue="0"
      min={ 0 }>
      <QuantityControl>
        <QuantityInput />
      </QuantityControl>
    </Quantity>
  ),
};

export const Readonly: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Quantity readOnly>
      <QuantityControl>
        <QuantityInput />
      </QuantityControl>
    </Quantity>
  ),
};

export const Step: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Quantity step={ 10 }>
      <QuantityControl>
        <QuantityInput />
      </QuantityControl>
    </Quantity>
  ),
};
