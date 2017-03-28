import { Component } from '@angular/core';
import * as SurveyEditor from 'surveyjs-editor';

@Component({
    selector: 'survey-editor',
    template: `<div id="surveyEditorContainer"></div>`,
})
export class SurveyEditorComponent  {
    editor: SurveyEditor.SurveyEditor;

    ngOnInit() {
        let editorOptions = {showEmbededSurveyTab: true};
        this.editor = new SurveyEditor.SurveyEditor('surveyEditorContainer', editorOptions);
        this.editor.saveSurveyFunc = this.saveMySurvey;
    }

    saveMySurvey = () => {
        console.log(JSON.stringify(this.editor.text));
    }
}
