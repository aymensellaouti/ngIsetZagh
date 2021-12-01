import { Component, OnInit } from '@angular/core';
import {Cv} from "../model/cv";
import {ActivatedRoute, Router} from "@angular/router";
import {CvService} from "../services/cv.service";

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit {
  cv: Cv = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (mesParams) => {
        this.cv = this.cvService.findCvById(mesParams['id']);
      }
    );
    this.activatedRoute.queryParams.subscribe(
      (qp) => {
        console.log(qp);
      }
    );
    if (!this.cv) {
      this.router.navigate(['cv']);
    }
  }

}
