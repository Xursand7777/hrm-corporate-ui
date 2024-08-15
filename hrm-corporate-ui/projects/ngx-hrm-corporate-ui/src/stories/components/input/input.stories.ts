import { componentWrapperDecorator, Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { IconField, IconFieldModule } from 'primeng/iconfield';
import { InputText, InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<InputText> = {
  title: 'Primeng/Input',
  component: InputText,
  decorators: [
    moduleMetadata({
      imports: [
        IconFieldModule,
        InputTextModule,
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
type Story = StoryObj<InputText>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  render: () => ({
    template: `
      <div class="flex flex-col gap-1 w-64">
        <label for="username" class="label-required">FIO</label>
        <p-iconField iconPosition="right">
          <p-inputIcon styleClass="pi pi-angle-right" />
          <input
            pInputText
            type="text"
            id="username"
            [required]="true"
            placeholder="FIO"
            aria-describedby="username-help" />
          </p-iconField>
      </div>
    `
  })
};

export const Error: Story = {
  render: () => ({
    template: `
      <div class="flex flex-col gap-1 w-64">
        <label for="username" class="label-required">FIO</label>
        <p-iconField iconPosition="right">
          <p-inputIcon styleClass="pi pi-angle-right" />
          <input
            pInputText
            class="ng-dirty ng-invalid"
            type="text"
            id="username"
            [required]="true"
            placeholder="FIO"
            aria-describedby="username-help" />
          </p-iconField>
        <small id="username-help" class="text-[var(--error-500)]">
          Данные введены не верно, повторите попытку.
        </small>
      </div>
    `
  })
};

export const Disabled: Story = {
  render: () => ({
    template: `
      <div class="flex flex-col gap-1 w-64">
        <label for="username" class="label-required label-disabled">FIO</label>
        <p-iconField iconPosition="right">
          <p-inputIcon styleClass="pi pi-angle-right opacity-50" />
          <input
            pInputText
            [disabled]="true"
            type="text"
            id="username"
            [required]="true"
            placeholder="FIO"
            aria-describedby="username-help" />
        </p-iconField>
      </div>
    `
  })
};
