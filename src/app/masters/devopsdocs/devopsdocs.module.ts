import { NgModule } from '@angular/core';

import { DevopsdocsRoutingModule } from './devopsdocs-routing.module';
import { DevopsdocsComponent } from './devopsdocs.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [DevopsdocsComponent],
  imports: [
    CommonModule,
    DevopsdocsRoutingModule,
    FormsModule
  ], exports: [DevopsdocsComponent]
})
export class DevopsdocsModule { }
