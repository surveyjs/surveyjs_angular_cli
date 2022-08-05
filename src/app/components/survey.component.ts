import { Component, Input, EventEmitter, Output, OnInit } from "@angular/core";
import { StylesManager, Model, SurveyNG } from "survey-angular";

StylesManager.applyTheme("defaultV2");

@Component({
  selector: "survey",
  template: `
    <div class="survey-container contentcontainer codecontainer">
      <div id="surveyElement"></div>
    </div>
  `,
})
export class SurveyComponent implements OnInit {
  @Output() submitSurvey = new EventEmitter<any>();
  @Input()
  json: object;
  result: any;

  ngOnInit() {
    const survey = new Model(this.json);
    survey.onComplete.add(result => {
      this.submitSurvey.emit(result.data);
      this.result = result.data;
    });
    SurveyNG.render("surveyElement", { model: survey });
  }
}
