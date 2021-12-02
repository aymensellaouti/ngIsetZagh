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
        this.cvService.findCvById(mesParams['id']).subscribe(
          (cv) => {
            this.cv = cv;
          },
          (erreur) => {  this.router.navigate(['cv']);}
        );
      }
    );
    // this.activatedRoute.queryParams.subscribe(
    //   (qp) => {
    //     console.log(qp);
    //   }
    // );

  }

  deleteCv() {
    this.cvService.deleteCv(this.cv).subscribe(
      (success) => {    this.router.navigate(['cv']); },
      (erreur) => {
        console.log(erreur);
      }
    );

  }
}
