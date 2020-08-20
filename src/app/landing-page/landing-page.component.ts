import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() { 
    $('head').append('<link rel="stylesheet" href="assets/web/assets/mobirise-icons-bold/mobirise-icons-bold.css">');
    $('head').append('<link rel="stylesheet" href="assets/web/assets/mobirise-icons/mobirise-icons.css">');
    $('head').append('<link rel="stylesheet" href="assets/web/assets/mobirise-icons2/mobirise2.css">');
    $('head').append('<link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">');
    $('head').append('<link rel="stylesheet" href="assets/bootstrap/css/bootstrap-grid.min.css">');
    $('head').append('<link rel="stylesheet" href="assets/bootstrap/css/bootstrap-reboot.min.css">');
    $('head').append('<link rel="stylesheet" href="assets/dropdown/css/style.css">');
    $('head').append('<link rel="stylesheet" href="assets/tether/tether.min.css">');
    $('head').append('<link rel="stylesheet" href="assets/socicon/css/styles.css">');
    $('head').append('<link rel="stylesheet" href="assets/theme/css/style.css">');
    $('head').append('<link rel="preload" as="style" href="assets/mobirise/css/mbr-additional.css"><link rel="stylesheet" href="assets/mobirise/css/mbr-additional.css" type="text/css">');
  } 
}
