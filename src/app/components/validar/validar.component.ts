import { Component, OnInit } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-validar',
  templateUrl: './validar.component.html',
  styleUrls: ['./validar.component.css']
})
export class ValidarComponent implements OnInit {

  cpf: string = '';
  show: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  validar() {
    return false;
  }

  isValidForm() {
    return this.cpf !== '' && this.cpf.length > 1;
  }

  outro() {
    this.show = !this.show;
    this.show ? jQuery('#erro').show() : jQuery('#erro').hide();
  }



}
