import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Map, tileLayer, marker, icon } from 'leaflet'; 
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
declare var $ ;
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit { 

  constructor(public http: HttpClient,
    public plt: Platform,
    public router: Router) {}
  ngOnInit() {   
  } 

  ngAfterViewInit() {
    this.plt.ready().then(() => {
      this.http.get('https://oghuxxw1e6.execute-api.us-east-1.amazonaws.com/dev') 
      .subscribe(restaurants => this.initMap(restaurants));
    });
  }
  initMap(restaurants) {
    console.log(restaurants);
    const map = new Map('map').setView([11.112666, 122.509476], 5); 
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo( map ); 
    const customMarkerIcon = icon({
      iconUrl: 'https://th.bing.com/th/id/OIP.YgctbjghYGs5nK7-SMbySAHaHa?pid=Api&rs=1',
      iconSize: [64, 64], 
      popupAnchor: [0, -20]
    }); 
    restaurants.forEach((restaurant) => {
      marker([restaurant.position.lat, restaurant.position.lgn], {icon: customMarkerIcon})
      .bindPopup(`<b>${restaurant.title}</b>`, { autoClose: false })
      .on('click', () => this.router.navigateByUrl('/restaurant'))
      .addTo(map).openPopup();
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
