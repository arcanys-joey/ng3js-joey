import { TestBed, inject } from '@angular/core/testing';

import { ComponentMapService } from './component-map.service';

describe('ComponentMapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentMapService]
    });
  });

  it('should be created', inject([ComponentMapService], (service: ComponentMapService) => {
    expect(service).toBeTruthy();
  }));
});
