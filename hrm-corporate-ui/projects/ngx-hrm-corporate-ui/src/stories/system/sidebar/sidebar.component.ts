import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { DividerModule } from 'primeng/divider'

@Component({
  selector: 'sidebar-component',
  template: `
    <p-sidebar [visible]="true" [modal]="false" [showCloseIcon]="false" [blockScroll]="true" [styleClass]="expandedSidebar? 'w-96 transition-[width]' : 'w-16 transition-[width]'" class="[&_.p-sidebar-content]:overflow-y-visible">
      <ng-template pTemplate="header">
        <div class="w-full">
        <div class="flex items-center gap-2">
          <p-avatar
            image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png"
            shape="circle" />
            <!-- <span class="font-bold">
                Amy Elsner
            </span> -->
        </div>
        <p-divider class="[&_.p-divider]:!m-0 [&_.p-divider]:!mt-1 w-"/>
        </div>
      </ng-template>
      <div (click)="expandedSidebar = !expandedSidebar"
        class="absolute -right-2 top-1/2 hover:bg-gray-50 cursor-pointer bg-white py-7 rounded-r-lg shadow-[6px_0_14px_0_rgba(0,0,0,0.1)]">
      <i
        class="pi pi-angle-double-right text-sm text-gray-300 transition-transform"
        [class]="expandedSidebar? 'rotate-180': ''"></i>
      </div>
      <div class="flex flex-col mt-2 gap-5">
        <p-button icon="pi pi-home" text="true" severity="secondary" class="[&_.p-button-icon]:text-lg [&_.p-button-icon]:text-black" styleClass="p-0"></p-button>
        <p-button icon="pi pi-search" text="true" severity="secondary" class="[&_.p-button-icon]:text-lg [&_.p-button-icon]:text-black" styleClass="p-0"></p-button>
        <p-button icon="pi pi-bars" text="true" severity="secondary" class="[&_.p-button-icon]:text-lg [&_.p-button-icon]:text-black" styleClass="p-0"></p-button>
        <p-button icon="pi pi-users" text="true" severity="secondary" class="[&_.p-button-icon]:text-lg [&_.p-button-icon]:text-black" styleClass="p-0"></p-button>
        <p-button icon="pi pi-file" text="true" severity="secondary" class="[&_.p-button-icon]:text-lg [&_.p-button-icon]:text-black" styleClass="p-0"></p-button>
        <p-button icon="pi pi-clock" text="true" severity="secondary" class="[&_.p-button-icon]:text-lg [&_.p-button-icon]:text-black" styleClass="p-0"></p-button>
        <p-button icon="pi pi-folder" text="true" severity="secondary" class="[&_.p-button-icon]:text-lg [&_.p-button-icon]:text-black" styleClass="p-0"></p-button>
        <p-button icon="pi pi-file-excel" text="true" severity="secondary" class="[&_.p-button-icon]:text-lg [&_.p-button-icon]:text-black" styleClass="p-0"></p-button>
        <p-button icon="pi pi-info-circle" text="true" severity="secondary" class="[&_.p-button-icon]:text-lg [&_.p-button-icon]:text-black" styleClass="p-0"></p-button>
      </div>
      <ng-template pTemplate="footer">
        <div class="flex items-center gap-2 mb-10">
          <div class="w-8">
            <svg width="32" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.5281 0H6.59485V11.6929H18.5281V0Z" fill="#6366F1"/>
              <path d="M12.2257 6.17554H0.29248V17.8685H12.2257V6.17554Z" fill="#1B4095"/>
              <path d="M5.11413 0H0.292358V4.72467H5.11413V0Z" fill="#EA7500"/>
              <path d="M17.1572 13.2715H13.8365V16.5253H17.1572V13.2715Z" fill="#EA7500"/>
            </svg>
          </div>

        </div>
      </ng-template>
    </p-sidebar>
  `,
  standalone: true,
  imports: [SidebarModule, ButtonModule, AvatarModule, DividerModule]
})
export class SidebarComponent {
  expandedSidebar = false;
}
