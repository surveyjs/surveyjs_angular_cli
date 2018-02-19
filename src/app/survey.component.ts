import { Component, Input } from "@angular/core";
import * as Survey from "survey-angular";
import * as widgets from "surveyjs-widgets";

import "inputmask/dist/inputmask/phone-codes/phone.js";

widgets.icheck(Survey);
widgets.select2(Survey);
widgets.imagepicker(Survey);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey);
widgets.jqueryuidatepicker(Survey);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey);
widgets.signaturepad(Survey);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey);
widgets.bootstrapslider(Survey);
widgets.prettycheckbox(Survey);

@Component({
  selector: "survey",
  template: `<div class="survey-container contentcontainer codecontainer"><div id="surveyElement"></div></div>`
})
export class SurveyComponent {
  @Input()
  set json(value: object) {
    const surveyModel = new Survey.Model(value);
    Survey.SurveyNG.render("surveyElement", { model: surveyModel });
  }

  ngOnInit() {}
}
