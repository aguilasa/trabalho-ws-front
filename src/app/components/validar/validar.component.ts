import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validar',
  templateUrl: './validar.component.html',
  styleUrls: ['./validar.component.css']
})
export class ValidarComponent implements OnInit {

  cpf: string = '';
  error: boolean = false;
  success: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  validate() {
    return false;
  }

  isValidForm() {
    return this.cpf !== '' && this.cpf.length > 1;
  }

  closeError() {
    this.error = false;
  }

  closeSuccess() {
    this.success = false;
  }

}
