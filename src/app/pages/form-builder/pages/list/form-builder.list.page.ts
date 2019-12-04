import { Component, OnInit } from '@angular/core';
import { FormBuilderService } from '../../services/form-builder.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  templateUrl: './form-builder.list.page.html'
})
export class FormBuilderListPage implements OnInit {
  forms = [];

  constructor(private svc: FormBuilderService) {}

  ngOnInit(): void {
    this.svc.getFormItems().subscribe(items => {
      this.forms = items;
      this.source.load(items);
    });
  }

  settings = {
    // add: {
    //   addButtonContent: '<i class="nb-plus"></i>',
    //   createButtonContent: '<i class="nb-checkmark"></i>',
    //   cancelButtonContent: '<i class="nb-close"></i>',
    // },
    // edit: {
    //   editButtonContent: '<i class="nb-edit"></i>',
    //   saveButtonContent: '<i class="nb-checkmark"></i>',
    //   cancelButtonContent: '<i class="nb-close"></i>',
    // },
    // delete: {
    //   deleteButtonContent: '<i class="nb-trash"></i>',
    //   confirmDelete: true,
    // },
    columns: {
      id: {
        title: 'ID',
        type: 'number'
      },
      name: {
        title: 'Name',
        type: 'string'
      }
      // age: {
      //   title: 'Age',
      //   type: 'number',
      // },
    }
  };

  source: LocalDataSource = new LocalDataSource();

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
