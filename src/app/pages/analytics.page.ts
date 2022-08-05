import { Component } from "@angular/core";
import { data, json } from "../data/analytics";

@Component({
  selector: "analytics-page",
  templateUrl: "./analytics.page.html",
})
export class AnalyticsPage {
  data = data;
  json = json;
}
