import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { componentWrapperDecorator, Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { Accordion, AccordionModule } from 'primeng/accordion';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<Accordion> = {
  title: 'Primeng/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    multiple: {
      control: 'boolean',
    },
  },
  decorators: [
    moduleMetadata({
      imports: [
        AccordionModule,
        CommonModule,
        BrowserAnimationsModule,
        ButtonModule,
        BadgeModule,
        AvatarModule
      ]
    })
  ],
};

export default meta;
type Story = StoryObj<Accordion>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  render: (args: any) => ({
    template: `
    <p-accordion [multiple]="${args.multiple}" [activeIndex]="${0}">
      <p-accordionTab header="Header I">
          <p class="text-xs font-medium text-black">
              Lorem ipsum dolor sit amet...
          </p>
      </p-accordionTab>
      <p-accordionTab header="Header II">
          <p class="text-xs font-medium text-black">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...
          </p>
      </p-accordionTab>
      <p-accordionTab header="Header III">
          <p class="text-xs font-medium text-black">
              At vero eos et accusamus et iusto odio dignissimos...
          </p>
      </p-accordionTab>
    </p-accordion>`
  })
};

export const Multiple: Story = {
  args: {
    multiple: true,
  },
  render: (args: any) => ({
    template: `
    <p-accordion [multiple]="${args.multiple}" [activeIndex]="${0}">
      <p-accordionTab header="Header I">
          <p class="text-xs font-medium text-black">
              Lorem ipsum dolor sit amet...
          </p>
      </p-accordionTab>
      <p-accordionTab header="Header II">
          <p class="text-xs font-medium text-black">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...
          </p>
      </p-accordionTab>
      <p-accordionTab header="Header III">
          <p class="text-xs font-medium text-black">
              At vero eos et accusamus et iusto odio dignissimos...
          </p>
      </p-accordionTab>
    </p-accordion>`
  })
};

export const Disabled: Story = {
  render: (args: any) => ({
    template: `
    <p-accordion [multiple]="${args.multiple}" [activeIndex]="${0}">
      <p-accordionTab header="Header I">
          <p class="text-xs font-medium text-black">
              Lorem ipsum dolor sit amet...
          </p>
      </p-accordionTab>
      <p-accordionTab header="Header II">
          <p class="text-xs font-medium text-black">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...
          </p>
      </p-accordionTab>
      <p-accordionTab header="Header III">
          <p class="text-xs font-medium text-black">
              At vero eos et accusamus et iusto odio dignissimos...
          </p>
      </p-accordionTab>
      <p-accordionTab header="Header IIII" [disabled]="true">
          <p class="text-xs font-medium text-black">
              At vero eos et accusamus et iusto odio dignissimos...
          </p>
      </p-accordionTab>
    </p-accordion>`
  })
};

export const Template: Story = {
  render: (args: any) => ({
    template: `
    <p-accordion [multiple]="${args.multiple}" class="w-full" expandIcon="pi pi-plus" collapseIcon="pi pi-minus">
        <p-accordionTab>
            <ng-template pTemplate="header">
                <span class="flex items-center gap-2 w-full">
                    <p-avatar
                        image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png"
                        shape="circle" />
                    <span class="font-bold white-space-nowrap">
                        Amy Elsner
                    </span>
                    <p-badge value="3" class="ml-auto mr-2" />
                </span>
            </ng-template>
            <p class="m-0 text-xs font-medium text-black">
                Lorem ipsum dolor sit amet...
            </p>
        </p-accordionTab>
        <p-accordionTab>
            <ng-template pTemplate="header">
                <span class="flex items-center gap-2 w-full">
                    <p-avatar
                        image="https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png"
                        shape="circle" />
                    <span class="font-bold white-space-nowrap">
                        Onyama Limba
                    </span>
                    <p-badge value="4" class="ml-auto mr-2" />
                </span>
            </ng-template>
            <p class="m-0 text-xs font-medium text-black">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...
            </p>
        </p-accordionTab>
        <p-accordionTab>
            <ng-template pTemplate="header">
                <span class="flex items-center gap-2 w-full">
                    <p-avatar
                        image="https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png"
                        shape="circle" />
                    <span class="font-bold white-space-nowrap">
                        Ioni Bowcher
                    </span>
                    <p-badge value="2" class="ml-auto mr-2" />
                </span>
            </ng-template>
            <p class="m-0 text-xs font-medium text-black">
                At vero eos et accusamus et iusto odio dignissimos...
            </p>
        </p-accordionTab>
    </p-accordion>`
  })
};
