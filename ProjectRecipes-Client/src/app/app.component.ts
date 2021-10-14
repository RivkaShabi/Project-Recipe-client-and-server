import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public router: Router) { }
  title = 'ProjectRecipes';
  logout() {
    sessionStorage.clear();
    this.router.navigate(["login"]);

  }
  addRecipes() {
    if (sessionStorage.getItem("user"))
      this.router.navigate(["addrecipe"]);
    else {
      Swal.fire(
        '!אינך מחובר למערכת',
        'הינך מועבר להתחברות לאתר'
        
      )
      this.router.navigate(["login"]);
    }
  }



}
