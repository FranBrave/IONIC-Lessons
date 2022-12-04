import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FloatingActionButtonPage } from './floating-action-button.page';

const routes: Routes = [
  {
    path: '',
    component: FloatingActionButtonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FloatingActionButtonPageRoutingModule {}
