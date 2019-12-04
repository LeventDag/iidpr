import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "start-root",
  templateUrl: "./start.component.html",
  styleUrls: ["./start.component.css"]
})
export class StartComponent implements OnInit {
  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get("assets/level1.json").subscribe(data => {
      console.log(data);
    });
  }
}
