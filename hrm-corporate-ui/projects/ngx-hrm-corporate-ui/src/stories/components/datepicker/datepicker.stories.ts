import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { componentWrapperDecorator, Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { Calendar, CalendarModule } from 'primeng/calendar'
import { InputIconModule } from 'primeng/inputicon';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<Calendar> = {
  title: 'Primeng/Datepicker',
  component: Calendar,
  decorators: [
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        CalendarModule,
        InputIconModule
      ]
    })
  ],
  tags: ['autodocs'],
  argTypes: {

  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<Calendar>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  render: () => ({
    template: `
      <div class="w-96 flex justify-center">
        <p-calendar
          [iconDisplay]="'input'"
          [showIcon]="true"
          [panelStyleClass]="w-32"
          inputId="icondisplay" />
      </div>
    `
  })
};
