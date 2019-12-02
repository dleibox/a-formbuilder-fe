import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { FormBuilderPage } from './pages/form-builder.page';
import { FormBuilderRenderPage } from './pages/render/form-builder.render.page';

const routes: Routes = [
  {
    path: '',
    component: FormBuilderPage
  },
  {
    path: 'render',
    component: FormBuilderRenderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormBuilderRoutingModule {}
