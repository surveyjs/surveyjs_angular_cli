import { Component, Input } from '@angular/core';
import * as Survey from 'survey-angular';

@Component({
    selector: 'survey',
    template: `<div class="survey-container contentcontainer codecontainer"><div id="surveyElement"></div></div>`,
})
export class SurveyComponent  {
    @Input() json: any;

    ngOnInit() {
        let surveyModel = new Survey.ReactSurveyModel(this.json);
        Survey.SurveyNG.render('surveyElement', { model: surveyModel });
    }
}
