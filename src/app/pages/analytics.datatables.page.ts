import { Component } from "@angular/core";
import { data, json } from "../data/analytics";

@Component({
  selector: "analytics-datatables-page",
  templateUrl: "./analytics.datatables.page.html",
})
export class AnalyticsDatatablesPage {
  data = data;
  json = json;
}
