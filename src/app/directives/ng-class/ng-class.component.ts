import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {
  isAllume = true;
  constructor() { }

  ngOnInit(): void {
    setInterval(
      () => this.isAllume = !this.isAllume,
      1000
    )
  }

}
