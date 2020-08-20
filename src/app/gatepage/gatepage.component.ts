import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gatepage',
  templateUrl: './gatepage.component.html',
  styleUrls: ['./gatepage.component.scss'],
})
export class GatepageComponent implements OnInit {
  splash = false;
  constructor() { }

  ngOnInit() { 
    setTimeout(() => this.splash = false, 2600);
  }

}
