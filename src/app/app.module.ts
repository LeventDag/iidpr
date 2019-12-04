import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { QuestionsComponent } from "./questions/questions.component";
import { StartComponent } from "./start/start.component";
import { JoinComponent } from "./join/join.component";
import { AppRouting } from "./app.routing";

import { MatSelectModule } from "@angular/material/select";
import { MatDialogModule } from "@angular/material/dialog";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatCommonModule, MatRippleModule } from "@angular/material/core";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatExpansionModule } from "@angular/material/expansion";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

const matmodules = [
  MatSelectModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatSlideToggleModule,
  MatCommonModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatExpansionModule
];

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    StartComponent,
    JoinComponent
  ],
  imports: [
    AppRouting,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ].concat(matmodules),
  bootstrap: [AppComponent]
})
export class AppModule {}
