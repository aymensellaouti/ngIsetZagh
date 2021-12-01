import { Component, OnInit } from '@angular/core';
import {Cv} from "../model/cv";
import {LoggerService} from "../../services/logger.service";
import {SayHelloService} from "../../services/say-hello.service";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  selectedCv: Cv = null;
  // sayHelloService = new SayHelloService();
  constructor(
    private loggerService: LoggerService,
    private sayHelloService: SayHelloService,
  ) { }

  ngOnInit(): void {
    this.sayHelloService.hello();
    this.loggerService.logger('cc je suis le Cv Component');
  }

  getCv(cv: Cv) {
    this.selectedCv = cv;
  }
}
