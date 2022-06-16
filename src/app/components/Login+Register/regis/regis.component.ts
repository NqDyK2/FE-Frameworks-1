import { Component, Directive, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/user.service';

@Component({
  selector: 'app-regis',
  templateUrl: './regis.component.html',
  styleUrls: ['./regis.component.scss'],
})

export class RegisComponent implements OnInit {
  constructor(private UserService: UsersService, private router: Router) {}

  ngOnInit(): void {}
  submitForm(formAdd: NgForm) {
    console.log(formAdd.value);
    this.UserService.signup(formAdd.value).subscribe(() => {
      this.router.navigateByUrl("/login")
    });
  }
}