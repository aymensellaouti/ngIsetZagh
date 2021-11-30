import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  two = 'cc';
  constructor() { }

  ngOnInit(): void {
  }

  change() {
    this.two = 'une valeur';
  }

  changerTwo(valeur) {
    this.two = valeur;
  }
}
