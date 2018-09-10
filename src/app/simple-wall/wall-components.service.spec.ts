import { TestBed, inject } from '@angular/core/testing';

import { WallComponentsService } from './wall-components.service';

describe('WallComponentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WallComponentsService]
    });
  });

  it('should be created', inject([WallComponentsService], (service: WallComponentsService) => {
    expect(service).toBeTruthy();
  }));
});
