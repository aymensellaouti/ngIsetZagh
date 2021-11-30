import {Component, Input, OnInit} from '@angular/core';
import {Cv} from "../model/cv";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() cv: Cv = null;
  constructor() { }

  ngOnInit(): void {
  }

}
