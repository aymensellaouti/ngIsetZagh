import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ToastrService} from "ngx-toastr";
import {filter, map} from "rxjs/operators";

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css']
})
export class TestObservableComponent implements OnInit {

  constructor(
    private toaster: ToastrService
  ) {
  }

  ngOnInit(): void {
    const observable = new Observable<number>((observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          observer.complete();
        }
        observer.next(i--);
      }, 1000);
    });
    observable.subscribe((val) => {
      console.log(val);
    });
    observable
      .pipe(
        map((val) => val * 3),
        filter( val => val % 2 == 0)
      )
      .subscribe(
      (entier) => {
        this.toaster.info(''+entier);
      },
      (erreur) => {
        this.toaster.error('erreur');
      },
      () => {
        this.toaster.success('Fin du flux');
      }
    )

  }

}
