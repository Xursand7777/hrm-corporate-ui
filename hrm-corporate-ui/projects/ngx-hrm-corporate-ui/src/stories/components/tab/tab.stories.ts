import { CommonModule } from '@angular/common';
import { componentWrapperDecorator, Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { TabView, TabViewModule } from 'primeng/tabview';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<TabView> = {
  title: 'Primeng/Tab',
  component: TabView,
  tags: ['autodocs'],
  argTypes: {
  },
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        TabViewModule,
        BadgeModule,
        AvatarModule
      ]
    })
  ],
  render: (args: any) => ({
    template: `
        <p-tabView>
        <p-tabPanel header="Header I">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p-tabPanel>
        <p-tabPanel header="Header II">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
        </p-tabPanel>
        <p-tabPanel header="Header III">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
        </p-tabPanel>
    </p-tabView>`
  })
};

export default meta;
type Story = StoryObj<TabView>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
};
export const Disabled: Story = {
  render: (args: any) => ({
    template: `
      <p-tabView>
          <p-tabPanel header="Header I">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p-tabPanel>
          <p-tabPanel header="Header II">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...
          </p-tabPanel>
          <p-tabPanel header="Header III">
                  At vero eos et accusamus et iusto odio dignissimos...
          </p-tabPanel>
          <p-tabPanel [disabled]="true" header="Header IV" />
      </p-tabView>`
  })
}
export const Template: Story = {
  render: (args: any) => ({
    template: `
<div class="card">
    <p-tabView styleClass="tabview-custom">
        <p-tabPanel>
            <ng-template pTemplate="header">
                <div class="flex items-center gap-2">
                    <p-avatar
                        image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png"
                        shape="circle" />
                    <span class="font-bold whitespace-nowrap m-0">
                        Amy Elsner
                    </span>
                </div>
            </ng-template>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </p>
        </p-tabPanel>
        <p-tabPanel header="Header II">
            <ng-template pTemplate="header">
                <div class="flex items-center gap-2">
                    <p-avatar
                        image="https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png"
                        shape="circle" />
                    <span class="font-bold whitespace-nowrap m-0">
                        Onyama Limba
                    </span>
                </div>
            </ng-template>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...
            </p>
        </p-tabPanel>
        <p-tabPanel header="Header III">
            <ng-template pTemplate="header">
                <div class="flex items-center gap-2">
                    <p-avatar
                        image="https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png"
                        shape="circle" />
                    <span class="font-bold whitespace-nowrap m-0">
                        Ioni Bowcher
                    </span>
                    <p-badge value="2" />
                </div>
            </ng-template>
            <p>
                At vero eos et accusamus et iusto odio dignissimos...
            </p>
        </p-tabPanel>
    </p-tabView>
</div>`
  })
}

export const Closable: Story = {
  render: (args: any) => ({
    template: `
<p-tabView id="closableTabView">
    <p-tabPanel header="Header I" [selected]="true">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>
    </p-tabPanel>
    <p-tabPanel header="Header II" [closable]="true">
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...
        </p>
    </p-tabPanel>
    <p-tabPanel header="Header III" [closable]="true">
        <p>
            At vero eos et accusamus et iusto odio dignissimos...
        </p>
    </p-tabPanel>
</p-tabView>
`
  })
}
