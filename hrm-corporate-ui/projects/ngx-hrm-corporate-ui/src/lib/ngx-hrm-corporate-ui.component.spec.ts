import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxHrmCorporateUiComponent } from './ngx-hrm-corporate-ui.component';

describe('NgxHrmCorporateUiComponent', () => {
  let component: NgxHrmCorporateUiComponent;
  let fixture: ComponentFixture<NgxHrmCorporateUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxHrmCorporateUiComponent]
    });
    fixture = TestBed.createComponent(NgxHrmCorporateUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
