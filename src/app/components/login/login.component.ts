import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth/services/auth.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private  authService: AuthService,
    private router: Router,
    private toaster: ToastrService
  ) { }

  ngOnInit(): void {
  }

  login(credentials: any) {
    this.authService.login(credentials).subscribe(
      (data) => {
        localStorage.setItem('token', data['id']);
        this.router.navigate(['cv']);
      },
      (erreur) => {
        this.toaster.error("Veuillez vérifier vos credentials");
      }
    )
  }
}
