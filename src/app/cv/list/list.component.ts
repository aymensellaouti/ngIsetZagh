import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Cv} from "../model/cv";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  cvs: Cv[] = [];
  @Output() forwardCv = new EventEmitter<Cv>();
  constructor() {
    this.cvs = [
      new Cv(1, 'sellaouti', 'aymen', 'teacher', 'rotating_card_profile3.png', '1234', 39),
      new Cv(2, 'sellaouti', 'aymen', 'teacher', 'rotating_card_profile2.png', '1234', 39),
      new Cv(3, 'sellaouti', 'aymen', 'teacher', '                   ', '1234', 39),
      new Cv(4, 'sellaouti', 'aymen', 'teacher', '', '1234', 39),
    ];
  }

  ngOnInit(): void {
  }

  forwardSelectedCv(cv: Cv) {
    this.forwardCv.emit(cv);
  }
}
