import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { applicationConfig, componentWrapperDecorator, Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { Button, ButtonModule } from 'primeng/button';
import { Sidebar, SidebarModule } from 'primeng/sidebar'
import { SidebarComponent } from './sidebar.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<SidebarComponent> = {
  title: 'System/Sidebar/Full',
  component: SidebarComponent,
  decorators: [
    moduleMetadata({
      imports: [
        SidebarModule,
        ButtonModule,
        BrowserAnimationsModule
      ]
    }),

  ],
};

export default meta;
type Story = StoryObj<SidebarComponent>;

export const Default: Story = {

};
