import { NgModule } from "@angular/core";
import { MatProgressSpinnerModule } from '@angular/material/';
// MatButtonModule,
import { BrowserModule } from "@angular/platform-browser";

import { ProgressSpinnerComponent } from './progress-spinner.component';
import { ButtonComponent } from "./button.component";

@NgModule({
  imports: [
    BrowserModule,
    MatProgressSpinner,
    // MatButtonModule,
  ],
  declarations: [
    ButtonComponent,
    ProgressSpinnerComponent,
  ],
  exports: [
  ]
})
export class App {}