import { Component, OnInit } from "@angular/core";
import { FormBuilderService } from "../../services/form-builder.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: "./form-builder.render.page.html"
})
export class FormBuilderRenderPage implements OnInit {
  form: any = {};

  constructor(private route: ActivatedRoute, private svc: FormBuilderService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.form.id = +params.get("id");
      if(this.form.id <= 0) {
        throw 'No form';
      }
      this.getFormItem(this.form.id);
    });
  }

  getFormItem(id: number) {
    this.svc.getFormItem(id).subscribe(item => {
      this.form = item;
      // this.form = JSON.parse(item.json);
    });
  }
}
