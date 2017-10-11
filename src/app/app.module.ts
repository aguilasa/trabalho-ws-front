import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CpfMaskDirective } from './directives/cpf-mask.directive';
import { ValidarComponent } from './components/validar/validar.component';

import { ValidarCpfService } from './services/validar-cpf.service';

@NgModule({
  declarations: [
    AppComponent,
    CpfMaskDirective,
    ValidarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ValidarCpfService],
  bootstrap: [AppComponent]
})
export class AppModule { }
