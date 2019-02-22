import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule, MatListModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule } from '@angular/material/chips';




@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatGridListModule,
    MatCardModule,
    MatTooltipModule,
    MatMenuModule,
    MatChipsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  exports: [
    MatProgressSpinnerModule,
    MatRadioModule,
    MatCardModule,
    MatGridListModule,
    MatTooltipModule,
    MatMenuModule,
    MatChipsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  declarations: []
})
export class MaterialModule { }
