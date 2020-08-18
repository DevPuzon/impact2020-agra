import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  maindatas = [
    {
      profile:"https://th.bing.com/th/id/OIP.CmxHM9RPfGgWnOd6LBEQbwHaKY?pid=Api&rs=1",
      displayName:"Juan dela cruz", 
      createdAt:"June 05 2020",
      msg:"Tt urbanitas vel. Feugiat expetendis ei mei, ei liber aperiri velendis ei mei, ei liber aperiri vel"
    },
    {
      profile:"https://th.bing.com/th/id/OIP.wondKg_qFZ_ztzdFbPpKPAHaE8?pid=Api&rs=1",
      displayName:"Juan dela cruz", 
      createdAt:"June 05 2020",
      msg:"Weugiat expetendis ei mei, ei liber aperiri velendis ei mei, ei liber aperiri vel"
    },
    {
      profile:"http://i.huffpost.com/gen/2732934/images/o-POOR-FARMERS-FLOODS-facebook.jpg",
      displayName:"Juan dela cruz", 
      createdAt:"June 05 2020",
      msg:"C mei, ei liber aperiri velendis ei mei, ei liber aperiri vel"
    },
    {
      profile:"https://assets.fastcompany.com/image/upload/w_1280,f_auto,q_auto,fl_lossy/fc/3063511-poster-p-1-in-nicaragua-poor-farmers-boost-their-income-by-planting-trees-to-soak-up-co2.jpg",
      displayName:"Juan dela cruz", 
      createdAt:"June 05 2020",
      msg:"Q, ei liber aperiri velendis ei mei, ei liber aperiri vel"
    },
    {
      profile:"http://i.telegraph.co.uk/multimedia/archive/01362/china-farmers_1362770c.jpg",
      displayName:"Juan dela cruz", 
      createdAt:"June 05 2020",
      msg:"Wexpetendis ei mei, ei liber aperiri velendis ei mei, ei liber aperiri vel"
    },
    {
      profile:"https://www.irrawaddy.com/wp-content/uploads/2013/01/8.-photo-farmer-e1359118490839.jpg",
      displayName:"Juan dela cruz", 
      createdAt:"June 05 2020",
      msg:"Rr aperiri velendis ei mei, ei liber aperiri vel"
    },
  ]
  constructor() { }

  ngOnInit() { 
  }

}
