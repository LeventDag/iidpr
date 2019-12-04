import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { QuestionsComponent } from "./questions/questions.component";
import { StartComponent } from "./start/start.component";
import { JoinComponent } from "./join/join.component";

const routes = [
  { path: "questions/:lang/:key", component: QuestionsComponent },
  { path: "questions/:lang/:key/:question_num", component: QuestionsComponent },
  { path: "start", component: StartComponent },
  { path: "join", component: JoinComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting {}
