import {componentWrapperDecorator, Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {Dropdown, DropdownModule} from 'primeng/dropdown';
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ChevronDownIcon} from "primeng/icons/chevrondown";
import {Signal} from "@angular/core";
import {OverlayModule} from "primeng/overlay";
import {TooltipModule} from "primeng/tooltip";
import {FormsModule} from "@angular/forms";
import {SpinnerModule} from "primeng/spinner";
import {ScrollerModule} from "primeng/scroller";
import {AutoFocusModule} from "primeng/autofocus";
import {SearchIcon} from "primeng/icons/search";
import {CheckIcon} from "primeng/icons/check";
import {BlankIcon} from "primeng/icons/blank";
import {SharedModule} from "primeng/api";
import {TimesIcon} from "primeng/icons/times";
import {SpinnerIcon} from "primeng/icons/spinner";
import { userEvent, within } from '@storybook/test';
import {FloatLabelModule} from "primeng/floatlabel";
import { expect } from '@storybook/jest';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<Dropdown> = {
  title: 'Primeng/Dropdown',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        SharedModule,
        BrowserAnimationsModule,
        ChevronDownIcon,
        OverlayModule,
        TooltipModule,
        DropdownModule,
        SpinnerIcon,
        FormsModule,
        SpinnerModule,
        ScrollerModule,
        AutoFocusModule,
        TimesIcon,
        SearchIcon,
        CheckIcon,
        BlankIcon,
        FloatLabelModule
      ]
    }),
    componentWrapperDecorator((story) => `<p-floatLabel>${story}  <label for="float-label">Select a something</label></p-floatLabel>`)
  ],
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    options: [],
    placeholder: {
      control: 'text',
      description: 'Indicates whether the placeholder is present.',
    },
    dataKey: {
      control: 'text',
      description: 'Indicates whether the datakey is present.',
    },
    inputId: {
      control: 'text',
      description: 'Indicated whether the floating label should be present.'
    },
    showClear: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
      description: 'Indicates whether the dropdown is in a loading state.',
    },
    styleClass: {
      control: 'text',
      description: 'CSS class for the component.',
    },
    readonly: {
      control: 'boolean',
      description: 'When true, the dropdown is read-only.',
    },
    required: {
      control: 'boolean',
      description: 'Specifies if the dropdown is required.',
    },
    virtualScroll: {
      control: 'boolean',
      description: 'Enables virtual scrolling for the dropdown.',
    },
    virtualScrollItemSize: {
      control: 'number',
      description: 'Specifies the item size for virtual scrolling.',
    },
    editable: {
      control: 'boolean',
      description: 'When true, the dropdown is editable.',
    },
    label: {
      type: "string",
      control: 'text',
      description: 'Label for the dropdown.',
    },
    disabled: {
      control: 'boolean',
      description: 'Specifies if the component should be disabled.',
      name: 'disabled',
    },
    // You can add more argTypes as needed
  },

  parameters: {
    actions: {
      handles: ['onClick', 'onChange'],
    },
    // Add more parameters if needed
  },
};

export default meta;
type Story = StoryObj<Dropdown>;

// Default story
export const Default: Story = {
  args: {
    optionLabel:'name',
    options: [
      { name: 'Select a something', code:'AA'},
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ],
    placeholder: 'Select a something' as unknown as Signal<any>
  }
};

export const EditableWithSearch: Story = {
  args: {
    optionLabel:'name',
    dataKey:'data-testid',
    inputId: 'float-label',
    editable: true,
    loading: true,
    virtualScroll: true,
    options: [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ],
    placeholder: 'Select a city' as unknown as Signal<any>
  }
};

export const SearchByInstitution: Story = {
  args: {
    optionLabel:'name',
    dataKey:'data-testid',
    editable: true,
    loading: true,
    virtualScroll: true,
    options: [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ],
    placeholder: 'Select a city' as unknown as Signal<any>
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    // Step 1: Проверяем состояние загрузки
    await step('Check loading state', async () => {
      const loadingElement = canvas.getByTestId('pi-spinner');
      expect(loadingElement).toBeVisible();
    });

    // Step 2: Ввод текста в поле ввода
    await step('Enter search text', async () => {
      const inputElement = canvas.getByTestId('input');
      await userEvent.type(inputElement, 'Paris');
    });

    // Step 3: Проверяем отображение результатов поиска
    await step('Check search results', async () => {
      const options = canvas.getAllByTestId('dropdown-option');
       await expect(options).toHaveLength(1);
             expect(options[0]).toHaveTextContent('Paris');
    });
  },
};
