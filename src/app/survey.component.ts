import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import * as Survey from 'survey-angular';
import * as widgets from 'surveyjs-widgets';
import * as SurveyPDF from 'survey-pdf';
import 'inputmask/dist/inputmask/phone-codes/phone.js';

widgets.icheck(Survey);
widgets.select2(Survey);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey);
widgets.jqueryuidatepicker(Survey);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey);
widgets.signaturepad(Survey);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey);
widgets.bootstrapslider(Survey);
widgets.prettycheckbox(Survey);
widgets.emotionsratings(Survey);

Survey.JsonObject.metaData.addProperty('questionbase', 'popupdescription:text');
Survey.JsonObject.metaData.addProperty('page', 'popupdescription:text');

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'survey',
  template: `<div class='survey-container contentcontainer codecontainer'><div id='surveyElement'></div><button (click)='savePDF()'>Save PDF</button></div>`
})
export class SurveyComponent implements OnInit {
  @Output() submitSurvey = new EventEmitter<any>();
  @Input()
  json: object;
  result: any;

  ngOnInit() {
    const surveyModel = new Survey.Model(this.json);
    surveyModel.onAfterRenderQuestion.add((survey, options) => {
      if (!options.question.popupdescription) { return; }
      // Add a button;
      const btn = document.createElement('button');
      btn.className = 'btn btn-info btn-xs';
      btn.innerHTML = 'More Info';
      const question = options.question;
      btn.onclick = function () {
        // showDescription(question);
        alert(options.question.popupdescription);
      };
      const header = options.htmlElement.querySelector('h5');
      const span = document.createElement('span');
      span.innerHTML = '  ';
      header.appendChild(span);
      header.appendChild(btn);
    });
    surveyModel.onComplete
      .add((result, options) => {
        this.submitSurvey.emit(result.data);
        this.result = result.data;
      }
      );
    Survey.SurveyNG.render('surveyElement', { model: surveyModel });
  }
  savePDF() {
    var options = {
      fontSize: 14,
      margins: {
        left: 10,
        right: 10,
        top: 10,
        bot: 10
      }
    };
    const surveyPDF = new SurveyPDF.SurveyPDF(this.json, options);
    console.log(this.result);
    surveyPDF.data = this.result;
    surveyPDF.save("survey PDF example");
  }
}
