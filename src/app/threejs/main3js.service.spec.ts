import { TestBed, inject } from '@angular/core/testing';

import { Main3jsService } from './main3js.service';

describe('Main3jsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Main3jsService]
    });
  });

  it('should be created', inject([Main3jsService], (service: Main3jsService) => {
    expect(service).toBeTruthy();
  }));
});
