import { Component, Input, Output, EventEmitter } from "@angular/core";
import * as Survey from "survey-core";
import * as SurveyKo from "survey-knockout-ui";
import * as SurveyCreator from "survey-creator-knockout";
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

// var CkEditor_ModalEditor = {
//   afterRender: function(modalEditor, htmlElement) {
//     var editor = window["CKEDITOR"].replace(htmlElement);
//     editor.on("change", function() {
//       modalEditor.editingValue = editor.getData();
//     });
//     editor.setData(modalEditor.editingValue);
//   },
//   destroy: function(modalEditor, htmlElement) {
//     var instance = window["CKEDITOR"].instances[htmlElement.id];
//     if (instance) {
//       instance.removeAllListeners();
//       window["CKEDITOR"].remove(instance);
//     }
//   }
// };
// SurveyCreator.SurveyPropertyModalEditor.registerCustomWidget(
//   "html",
//   CkEditor_ModalEditor
// );
// CKEditor is the third party library
/* Steps to use CKEditor in the project:
    1. run 'npm i ckeditor'
    2. update the "build" section of the angular.json: add ckeditor.js script in the scripts section.
*/

@Component({
  selector: "survey-creator",
  template: `
    <div id="surveyCreatorContainer"></div>
  `
})
export class SurveyCreatorComponent {
  creator: SurveyCreator.SurveyCreator;
  @Input() json: any;
  @Output() surveySaved: EventEmitter<Object> = new EventEmitter();
  ngOnInit() {
    Survey.Serializer.addProperty(
      "questionbase",
      "popupdescription:text"
    );
    Survey.Serializer.addProperty("page", "popupdescription:text");

    let options = { showEmbededSurveyTab: true, generateValidJSON: true };
    this.creator = new SurveyCreator.SurveyCreator(options);
    this.creator.JSON = this.json;
    this.creator.saveSurveyFunc = this.saveMySurvey;
    this.creator.render("surveyCreatorContainer");
  }

  saveMySurvey = () => {
    console.log(JSON.stringify(this.creator.text));
    this.surveySaved.emit(JSON.parse(this.creator.text));
  };
}
