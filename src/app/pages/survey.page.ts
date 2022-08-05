import { Component } from "@angular/core";

import { json } from "../data/survey";

@Component({
  selector: "survey-page",
  templateUrl: "./survey.page.html",
})
export class SurveyPage {
  json;

  constructor() {
    this.json = json;
  }

  sendData(result) {
    console.log(result);
  }
}
