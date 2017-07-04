import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MdModule } from './md-module/md.module';

@NgModule({
  exports: [
    MdModule
  ],
  imports: [
    MdModule
  ],
})
export class CoreModule { }
