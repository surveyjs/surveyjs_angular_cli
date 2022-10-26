import { Component, Input, EventEmitter, Output, OnInit } from "@angular/core";
import { SurveyModel } from "survey-core";
@Component({
  selector: "survey-container",
  template: `<survey [model]='survey'></survey>`,
})
export class SurveyComponent implements OnInit {
  @Output() submitSurvey = new EventEmitter<any>();

  @Input() json: object;
  result: any;
  survey: SurveyModel

  ngOnInit() {
    this.survey = new SurveyModel(this.json);
    this.survey.onComplete.add(result => {
      this.submitSurvey.emit(result.data);
      this.result = result.data;
    });
  }
}
