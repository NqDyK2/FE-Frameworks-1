import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash1',
  templateUrl: './dash1.component.html',
  styleUrls: ['./dash1.component.scss']
})
export class Dash1Component implements OnInit {
  isList: number | undefined;
  isMenu: boolean = false;
  isSearch: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
