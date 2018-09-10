import { TestBed, inject } from '@angular/core/testing';

import { CubeService } from './cube.service';

describe('CubeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CubeService]
    });
  });

  it('should be created', inject([CubeService], (service: CubeService) => {
    expect(service).toBeTruthy();
  }));
});
