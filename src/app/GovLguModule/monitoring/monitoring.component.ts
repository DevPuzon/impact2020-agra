import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Map, tileLayer, marker, icon } from 'leaflet'; 
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 declare var $;
@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.scss'],
})
export class MonitoringComponent implements OnInit {
  pins = [
    {
      pin:1,
      position:{
        lat:13.4210,
        lgn:123.4137,
      },
      title:"Bicol"
    },
    {
      pin:4,
      position:{
        lat:11.0891,
        lgn:124.8923,
      },
      title:"Leyte"
    },
    {
      pin:3,
      position:{
        lat:10.3321,
        lgn:123.9357,
      },
      title:"Mandaue"
    },
    {
      pin:5,
      position:{
        lat:11.5795,
        lgn:124.9748,
      },
      title:"Samar"
    },
    {
      pin:0,
      position:{
        lat:9.8500,
        lgn:124.1435,
      },
      title:"Bohol"
    },
    {
      pin:3,
      position:{
        lat:10.3157,
        lgn:123.8854,
      },
      title:"Cebu"
    },
    {
      pin:2,
      position:{
        lat:7.1907,
        lgn:125.4553,
      },
      title:"Davao"
    },
  ]

  pinitem=[
    {
      pinimg:"../../assets/blue-pin.png",
      description:""
    },
    {
      pinimg:"../../assets/red-pin.png",
      description:""
    },
    {
      pinimg:"../../assets/purple-pin.png",
      description:""
    },
    {
      pinimg:"../../assets/green-pin.png",
      description:""
    },
    {
      pinimg:"../../assets/sky-pin.png",
      description:""
    },
    {
      pinimg:"../../assets/grey-pin.png",
      description:""
    },
  ]
  constructor(public http: HttpClient,
    public plt: Platform,
    public router: Router) {}
  ngOnInit() {   
  } 
  ngAfterViewInit() {
    this.plt.ready().then(() => {
      setTimeout(() => {
        this.initMap(this.pins)
      }, 1000);
    });
  }
  initMap(pins) {
    console.log(pins);
    const map = new Map('map').setView([11.112666, 122.509476], 5); 
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo( map );  
    pins.forEach((pins) => {
      console.log(pins);
      const customMarkerIcon = icon({
        iconUrl: this.pinitem[pins.pin].pinimg,
        iconSize: [64, 64], 
        popupAnchor: [0, -20]
      }); 
      marker([pins.position.lat, pins.position.lgn], {icon: customMarkerIcon})
      .bindPopup(`<b>${pins.title}</b>`, { autoClose: false })
      .on('click', () => this.router.navigateByUrl('/pins'))
      .addTo(map)
    });
  } 

  collapse(target){
    console.log($("#"+target).css('display'));
    if($("#"+target).css('display') == 'none'){
      $("#"+target).css("display", "");
    }else{
      $("#"+target).css("display", "none");
    }
  }
}
