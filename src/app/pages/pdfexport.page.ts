import { Component } from "@angular/core";
import { SurveyPDF } from "survey-pdf";

import { json } from "../data/survey";

const pdfOptions = {
  fontSize: 14,
  margins: {
    left: 10,
    right: 10,
    top: 10,
    bot: 10,
  }
};

@Component({
  selector: "pdfexport-page",
  templateUrl: "./pdfexport.page.html",
})
export class PdfExportPage {
  json = json;
  result;
  savePDF() {
    const surveyPDF = new SurveyPDF(this.json, pdfOptions);
    surveyPDF.data = this.result;
    surveyPDF.save("survey");
  }
}
