import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevopsdocsRoutingModule } from './devopsdocs-routing.module';
import { DevopsdocsComponent } from './devopsdocs.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [DevopsdocsComponent],
  imports: [
    CommonModule,
    DevopsdocsRoutingModule,
    FormsModule
  ]
})
export class DevopsdocsModule { }
