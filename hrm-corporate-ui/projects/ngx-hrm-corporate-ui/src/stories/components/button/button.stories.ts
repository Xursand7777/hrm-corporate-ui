import type { Meta, StoryObj } from '@storybook/angular';
import { Button } from 'primeng/button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<Button> = {
  title: 'Primeng/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    link: {
      control: 'boolean',
    },
    type: {
      control: 'text',
    },
    loading: {
      control: 'boolean',
      description: ''
    },
    label: {
      control: 'text'
    },
    badge: {
      control: 'text'
    },
    plain: {
      control: 'boolean'
    },
    raised: {
      control: 'boolean',
      description: 'Add a shadow to indicate elevation.'
    },
    rounded: {
      control: 'boolean',
      description: 'Add a circular border radius to the button.',
    },
    severity: {
      control: {
        type: 'select',
      },
      options: [null, 'success' , 'info' , 'warning' , 'danger' , 'help' , 'primary' , 'secondary' , 'contrast' ],
      table: {
        defaultValue: {
          summary: undefined
        }
      },
      description: 'Defines the style of the button.'
    },
    disabled: {
      control: 'boolean',
      description: 'When present, it specifies that the component should be disabled.',
      name: 'disabled',
    }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<Button>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
