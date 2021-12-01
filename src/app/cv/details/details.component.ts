import {Component, Input, OnInit} from '@angular/core';
import {Cv} from "../model/cv";
import {EmbaucheService} from "../services/embauche.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() cv: Cv = null;
  constructor(
    private embaucheService: EmbaucheService,
    private toaster: ToastrService
  ) { }

  ngOnInit(): void {
  }
  embaucher() {
    if(!this.embaucheService.embaucher(this.cv)) {
      this.toaster.warning(`${this.cv.name} est déjà dans la liste`);
    } else {
      this.toaster.success(`${this.cv.name} a été pré sélectionné`);
    }
  }

}
