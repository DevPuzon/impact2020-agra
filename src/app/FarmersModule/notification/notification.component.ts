import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  alls=[
    {
      profile:"heart-circle-outline",
      color:"danger",
      createdAt:"June 06 2020",
      
      msg:"Vel facete inimicus cu, an feugiat urbanitas vel. Feugiat expetendis ei mei, ei liber aperiri vel"
    },
    {
      profile:"repeat-outline",
      color:"success",
      createdAt:"June 06 2020",
      msg:"Wugiat urbanitas vel. Feugiat expetendis ei mei, ei liber aperiri vel"
    },
    {
      profile:"heart-circle-outline",
      color:"danger",
      createdAt:"June 06 2020",
      msg:"Animicus cu, an feugiat urbanitas vel. Feugiat expetendis ei mei, ei liber aperiri vel"
    },
    {
      profile:"send-outline",
      color:"primary",
      createdAt:"June 06 2020",
      msg:"Q, an feugiat urbanitas vel. Feugiat expetendis ei mei, ei liber aperiri vel"
    },
    {
      profile:"repeat-outline",
      color:"success",
      createdAt:"June 06 2020",
      
      msg:"Bcu, an feugiat urbanitas vel. Feugiat expetendis ei mei, ei liber aperiri vel"
    },
    {
      profile:"send-outline",
      color:"primary",
      createdAt:"June 06 2020", 
      msg:"Wugiat urbanitas vel. Feugiat expetendis ei mei, ei liber aperiri vel"
    },
  ]
  constructor() { }

  ngOnInit() { 
  }

}
