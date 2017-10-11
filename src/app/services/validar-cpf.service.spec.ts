import { TestBed, inject } from '@angular/core/testing';

import { ValidarCpfService } from './validar-cpf.service';

describe('ValidarCpfService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidarCpfService]
    });
  });

  it('should be created', inject([ValidarCpfService], (service: ValidarCpfService) => {
    expect(service).toBeTruthy();
  }));
});
