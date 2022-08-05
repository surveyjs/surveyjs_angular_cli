# SurveyJS + Angular Quickstart Template 

SurveyJS is a set of JavaScript components that allow you and your users to build surveys / forms, store them in your database, and visualize survey results for data analysis. This quick start template is built upon Angular 12 and uses the following SurveyJS components:

- [SurveyJS Library / Runner](https://surveyjs.io/Documentation/Library?id=LibraryOverview)
- [Survey Creator / Form Builder](https://surveyjs.io/Documentation/Survey-Creator?id=Survey-Creator-Overview)
- [PDF Export](https://surveyjs.io/Documentation/Pdf-Export?id=PdfExportOverview)
- [Survey Analytics](https://surveyjs.io/Documentation/Analytics?id=AnalyticsOverview)

## Run the application

```bash
git clone https://github.com/surveyjs/surveyjs_angular_cli.git
cd surveyjs_angular_cli
npm i
npm run start
```

Open http://localhost:4200/ in your web browser.

## Template structure

This template covers most basic use cases. You can find code examples for them in the following files:

- Create a standalone survey
  - [src/app/data/survey.ts](src/app/data/survey.ts)
  - [src/app/components/survey.component.ts](src/app/components/survey.component.ts)
  - [src/app/pages/survey.page.html](src/app/pages/survey.page.html)
  - [src/app/pages/survey.page.ts](src/app/pages/survey.page.ts)
- Add Survey Creator to a page
  - [src/app/components/survey.creator.component.ts](src/app/components/survey.creator.component.ts)
  - [src/app/pages/creator.page.html](src/app/pages/creator.page.html)
  - [src/app/pages/creator.page.ts](src/app/pages/creator.page.ts)
- Export a survey to a PDF document
  - [src/app/pages/pdfexport.page.html](src/app/pages/pdfexport.page.html)
  - [src/app/pages/pdfexport.page.ts](src/app/pages/pdfexport.page.ts)
- Visualize survey results
  - As charts
    - [src/app/data/analytics.ts](src/app/data/analytics.ts)
    - [src/app/components/survey.analytics.component.ts](src/app/components/survey.analytics.component.ts)
    - [src/app/pages/analytics.page.html](src/app/pages/analytics.page.html)
    - [src/app/pages/analytics.page.ts](src/app/pages/analytics.page.ts)
  - As a table (modern browsers)
    - [src/app/data/analytics.ts](src/app/data/analytics.ts)
    - [src/app/components/survey.analytics.tabulator.ts](src/app/components/survey.analytics.tabulator.ts)
    - [src/app/pages/analytics.tabulator.page.html](src/app/pages/analytics.tabulator.page.html)
    - [src/app/pages/analytics.tabulator.page.ts](src/app/pages/analytics.tabulator.page.ts)
  - As a table (old browsers)
    - [src/app/data/analytics.ts](src/app/data/analytics.ts)
    - [src/app/components/survey.analytics.datatables.ts](src/app/components/survey.analytics.datatables.ts)
    - [src/app/pages/analytics.datatables.page.html](src/app/pages/analytics.datatables.page.html)
    - [src/app/pages/analytics.datatables.page.ts](src/app/pages/analytics.datatables.page.ts)
- Create a custom question type
  - [src/app/components/customwidget.ts](src/app/components/customwidget.ts)
- Register third-party components
  - [src/App.js](src/app/components/survey.creator.component.ts#L8)
