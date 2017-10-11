import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CpfMaskDirective } from './directives/cpf-mask.directive';

@NgModule({
  declarations: [
    AppComponent,
    CpfMaskDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
