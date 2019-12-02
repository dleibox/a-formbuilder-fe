import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule } from '@nebular/theme';
import { FormioModule, FormioAppConfig } from 'angular-formio';

import { ThemeModule } from '../../@theme/theme.module';
import { FormBuilderRoutingModule } from './form-builder-routing.module';

import { AppConfig } from './form-builder.config';
import { FormBuilderPage } from './pages/form-builder.page';
import { FormBuilderRenderPage } from './pages/render/form-builder.render.page';
import { FormBuilderService } from './services/form-builder.service';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    FormioModule,
    FormBuilderRoutingModule
  ],
  declarations: [FormBuilderPage, FormBuilderRenderPage],
  providers: [
    // { provide: FormioAppConfig, useValue: AppConfig },
    FormBuilderService
  ]
})
export class FormBuilderModule {}
