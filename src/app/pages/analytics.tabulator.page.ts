import { Component } from "@angular/core";
import { data, json } from "../data/analytics";

@Component({
  selector: "analytics-tabulator-page",
  templateUrl: "./analytics.tabulator.page.html",
})
export class AnalyticsTabulatorPage {
  data = data;
  json = json;
}
