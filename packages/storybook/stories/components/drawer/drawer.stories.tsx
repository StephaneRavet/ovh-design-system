import { Button } from '@ovhcloud/ods-react-button/src';
import { type Meta, type StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import {
  Drawer,
  DRAWER_POSITION,
  DRAWER_POSITIONS,
  DrawerBody,
  DrawerContent,
  DrawerContentProp,
  type DrawerProp,
  type DrawerOpenChangeDetail,
  DrawerTrigger,
} from '../../../../ods-react/src/components/drawer/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { excludeFromDemoControls, orderControls } from '../../../src/helpers/controls';
import { staticSourceRenderConfig } from '../../../src/helpers/source';

type Story = StoryObj<DrawerProp>;
type DemoArg = Partial<DrawerProp> & Partial<DrawerContentProp> & {
  content?: string;
}

const meta: Meta<DrawerProp> = {
  argTypes: excludeFromDemoControls(['defaultOpen', 'onOpenChange', 'open']),
  component: Drawer,
  subcomponents: { DrawerBody, DrawerContent, DrawerTrigger },
  title: 'React Components/Drawer',
};

export default meta;

export const Demo: StoryObj = {
  render: (arg: DemoArg) => (
    <Drawer closeOnEscape={arg.closeOnEscape} closeOnInteractOutside={arg.closeOnInteractOutside}>
      <DrawerTrigger asChild>
        <Button>
          Trigger Drawer
        </Button>
      </DrawerTrigger>

      <DrawerContent position={arg.position}>
        <DrawerBody>
          { arg.content }
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  ),
  argTypes: orderControls({
    closeOnEscape: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: { type: 'boolean' },
    },
    closeOnInteractOutside: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: { type: 'boolean' },
    },
    content: {
      table: {
        category: CONTROL_CATEGORY.slot,
      },
      control: 'text',
    },
    position: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: { summary: 'DRAWER_POSITION' },
      },
      control: { type: 'select' },
      options: DRAWER_POSITIONS
    }
  }),
  args: {
    content: 'My drawer content',
  },
};

export const Controlled: Story = {
  tags: ['!dev'],
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  render: ({}) => {
    const [isOpen, setIsOpen] = useState(false);

    function onOpenChange({ open }: DrawerOpenChangeDetail) {
      setIsOpen(open);
    }

    function openDrawer() {
      setIsOpen(true);
    }

    return (
      <>
        <Button onClick={ openDrawer }>
          Trigger Drawer
        </Button>

        <Drawer
          onOpenChange={ onOpenChange }
          open={ isOpen }>
          <DrawerContent>
            <DrawerBody>
              Content
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  },
};

export const Default: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>
          Trigger Drawer
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <DrawerBody>
          My drawer content
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>
          Trigger Drawer
        </Button>
      </DrawerTrigger>

      <DrawerContent position={ DRAWER_POSITION.left}>
        <DrawerBody>
          My drawer content
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  ),
};

export const Position: Story = {
  decorators: [(story) =>
    <div style={{ display: 'flex', flexFlow: 'row', alignItems: 'center', gap: '8px' }}>{ story() }</div>],
  tags: ['!dev'],
  render: ({}) => (
    <>
    <Drawer>
      <DrawerTrigger asChild>
        <Button>
          Top drawer
        </Button>
      </DrawerTrigger>

      <DrawerContent position={DRAWER_POSITION.top}>
        <DrawerBody>
          Top drawer content
        </DrawerBody>
      </DrawerContent>
    </Drawer>

   <Drawer>
      <DrawerTrigger asChild>
        <Button>
          Left drawer
        </Button>
      </DrawerTrigger>

      <DrawerContent position={DRAWER_POSITION.left}>
        <DrawerBody>
          Left drawer content
        </DrawerBody>
      </DrawerContent>
    </Drawer>

   <Drawer>
      <DrawerTrigger asChild>
        <Button>
          Right Drawer
        </Button>
      </DrawerTrigger>

      <DrawerContent position={DRAWER_POSITION.right}>
        <DrawerBody>
          Right drawer content
        </DrawerBody>
      </DrawerContent>
    </Drawer>

   <Drawer>
      <DrawerTrigger asChild>
        <Button>
          Bottom Drawer
        </Button>
      </DrawerTrigger>

      <DrawerContent position={DRAWER_POSITION.bottom}>
        <DrawerBody>
          Bottom drawer content
        </DrawerBody>
      </DrawerContent>
    </Drawer>
    </>
  ),
}
