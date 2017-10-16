import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { CpfModel } from '../models/cpf-model';

const URL = 'http://localhost:8181/trabalho-ws/rest/cpf/validate';

@Injectable()
export class ValidarCpfService {

  constructor(private http: Http) { }

  public validate(cpf: CpfModel) {
    return this.http.post(URL, cpf)
      .map((res: Response) => res.json())
      .catch((err) => {
        return Observable.throw(err);
      });
  }

}
