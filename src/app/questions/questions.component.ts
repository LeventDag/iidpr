import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "questions-root",
  templateUrl: "./questions.component.html",
  styleUrls: ["./questions.component.css"]
})
export class QuestionsComponent implements OnInit {
  points: number;
  key: number;
  lang: any;
  question_num: number;
  data: any;
  imagePath: String;
  answer: String;
  todo: any;
  options = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    this.points = 0;
    this.question_num = 0;
    this.route.params.subscribe(params => {
      console.log("movie movie movie");
      this.key = parseInt(params["key"]);
      this.lang = params["lang"];
      this.question_num = params["question_num"];
      this.http.get("assets/level1.json").subscribe(data => {
        this.data = data;
        this.getInfos();
      });
    });
  }

  private getInfos(): void {
    var tmp = this.data["elements"][this.question_num];
    this.imagePath = tmp["image"];
    tmp = tmp[this.lang];
    this.todo = tmp["todo"];
    this.options = tmp["options"];
    this.shuffle(this.options);
    this.answer = tmp["answer"];
  }

  private selected(ind): void {
    var answer = this.options[ind];
    if (answer === this.answer) {
      this.points += 10;
    }
    this.key = (this.key + 1) % 2;
    this.question_num++;
    this.router.navigate([
      "/questions",
      this.lang,
      this.key,
      this.question_num
    ]);
  }
  private next(): void {
    this.key = (this.key + 1) % 2;
    this.question_num++;
    this.router.navigate([
      "/questions",
      this.lang,
      this.key,
      this.question_num
    ]);
  }

  private shuffle(arr) {
    for (var i = 0; i < arr.length; ++i) {
      var a = this.getRandomInt(4);
      var b = this.getRandomInt(4);

      var tmp = arr[a];
      arr[a] = arr[b];
      arr[b] = tmp;
    }
  }

  private getRandomInt(max): number {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
