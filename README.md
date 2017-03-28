# SurveyjsAngularCli

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0 and modified to use SurveyJS and Editor libraries.

You can just clone this repo and run "ng serve" command.


## Steps to add SurveyJS + Editor into the generated empty project

 1. **Create a new project.**  
	```
	ng new surveyjs-angular-cli
	cd surveyjs-angular-cli
	```

 2. **Add SurveyJS + Editor dependencies.**
	```
	npm install -save survey-angular
	npm install -save surveyjs-editor
	```

3. **Add SurveyJS and Editor components files.**
	```
	src/app/survey.component.ts
	src/app/survey.editor.component.ts
	```

4. **Use compoents in the app.module.ts file.**
	```
	import { SurveyComponent } from './survey.component';
	import { SurveyEditorComponent } from './survey.editor.component';
	@NgModule({
    declarations: [
      AppComponent,
      SurveyComponent,
      SurveyEditorComponent
    ],
	```
	  
5. **Change markup in the app.component.html file.**
	```
	<h1>Survey</h1><survey [json]="json"></survey>
	<h1>Survey JS Editor</h1><survey-editor></survey-editor>
	```

6. **Add "jQuery polyfill" for bootstrap in the polyfills.ts file (https://github.com/angular/angular-cli/issues/2129).**

	```
	import * as jQuery from 'jquery';
	window['jQuery'] = jQuery;
	```

7. **Run project.**
	```
	ng serve
	```


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
