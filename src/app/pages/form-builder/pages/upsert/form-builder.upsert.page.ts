import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormBuilderService } from "../../services/form-builder.service";
import { ActivatedRoute } from "@angular/router";
import { FormControl } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
  templateUrl: "./form-builder.upsert.page.html",
  styleUrls: ["form-builder.upsert.page.scss"]
})
export class FormBuilderUpsertPage implements OnInit, OnDestroy {
  sub: Subscription = new Subscription();
  saved = false;
  form: any = {};

  formTitleCtrl: FormControl;

  constructor(private route: ActivatedRoute, private svc: FormBuilderService) {}

  ngOnInit(): void {
    this.formTitleCtrl = new FormControl();
    this.sub.add(
      this.formTitleCtrl.valueChanges.subscribe(_ => {
        this.form.name = _;
      })
    );

    this.sub.add(
      this.route.paramMap.subscribe(params => {
        this.form.id = +params.get("id");
        // this.form.id = this.form.id || 0;
        this.getFormItem(this.form.id);
      })
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getFormItem(id: number) {
    this.sub.add(
      this.svc.getFormItem(id).subscribe(item => {
        this.form = item;
        this.formTitleCtrl.setValue(this.form.name);
      })
    );
  }

  saveFormItem() {
    this.sub.add(
      this.svc.saveFormItem(this.form.id, this.form).subscribe(item => {
        console.log("saveFormItem", item);
        this.saved = true;
      })
    );
  }
}
