import {Component, DoCheck, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  name = 'sellaouti';
  firstname = 'aymen';
  path = 'rotating_card_profile.png';
  constructor() { }
  ngOnInit(): void {
  }

}
