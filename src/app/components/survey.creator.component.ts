import { Component, Input, Output, EventEmitter } from "@angular/core";
import * as Survey from "survey-core";
// import * as SurveyKo from "survey-knockout-ui";
import { SurveyCreator } from "survey-creator-knockout";
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
  selector: "survey-creator",
  template: `
    <div id="surveyCreatorContainer"></div>
  `,
  styles: [`
    #surveyCreatorContainer {
      height: calc(100vh - 125px);
      width: 100vw;
    }
  `]
})
export class SurveyCreatorComponent {
  creator: SurveyCreator;
  @Input() json: any;
  @Output() surveySaved: EventEmitter<Object> = new EventEmitter();
  ngOnInit() {
    Survey.Serializer.addProperty("questionbase", "popupdescription:text");
    Survey.Serializer.addProperty("page", "popupdescription:text");

    const options = { showPreviewTab: true, showLogicTab: true };
    this.creator = new SurveyCreator(options);
    this.creator.JSON = this.json;
    this.creator.saveSurveyFunc = this.saveMySurvey;
    this.creator.render("surveyCreatorContainer");
  }

  saveMySurvey = () => {
    console.log(JSON.stringify(this.creator.text));
    this.surveySaved.emit(JSON.parse(this.creator.text));
  };
}
