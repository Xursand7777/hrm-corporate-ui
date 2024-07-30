import {argsToTemplate, componentWrapperDecorator, Meta, StoryObj} from '@storybook/angular';
import { Channel } from '@storybook/channels';
import { ProgressBar } from 'primeng/progressbar'
import { UPDATE_STORY_ARGS } from 'storybook/internal/core-events';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ProgressBar> = {
  title: 'Primeng/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'number',
      description: 'Current value of the progress'
    },
    color: {
      control: 'color',
      description: 'Color for the background of the progress',
    },
    showValue: {
      control: 'boolean',
      description: 'Whether to display the progress bar value'
    },
    mode: {
      control: 'select',
      options: ['determinate', 'indeterminate'],
      description: 'Defines the mode of the progress'
    }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<ProgressBar>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    value: 50,
  },
};

export const Indeterminate: Story = {
  args: {
    mode: 'indeterminate'
  },
};

let dynamicId: string;
let dynamicArgs: any;
export const Dynamic: Story = {
  args: {
    value: 0,
  },
  play: () =>{
    const channel = (window as any).__STORYBOOK_ADDONS_CHANNEL__ as Channel;
    channel.emit(UPDATE_STORY_ARGS, {
      storyId: dynamicId,
      updatedArgs: { value: 0 },
      template: `<p-progressBar ${argsToTemplate(dynamicArgs)}></p-progressBar> `,
    });
    setTimeout(() => {
      channel.emit(UPDATE_STORY_ARGS, {
        storyId: dynamicId,
        updatedArgs: { value: 50 },
        template: `<p-progressBar ${argsToTemplate(dynamicArgs)}></p-progressBar> `,
      });
    }, 1000);
    setTimeout(() => {
      channel.emit(UPDATE_STORY_ARGS, {
        storyId: dynamicId,
        updatedArgs: { value: 100 },
        template: `<p-progressBar ${argsToTemplate(dynamicArgs)}></p-progressBar> `,
      });
    }, 2000);
  },
  render: (args: any, {id}) => {
    dynamicId = id;
    dynamicArgs = args;
    return {
      props: {
        ...args,
      },
    }
  },
}
