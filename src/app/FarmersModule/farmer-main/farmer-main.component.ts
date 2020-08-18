import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farmer-main',
  templateUrl: './farmer-main.component.html',
  styleUrls: ['./farmer-main.component.scss'],
})
export class FarmerMainComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() { 
  }

}
