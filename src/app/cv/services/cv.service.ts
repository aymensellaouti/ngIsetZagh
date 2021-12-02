import { Injectable } from '@angular/core';
import {Cv} from "../model/cv";
import {Observable, Subject} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
const API_CV = 'https://immense-citadel-91115.herokuapp.com/api/personnes/';
@Injectable({
  providedIn: 'root'
})
export class CvService {
  selectItemSubject: Subject<Cv> =  new Subject<Cv>();
  cvs: Cv[] = [];
  constructor(
    private http: HttpClient
  ) {
    this.cvs = [
      new Cv(1, 'sellaouti', 'aymen', 'teacher', 'rotating_card_profile3.png', '1234', 39),
      new Cv(2, 'sellaouti', 'aymen', 'teacher', 'rotating_card_profile2.png', '1234', 39),
      new Cv(3, 'sellaouti', 'aymen', 'teacher', '                   ', '1234', 39),
      new Cv(4, 'sellaouti', 'aymen', 'teacher', '', '1234', 39),
    ];
  }
  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(API_CV);
  }
  getFakeCvs(): Cv[] {
    return this.cvs;
  }
  findCvById(id: number): Observable<Cv> {
    return this.http.get<Cv>(API_CV + id);
  }
  findFakeCvById(id: number): Cv {
    return this.cvs.find(
      (cv) => cv.id === +id
    );
  }
  deleteCv(cv: Cv): Observable<any> {
    return this.http.delete<Cv>(API_CV + cv?.id);
  }
  deleteFakeCv(cv: Cv): boolean {
    const index = this.cvs.indexOf(cv);
    if (index != -1) {
      this.cvs.splice(index, 1);
      return true;
    }
    return false;
  }
  selectCv(cv: Cv): void {
    this.selectItemSubject.next(cv);
  }
}
