import { Component, Input, EventEmitter, Output, OnInit } from "@angular/core";
import { Model } from "survey-core";
import { DataTables } from "survey-analytics/survey.analytics.datatables";

@Component({
  selector: "survey-analytics-datatables",
  template: `
    <div id="surveyAnalyticsContainer"></div>
  `
})
export class SurveyAnalyticsDatatablesComponent implements OnInit {
  @Input() surveyJson: any;
  @Input() results: any;
  @Output() surveySaved: EventEmitter<Object> = new EventEmitter();
  ngOnInit() {
    const survey = new Model(this.surveyJson);
    DataTables.initJQuery((<any>window)["jQuery"]);
    var table = new DataTables(<any>survey, this.results, null);
    table.render(document.getElementById("surveyAnalyticsContainer"));
  }
}
