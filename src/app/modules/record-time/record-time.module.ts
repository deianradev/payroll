import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecordTimeRoutingModule } from './record-time-routing.module';
import { RecordTimeComponent } from './record-time.component';


@NgModule({
  declarations: [RecordTimeComponent],
  imports: [
    CommonModule,
    RecordTimeRoutingModule
  ]
})
export class RecordTimeModule { }
