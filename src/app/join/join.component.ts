import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "join-root",
  templateUrl: "./join.component.html",
  styleUrls: ["./join.component.css"]
})
export class JoinComponent implements OnInit {
  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  ngOnInit(): void {}
}
