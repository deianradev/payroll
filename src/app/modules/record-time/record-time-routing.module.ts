import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecordTimeComponent } from './record-time.component';

const routes: Routes = [{ path: '', component: RecordTimeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecordTimeRoutingModule { }
