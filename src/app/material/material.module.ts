import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';




@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatGridListModule,
    MatCardModule,
    MatTooltipModule,
    MatMenuModule,
  ],
  exports: [MatProgressSpinnerModule, MatRadioModule, MatCardModule, MatGridListModule, MatTooltipModule, MatMenuModule
  ],
  declarations: []
})
export class MaterialModule { }
