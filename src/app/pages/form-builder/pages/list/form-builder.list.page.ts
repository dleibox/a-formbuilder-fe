import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormBuilderService } from "../../services/form-builder.service";
import { LocalDataSource } from "ng2-smart-table";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  templateUrl: "./form-builder.list.page.html"
})
export class FormBuilderListPage implements OnInit, OnDestroy {
  sub: Subscription = new Subscription();
  forms = [];

  constructor(private router: Router, private svc: FormBuilderService) {}

  ngOnInit(): void {
    this.svc.getFormItems().subscribe(items => {
      this.forms = items;
      this.source.load(items);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  settings = {
    mode: "external", // for action buttons
    pager: {
      perPage: 20
    },
    hideSubHeader: true,
    actions: {
      add: false,
      edit: false,
      delete: false,
      custom: [
        {
          name: "view",
          title: '<i class="nb-compose" title="View"></i>'
        },
        {
          name: "edit",
          title: '<i class="nb-edit" title="Edit"></i>'
        },
        {
          name: "remove",
          title: '<i class="nb-close" title="Remove"></i>'
        }
      ],
      position: "right"
    },
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
        title: "ID",
        type: "number"
      },
      name: {
        title: "Name",
        type: "string"
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();

  onCustom(evt) {
    console.log("onCustom", evt);
    if (evt.action === "edit") {
      this.onEdit(evt);
    } else if (evt.action === "view") {
      this.router.navigate([`/pages/formbuilder/render/${evt.data["id"]}`]);
    } else if (evt.action === "remove") {
      if (window.confirm("Are you sure you want to delete?")) {
        this.sub.add(
          this.svc.deleteFormItem(+evt.data["id"]).subscribe(_ => {
            this.source.remove(evt.data);
            this.source.refresh();
          })
        );
      }
    }
  }

  onEdit(evt) {
    this.router.navigate([`/pages/formbuilder/upsert/${evt.data["id"]}`]);
  }
}
