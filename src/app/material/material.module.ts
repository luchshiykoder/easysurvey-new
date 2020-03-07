import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatTooltipModule,
  MatInputModule,
  MatRippleModule,
  MatBadgeModule
} from '@angular/material';

const materialComponents = [
  MatButtonModule, 
  MatSidenavModule, 
  MatToolbarModule, 
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatTooltipModule,
  MatInputModule,
  MatRippleModule,
  MatBadgeModule
  

]

@NgModule({
 
  imports: [materialComponents],
  exports: [materialComponents,]
})
export class MaterialModule { }
