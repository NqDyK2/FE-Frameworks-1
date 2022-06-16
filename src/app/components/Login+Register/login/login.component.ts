import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userServices: UsersService, private router: Router) { }

  ngOnInit(): void {
  }
  submitForm(formAdd: NgForm) {
    this.userServices.signin(formAdd.value).subscribe((data) => {
      localStorage.setItem("user", JSON.stringify(data))
      window.location.href = "http://localhost:4200/admin"
    })
  }
}