import { Component, Input, EventEmitter, Output, OnInit } from "@angular/core";
import { Model } from "survey-core";
import { Tabulator } from "survey-analytics/survey.analytics.tabulator";
import jsPDF from "jspdf";
import { applyPlugin } from "jspdf-autotable";
applyPlugin(jsPDF);
import * as XLSX from "xlsx";

@Component({
  selector: "survey-analytics-tabulator",
  template: `
    <div id="surveyAnalyticsContainer"></div>
  `
})
export class SurveyAnalyticsTabulatorComponent implements OnInit {
  @Input() surveyJson: any;
  @Input() results: any;
  @Output() surveySaved: EventEmitter<Object> = new EventEmitter();
  ngOnInit() {
    const survey = new Model(this.surveyJson);
    const table = new Tabulator(survey, this.results, {
      jspdf: jsPDF, 
      xlsx: XLSX
    });
    table.render(document.getElementById("surveyAnalyticsContainer"));
  }
}
