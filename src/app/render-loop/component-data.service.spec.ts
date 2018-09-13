import { TestBed, inject } from '@angular/core/testing';

import { ComponentDataService } from './component-data.service';

describe('ComponentDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentDataService]
    });
  });

  it('should be created', inject([ComponentDataService], (service: ComponentDataService) => {
    expect(service).toBeTruthy();
  }));
});
