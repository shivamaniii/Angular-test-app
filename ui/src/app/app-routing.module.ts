import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SampletextComponent } from './sampletext/sampletext.component';

const routes: Routes = [
  { path: '', component: SampletextComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [SampletextComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }
