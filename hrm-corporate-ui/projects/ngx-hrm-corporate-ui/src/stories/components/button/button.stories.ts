import {componentWrapperDecorator, Meta, StoryObj} from '@storybook/angular';
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
    text: {
      control:'boolean'
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
    icon:{
      control: 'select',
      options: ['none', 'check icon', 'image icon'],
      mapping: {
        'none': null,
        'check icon': 'pi pi-check',
        'image icon': 'pi pi-image'
      }
    },
    iconPos: {
      control: 'radio',
      options: ['right', 'left']
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

export const Disabled: Story = {
  args: {
    label: 'Button',
    disabled: true,
  },
};

export const Rounded: Story = {
  args: {
    label: 'Button',
    rounded: true,
  },
};

export const Outlined: Story = {
  args: {
    label: 'Button',
    outlined: true,
  },
};

export const OutlinedRounded: Story = {
  args: {
    label: 'Button',
    rounded: true,
    outlined: true,
  },
};

export const OutlinedWithIcon: Story = {
  args: {
    label: 'Button',
    outlined: true,
    icon: 'pi pi-image',
    iconPos: 'right'
  },
};

export const Text: Story = {
  args: {
    label: 'Button',
    text: true,
  },
};

export const TextWithIcon: Story = {
  args: {
    label: 'Button',
    text: true,
    icon: 'pi pi-image',
    iconPos: 'right'
  },
};

export const Link: Story = {
  args: {
    label: 'Button',
    link: true
  },
};



export const Small: Story = {
  args: {
    label: 'Button',
    size: 'small'
  },
};

export const SmallWithIcon: Story = {
  args: {
    label: 'Button',
    size: 'small',
    icon: 'pi pi-image',
    iconPos: 'right'
  },
};

export const IconOnly: Story = {
  args: {
    icon: 'pi pi-image',
  },
};

export const IconOnlyOutline: Story = {
  args: {
    icon: 'pi pi-image',
    outlined: true
  },
};

export const IconOnlyText: Story = {
  args: {
    icon: 'pi pi-image',
    text: true
  },
};


