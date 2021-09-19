import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuccessComponent } from '../../components/success/success.component';
import { EComponent } from '../../components/e/e.component';

@NgModule({
  declarations: [
    SuccessComponent,
    EComponent
  ],
  imports: [],
  exports: [
    SuccessComponent,
    EComponent
  ]
})

export class SharedModule { }
