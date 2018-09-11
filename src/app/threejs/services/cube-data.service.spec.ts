import { TestBed, inject } from '@angular/core/testing';

import { CubeDataService } from './cube-data.service';

describe('CubeDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CubeDataService]
    });
  });

  it('should be created', inject([CubeDataService], (service: CubeDataService) => {
    expect(service).toBeTruthy();
  }));
});
