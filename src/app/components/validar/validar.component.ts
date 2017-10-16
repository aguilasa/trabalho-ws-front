import { Component, OnInit } from '@angular/core';
import { ValidarCpfService } from '../../services/validar-cpf.service';

import { CpfModel } from '../../models/cpf-model';

@Component({
  selector: 'app-validar',
  templateUrl: './validar.component.html',
  styleUrls: ['./validar.component.css']
})
export class ValidarComponent implements OnInit {

  model: CpfModel = new CpfModel('');
  error = false;
  success = false;
  serverError = false;

  constructor(private svc: ValidarCpfService) { }

  ngOnInit() {
  }

  validate() {
    this.svc
      .validate(this.model)
      .subscribe(result => {
        this.error = result.result === '0';
        this.success = !this.error;
        this.serverError = false;
      }, err => {
        this.showServerError();
      });
  }

  isValidForm() {
    return this.model.cpf !== '' && this.model.cpf.length > 1;
  }

  closeError() {
    this.error = false;
  }

  closeSuccess() {
    this.success = false;
  }

  closeServerError() {
    this.serverError = false;
  }

  reset() {
    this.error = false;
    this.success = false;
    this.serverError = false;
  }

  onKey(event: any) {
    this.reset();
  }

  showServerError() {
    this.serverError = true;
  }

}
