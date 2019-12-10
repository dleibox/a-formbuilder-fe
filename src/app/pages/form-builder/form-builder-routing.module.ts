import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { FormBuilderListPage } from './pages/list/form-builder.list.page';
import { FormBuilderUpsertPage } from './pages/upsert/form-builder.upsert.page';
import { FormBuilderRenderPage } from './pages/render/form-builder.render.page';

const routes: Routes = [
  {
    path: '',
    component: FormBuilderListPage
  },
  {
    path: 'upsert',
    component: FormBuilderUpsertPage
  },
  {
    path: 'upsert/:id',
    component: FormBuilderUpsertPage
  },
  {
    path: 'render',
    component: FormBuilderRenderPage
  },
  {
    path: 'render/:id',
    component: FormBuilderRenderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormBuilderRoutingModule {}
