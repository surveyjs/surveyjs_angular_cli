import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from "./app.component";
import { SurveyComponent } from "./survey.component";
import { SurveyCreatorComponent } from "./survey.creator.component";

@NgModule({
  declarations: [AppComponent, SurveyComponent, SurveyCreatorComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
