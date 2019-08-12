import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { SurveyComponent } from "./survey.component";
import { SurveyCreatorComponent } from "./survey.creator.component";
import { SurveyAnalyticsComponent } from "./survey.analytics.component";

@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    SurveyCreatorComponent,
    SurveyAnalyticsComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
