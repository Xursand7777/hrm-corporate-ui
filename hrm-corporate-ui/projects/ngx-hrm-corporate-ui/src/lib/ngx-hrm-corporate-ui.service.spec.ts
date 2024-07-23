import { TestBed } from '@angular/core/testing';

import { NgxHrmCorporateUiService } from './ngx-hrm-corporate-ui.service';

describe('NgxHrmCorporateUiService', () => {
  let service: NgxHrmCorporateUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxHrmCorporateUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
