import { componentWrapperDecorator, Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { BadgeModule } from 'primeng/badge';
import { Button, ButtonModule } from 'primeng/button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<Button> = {
  title: 'System/Table/Buttons',
  component: Button,
  decorators: [
    moduleMetadata({
      imports: [
        BadgeModule,
        ButtonModule
      ]
    })
  ],
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
      options: [null, 'success', 'info', 'warning', 'danger', 'help', 'primary', 'secondary', 'contrast'],
      table: {
        defaultValue: {
          summary: undefined
        }
      },
      description: 'Defines the style of the button.'
    },
    icon: {
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
};

export default meta;
type Story = StoryObj<Button>;

export const EditButton: Story = {
  args: {
    icon: 'pi pi-pencil',
    severity: 'secondary',
    text: true,
  },
};

export const DeleteButton: Story = {
  args: {
    icon: 'pi pi-trash',
    severity: 'secondary',
    text: true,
  },
};

export const FilterButton: Story = {
  render: (args: any) => ({
    template: `
      <p-button [icon]="'pi pi-filter'" styleClass="px-4"></p-button>
    `
  })
};

export const FilledFilterButton: Story = {
  render: (args: any) => ({
    template: `
      <p-button [icon]="'pi pi-filter'" styleClass="px-4"><i class="pi pi-times bg-[var(--error-500)] text-[.5rem] p-0.5 rounded-full absolute top-[10%] right-[10%]"></i></p-button>
    `
  })
};
