import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app.routing.module";
import { AppComponent } from "./app.component";
import { SurveyComponent } from "./components/survey.component";
import { HomePage } from "./pages/home.page";
import { SurveyPage } from "./pages/survey.page";
import { SurveyCreatorComponent } from "./components/survey.creator.component";
import { CreatorPage } from "./pages/creator.page";
import { SurveyAnalyticsComponent } from "./components/survey.analytics.component";
import { SurveyAnalyticsTabulatorComponent } from "./components/survey.analytics.tabulator";
import { SurveyAnalyticsDatatablesComponent } from "./components/survey.analytics.datatables";

import { AnalyticsPage } from "./pages/analytics.page";
import { AnalyticsTabulatorPage } from "./pages/analytics.tabulator.page";
import { AnalyticsDatatablesPage } from "./pages/analytics.datatables.page";

import { PdfExportPage } from "./pages/pdfexport.page";
import { SurveyModule } from "survey-angular-ui";
import { SurveyCreatorModule } from "survey-creator-angular";

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    SurveyComponent,
    SurveyPage,
    SurveyCreatorComponent,
    CreatorPage,
    SurveyAnalyticsComponent,
    SurveyAnalyticsDatatablesComponent,
    SurveyAnalyticsTabulatorComponent,
    AnalyticsPage,
    PdfExportPage,
    AnalyticsTabulatorPage,
    AnalyticsDatatablesPage,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, SurveyModule, SurveyCreatorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
