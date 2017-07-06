import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LeafletComponent } from './leaflet.component';
import { LeafletService } from './leaflet.service';

@NgModule({
  exports: [
    LeafletComponent
  ],
  declarations: [
    LeafletComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    LeafletService
  ]
})
export class LeafletModule { }
