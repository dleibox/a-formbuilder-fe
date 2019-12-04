import { Component, OnInit } from '@angular/core';
import { FormBuilderService } from '../../services/form-builder.service';

@Component({
  templateUrl: './form-builder.upsert.page.html'
})
export class FormBuilderUpsertPage implements OnInit {
  form = {
    components: []
  };

  constructor(private svc: FormBuilderService) {}

  ngOnInit(): void {
    this.getFormItem();
  }

  getFormItem() {
    this.svc.getFormItem('10001').subscribe(item => {
      console.log('getFormItem', item);
      this.form = JSON.parse(item.json);
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
