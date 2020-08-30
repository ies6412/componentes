import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScrollinfinitoPage } from './scrollinfinito.page';

const routes: Routes = [
  {
    path: '',
    component: ScrollinfinitoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScrollinfinitoPageRoutingModule {}
