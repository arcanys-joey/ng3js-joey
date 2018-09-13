import { TestBed, inject } from '@angular/core/testing';

import { DesignDataService } from './design-data.service';

describe('DesignDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DesignDataService]
    });
  });

  it('should be created', inject([DesignDataService], (service: DesignDataService) => {
    expect(service).toBeTruthy();
  }));
});
