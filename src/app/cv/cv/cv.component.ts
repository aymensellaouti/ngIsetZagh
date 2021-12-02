import { Component, OnInit } from '@angular/core';
import {Cv} from "../model/cv";
import {LoggerService} from "../../services/logger.service";
import {SayHelloService} from "../../services/say-hello.service";
import {TodoService} from "../../todo/services/todo.service";
import {ToastrService} from "ngx-toastr";
import {CvService} from "../services/cv.service";
import {distinctUntilChanged} from "rxjs/operators";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  // selectedCv: Cv = null;
  // sayHelloService = new SayHelloService();
  nb = 0;
  constructor(
    private loggerService: LoggerService,
    private sayHelloService: SayHelloService,
    private todoService: TodoService,
    private toastr: ToastrService,
    private cvService: CvService
  ) { }

  ngOnInit(): void {
    this.sayHelloService.hello();
    this.loggerService.logger('cc je suis le Cv Component');
    this.toastr.info('bienvenu dans notre cvTech');
    this.cvService.selectItemSubject
      .pipe(
        distinctUntilChanged()
      )
      .subscribe(
      (jeMenFou) => { this.nb++; }
    )
  }
}
