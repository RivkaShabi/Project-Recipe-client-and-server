import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/models/User';
import { RangeValidation } from 'src/RangeValidation';
import { UserService } from '../User.service';
@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  nameU: String = "";
  s: User = new User(null, null, null, null, null);

  //בדיקת הטופס
  send() {
    console.log(this.RegisterForm.value.nameUser)
    console.log(this.RegisterForm.value.adress)

    this.s.NameUser = this.RegisterForm.value.nameUser;
    this.s.AddressUser = this.RegisterForm.value.adress;
    this.s.Password = this.RegisterForm.value.password;
    this.s.EmailUser = this.RegisterForm.value.mymail;

    var obs = this.ser.AddUser(this.s).subscribe(
      data => {
        if (data == 1) {

          this.router.navigate(["login"]);
          alert("הינך קיים כבר במערכת");
        }
        else {
          alert("המשתמש נרשם בהצלחה");
          this.router.navigate(["allrecipes"]);

        }
      }
    );



    //אם המתמש קיים הצג הודעה מתאימה
    // alert("dhdf")
    //נרשם בהצלחה
    this.router.navigate(["allrecipes"]);
  }
  constructor(public active: ActivatedRoute, public router: Router, public ser: UserService) {
    this.active.params.subscribe((x) => {
      this.nameU = x["name"]

    })
  }

  RegisterForm: FormGroup;
  ngOnInit() {
    this.RegisterForm = new FormGroup({
      'nameUser': new FormControl('', Validators.required),
      'adress': new FormControl('', Validators.required),
      'mymail': new FormControl('', Validators.compose([Validators.required, Validators.email])),
      'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)])),
      'twopassword': new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)]))
    }, RangeValidation.Confirm('password', 'twopassword'));



  }

}
