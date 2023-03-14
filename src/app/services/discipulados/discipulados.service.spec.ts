/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DiscipuladosService } from './discipulados.service';

describe('Service: Discipulados', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiscipuladosService]
    });
  });

  it('should ...', inject([DiscipuladosService], (service: DiscipuladosService) => {
    expect(service).toBeTruthy();
  }));
});
