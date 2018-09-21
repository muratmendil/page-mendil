import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';


@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatRadioModule,
  ],
  exports: [MatProgressSpinnerModule, MatRadioModule
  ],
  declarations: []
})
export class MaterialModule { }
