import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Cv} from "../model/cv";
import {CvService} from "../services/cv.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  cvs: Cv[] = [];
  // @Output() forwardCv = new EventEmitter<Cv>();
  constructor(
    private cvService: CvService,
    private toaster: ToastrService
  ) {}
  ngOnInit(): void {
    this.cvService.getCvs().subscribe(
      (cvsBD) => {
        this.cvs = cvsBD;
      },
      (erreur) => {
        this.cvs = this.cvService.getFakeCvs();
        this.toaster.error(`Les données sont Fake veuillez contacter l'admin`);
      }
    );
  }
  // forwardSelectedCv(cv: Cv) {
  //   this.forwardCv.emit(cv);
  // }
}
