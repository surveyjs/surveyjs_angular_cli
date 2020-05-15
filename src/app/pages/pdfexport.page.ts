import { Component } from "@angular/core";
import * as SurveyPDF from "survey-pdf";
import * as SurveyCore from "survey-core";
import * as widgets from "surveyjs-widgets";

import json from "../../assets/survey.json";

widgets.icheck(SurveyCore);
widgets.select2(SurveyCore);
widgets.inputmask(SurveyCore);
widgets.jquerybarrating(SurveyCore);
widgets.jqueryuidatepicker(SurveyCore);
widgets.nouislider(SurveyCore);
widgets.select2tagbox(SurveyCore);
//widgets.signaturepad(SurveyCore);
widgets.sortablejs(SurveyCore);
widgets.ckeditor(SurveyCore);
widgets.autocomplete(SurveyCore);
widgets.bootstrapslider(SurveyCore);
widgets.prettycheckbox(SurveyCore);

@Component({
  selector: "pdfexport-page",
  templateUrl: "./pdfexport.page.html",
})
export class PdfExportPage {
  json = json;
  result;
  savePDF() {
    var options = {
      fontSize: 14,
      margins: {
        left: 10,
        right: 10,
        top: 10,
        bot: 10,
      },
    };
    const surveyPDF = new SurveyPDF.SurveyPDF(this.json, options);
    console.log(this.result);
    surveyPDF.data = this.result;
    surveyPDF.save("survey PDF example");
  }
}
