import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {
  @Input() color = "yellow";
  @Input() style= "verdana";
  @Input() size = 60;

  constructor() { }

  ngOnInit(): void {
  }

}
