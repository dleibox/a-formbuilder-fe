import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule } from '@nebular/theme';
import { FormioModule, FormioAppConfig } from 'angular-formio';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { FormBuilderRoutingModule } from './form-builder-routing.module';

import { AppConfig } from './form-builder.config';
import { FormBuilderListPage } from './pages/list/form-builder.list.page';
import { FormBuilderUpsertPage } from './pages/upsert/form-builder.upsert.page';
import { FormBuilderRenderPage } from './pages/render/form-builder.render.page';
import { FormBuilderService } from './services/form-builder.service';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    Ng2SmartTableModule,
    FormioModule,
    FormBuilderRoutingModule
  ],
  declarations: [FormBuilderListPage, FormBuilderUpsertPage, FormBuilderRenderPage],
  providers: [
    // { provide: FormioAppConfig, useValue: AppConfig },
    FormBuilderService
  ]
})
export class FormBuilderModule {}
