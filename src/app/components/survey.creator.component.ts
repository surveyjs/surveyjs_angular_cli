import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Serializer } from "survey-core";
import { SurveyCreatorModel } from "survey-creator-core";
// Enable Ace Editor in the JSON Editor tab
import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/ext-searchbox";

@Component({
  selector: "survey-creator-container",
  template: `<div id='surveyCreatorContainer'><survey-creator [model]='creator'></survey-creator></div>`,
  styles: [
    `
    #surveyCreatorContainer {
      height: calc(100vh - 132px);
      width: 100%;
    }
  `
  ]
})
export class SurveyCreatorComponent {
  creator: SurveyCreatorModel;
  @Input() json: any;
  @Output() surveySaved: EventEmitter<Object> = new EventEmitter();
  ngOnInit() {
    Serializer.addProperty("questionbase", "popupdescription:text");
    Serializer.addProperty("page", "popupdescription:text");

    this.creator = new SurveyCreatorModel();
    this.creator.JSON = this.json;
    this.creator.saveSurveyFunc = this.saveMySurvey;
  }

  saveMySurvey = () => {
    console.log(JSON.stringify(this.creator.text));
    this.surveySaved.emit(JSON.parse(this.creator.text));
  };
}
