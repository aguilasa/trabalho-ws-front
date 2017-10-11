import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CpfMaskDirective } from './directives/cpf-mask.directive';
import { ValidarComponent } from './components/validar/validar.component';

@NgModule({
  declarations: [
    AppComponent,
    CpfMaskDirective,
    ValidarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
