import { Component, Input, Output, EventEmitter } from "@angular/core";
import * as SurveyKo from "survey-knockout";
import * as SurveyEditor from "surveyjs-editor";
import * as widgets from "surveyjs-widgets";

widgets.icheck(SurveyKo);
widgets.select2(SurveyKo);
widgets.imagepicker(SurveyKo);
widgets.inputmask(SurveyKo);
widgets.jquerybarrating(SurveyKo);
widgets.jqueryuidatepicker(SurveyKo);
widgets.nouislider(SurveyKo);
widgets.select2tagbox(SurveyKo);
widgets.signaturepad(SurveyKo);
widgets.sortablejs(SurveyKo);
widgets.ckeditor(SurveyKo);
widgets.autocomplete(SurveyKo);
widgets.bootstrapslider(SurveyKo);

@Component({
  selector: "survey-editor",
  template: `<div id="surveyEditorContainer"></div>`
})
export class SurveyEditorComponent {
  editor: SurveyEditor.SurveyEditor;
  @Input() json: any;
  @Output() surveySaved: EventEmitter<Object> = new EventEmitter();
  ngOnInit() {
    let editorOptions = { showEmbededSurveyTab: true, generateValidJSON: true };
    this.editor = new SurveyEditor.SurveyEditor(
      "surveyEditorContainer",
      editorOptions
    );
    this.editor.text = JSON.stringify(this.json);
    this.editor.saveSurveyFunc = this.saveMySurvey;
  }

  saveMySurvey = () => {
    console.log(JSON.stringify(this.editor.text));
    this.surveySaved.emit(JSON.parse(this.editor.text));
  };
}
