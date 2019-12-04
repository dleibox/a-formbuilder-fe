import { Component, OnInit } from '@angular/core';
import { FormBuilderService } from '../../services/form-builder.service';

@Component({
  templateUrl: './form-builder.render.page.html'
})
export class FormBuilderRenderPage implements OnInit {
  form: any;

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
}
