import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isList: number | undefined;
  isMenu: boolean = false;
  isSearch: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
