import { Component } from '@angular/core';
import { FormBuilderService } from '../services/form-builder.service';

@Component({
  templateUrl: './form-builder.page.html'
})
export class FormBuilderPage {
  form = {
    components: []
  };

  constructor(private svc: FormBuilderService) {}

  getFormItem() {
    this.svc.getFormItem('10001').subscribe(item => {
      console.log('getFormItem', item);
    });
  }

  saveFormItem() {
    this.svc
      .saveFormItem('10001', {
        id: '10001',
        name: 'A Form',
        json: JSON.stringify(this.form)
      })
      .subscribe(item => {
        console.log('saveFormItem', item);
      });
  }
}
