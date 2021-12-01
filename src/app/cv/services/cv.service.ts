import { Injectable } from '@angular/core';
import {Cv} from "../model/cv";

@Injectable({
  providedIn: 'root'
})
export class CvService {
  cvs: Cv[] = [];
  constructor() {
    this.cvs = [
      new Cv(1, 'sellaouti', 'aymen', 'teacher', 'rotating_card_profile3.png', '1234', 39),
      new Cv(2, 'sellaouti', 'aymen', 'teacher', 'rotating_card_profile2.png', '1234', 39),
      new Cv(3, 'sellaouti', 'aymen', 'teacher', '                   ', '1234', 39),
      new Cv(4, 'sellaouti', 'aymen', 'teacher', '', '1234', 39),
    ];
  }
  getCvs(): Cv[] {
    return this.cvs;
  }
}
