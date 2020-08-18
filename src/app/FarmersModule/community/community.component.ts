import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss'],
})
export class CommunityComponent implements OnInit {
  maindatas = [
    {
      profile:"https://th.bing.com/th/id/OIP.CmxHM9RPfGgWnOd6LBEQbwHaKY?pid=Api&rs=1",
      displayName:"Juan dela cruz",
      msg:"Wnisl nunc. In ante metus dictum at tempor. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Neque convallis a cras semper auctor. ",
      files:[
        "https://i.ebayimg.com/images/g/4RQAAOSwbdpWUYdE/s-l400.jpg"
      ]
    },
    {
      profile:"https://th.bing.com/th/id/OIP.wondKg_qFZ_ztzdFbPpKPAHaE8?pid=Api&rs=1",
      displayName:"Juan dela cruz",
      msg:"Cr id eu nisl nunc. In ante metus dictum at tempor. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Neque convallis a cras semper auctor. ", 
    },
    {
      profile:"http://i.huffpost.com/gen/2732934/images/o-POOR-FARMERS-FLOODS-facebook.jpg",
      displayName:"Juan dela cruz",
      msg:"Aor id eu nisl nunc. In ante metus dictum at tempor. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Neque convallis a cras semper auctor. ",
      files:[
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Bu%C4%8De.jpg/1200px-Bu%C4%8De.jpg"
      ]
    },
    {
      profile:"https://assets.fastcompany.com/image/upload/w_1280,f_auto,q_auto,fl_lossy/fc/3063511-poster-p-1-in-nicaragua-poor-farmers-boost-their-income-by-planting-trees-to-soak-up-co2.jpg",
      displayName:"Juan dela cruz",
      msg:"Cr id eu nisl nunc. In ante metus dictum at tempor. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Neque convallis a cras semper auctor. ",
      files:[
        "https://th.bing.com/th/id/OIP.RTXphL_tFdHWZ-0rL1-avAHaG6?pid=Api&rs=1"
      ]
    },
    {
      profile:"http://i.telegraph.co.uk/multimedia/archive/01362/china-farmers_1362770c.jpg",
      displayName:"Juan dela cruz",
      msg:"Qsl nunc. In ante metus dictum at tempor. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Neque convallis a cras semper auctor. ",
      files:[
        "https://i.ebayimg.com/images/g/ElUAAOxy4fBTj1Dr/s-l300.jpg"
      ]
    },
    {
      profile:"https://www.irrawaddy.com/wp-content/uploads/2013/01/8.-photo-farmer-e1359118490839.jpg",
      displayName:"Juan dela cruz",
      msg:"Xl nunc. In ante metus dictum at tempor. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Neque convallis a cras semper auctor. ",
      files:[
        "https://th.bing.com/th/id/OIP.F3oZXMRhwHSv8VF07vTcbgHaFj?pid=Api&rs=1"
      ]
    },
  ]
  constructor() { }

  ngOnInit() {}

}
