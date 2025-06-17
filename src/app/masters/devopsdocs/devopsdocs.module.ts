import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevopsdocsRoutingModule } from './devopsdocs-routing.module';
import { DevopsdocsComponent } from './devopsdocs.component';


@NgModule({
  declarations: [DevopsdocsComponent],
  imports: [
    CommonModule,
    DevopsdocsRoutingModule
  ]
})
export class DevopsdocsModule { }
