import { Component, Input, Output, EventEmitter } from "@angular/core";
import * as Survey from "survey-core";
// import * as SurveyKo from "survey-knockout-ui";
import { SurveyCreatorModel } from "survey-creator-core";
import * as widgets from "surveyjs-widgets";
import { init as initCustomWidget } from "./customwidget";

widgets.icheck(Survey);
widgets.select2(Survey);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey);
widgets.jqueryuidatepicker(Survey);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey);
//widgets.signaturepad(SurveyKo);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey);
widgets.bootstrapslider(Survey);
//widgets.emotionsratings(SurveyKo);
initCustomWidget(Survey);

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
    Survey.Serializer.addProperty("questionbase", "popupdescription:text");
    Survey.Serializer.addProperty("page", "popupdescription:text");

    const options = { showPreviewTab: true, showLogicTab: true };
    this.creator = new SurveyCreatorModel(options);
    this.creator.JSON = this.json;
    this.creator.saveSurveyFunc = this.saveMySurvey;
  }

  saveMySurvey = () => {
    console.log(JSON.stringify(this.creator.text));
    this.surveySaved.emit(JSON.parse(this.creator.text));
  };
}
