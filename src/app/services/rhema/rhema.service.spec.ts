/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RhemaService } from './rhema.service';

describe('Service: Rhema', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RhemaService]
    });
  });

  it('should ...', inject([RhemaService], (service: RhemaService) => {
    expect(service).toBeTruthy();
  }));
});
