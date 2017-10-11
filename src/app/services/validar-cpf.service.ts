import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { CpfModel } from '../models/cpf-model';

const URL = 'http://localhost:8181/trabalho-ws/rest/cpf/validate';

@Injectable()
export class ValidarCpfService {

  constructor(private http: Http) { }

  public validate(cpf: CpfModel) {
    return this.http.post(URL, cpf)
      .map(res => res.json());
  }

}
