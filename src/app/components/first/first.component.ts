import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  name = 'aymen';
  isHidden = true;
  message = "show";
  inputContent = '';
  //attributs
  //methodes
  constructor() {
  }

  ngOnInit(): void {
  }

  showHide() {
    this.isHidden = !this.isHidden;
    (this.message === 'show') ? this.message = 'hide' : this.message = 'show';
  }

  changeInputContent(newValue: string) {
    this.inputContent = newValue;
  }
}
