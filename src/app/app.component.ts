import { Component } from "@angular/core";

export interface Language {
  lang: string;
  code: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";
  languages: Language[] = [
    { lang: "Deutsch", code: "de" },
    { lang: "English", code: "en" },
    { lang: "Türkçe", code: "tr" },
    { lang: "српски", code: "srb" }
  ];
  selectedLang;
}
