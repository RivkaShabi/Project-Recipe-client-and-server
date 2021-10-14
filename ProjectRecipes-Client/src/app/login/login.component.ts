import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/models/User';
import { UserService } from '../User.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router, public ser: UserService) { }


  loginForm: FormGroup;
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'nameUser': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)]))
    }

    )

  }
  s: User = new User(null, null, null, null, null);
  checkUser(passwordInsert: string, nameInsert: string) {
    this.s.NameUser = nameInsert;
    this.s.Password = passwordInsert;
    // וססמא שגויה המשתמש קיים
    var obs = this.ser.Login(this.s).subscribe(
      data => {
        if (data >=0) {
          this.router.navigate(["allrecipes"]);
          sessionStorage.setItem("user",data.toString());
        }
        else if (data == -2) {
          alert("המשתמש קיים אך הסיסמא שגויה");

        }
        else {
          //שם משתמש לא קיים
          //naviagate להתנווט
          this.router.navigate(["register", nameInsert]);
        }
      }
    );





  }


}
