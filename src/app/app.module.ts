import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputShowHideComponent } from './input-show-hide/input-show-hide.component';
import { InputShowHideFormDirective } from './input-show-hide-form.directive';

@NgModule({
  declarations: [
    AppComponent,
    InputShowHideComponent,
    InputShowHideFormDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
