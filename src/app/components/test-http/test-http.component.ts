import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-test-http',
  templateUrl: './test-http.component.html',
  styleUrls: ['./test-http.component.css']
})
export class TestHttpComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe(
      (data) => {
        console.log(data);
      }
    )
  }

}
