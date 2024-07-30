import {componentWrapperDecorator, Meta, StoryObj} from '@storybook/angular';
import { InputSwitch } from 'primeng/inputswitch';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<InputSwitch> = {
  title: 'Primeng/Slide Toggle',
  component: InputSwitch,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
    }
  },

};

export default meta;
type Story = StoryObj<InputSwitch>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
