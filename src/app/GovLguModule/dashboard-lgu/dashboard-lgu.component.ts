import { Component, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_material from "@amcharts/amcharts4/themes/material";
@Component({
  selector: 'app-dashboard-lgu',
  templateUrl: './dashboard-lgu.component.html',
  styleUrls: ['./dashboard-lgu.component.scss'],
})
export class DashboardLguComponent implements OnInit {
  maindatas = [
    {
      profile:"https://th.bing.com/th/id/OIP.wondKg_qFZ_ztzdFbPpKPAHaE8?pid=Api&rs=1",
      displayName:"Juan dela cruz", 
      createdAt:"June 05 2020",
      msg:"Weugiat expetendis ei mei, ei liber aperiri velendis ei mei, ei liber aperiri vel"
    },
    {
      profile:"https://assets.fastcompany.com/image/upload/w_1280,f_auto,q_auto,fl_lossy/fc/3063511-poster-p-1-in-nicaragua-poor-farmers-boost-their-income-by-planting-trees-to-soak-up-co2.jpg",
      displayName:"Juan dela cruz", 
      createdAt:"June 05 2020",
      msg:"Q, ei liber aperiri velendis ei mei, ei liber aperiri vel"
    },
    {
      profile:"http://i.huffpost.com/gen/2732934/images/o-POOR-FARMERS-FLOODS-facebook.jpg",
      displayName:"Juan dela cruz", 
      createdAt:"June 05 2020",
      msg:"C mei, ei liber aperiri velendis ei mei, ei liber aperiri vel"
    },
    {
      profile:"https://th.bing.com/th/id/OIP.CmxHM9RPfGgWnOd6LBEQbwHaKY?pid=Api&rs=1",
      displayName:"Juan dela cruz", 
      createdAt:"June 05 2020",
      msg:"Tt urbanitas vel. Feugiat expetendis ei mei, ei liber aperiri velendis ei mei, ei liber aperiri vel"
    },
    {
      profile:"https://www.irrawaddy.com/wp-content/uploads/2013/01/8.-photo-farmer-e1359118490839.jpg",
      displayName:"Juan dela cruz", 
      createdAt:"June 05 2020",
      msg:"Rr aperiri velendis ei mei, ei liber aperiri vel"
    },
    {
      profile:"http://i.telegraph.co.uk/multimedia/archive/01362/china-farmers_1362770c.jpg",
      displayName:"Juan dela cruz", 
      createdAt:"June 05 2020",
      msg:"Wexpetendis ei mei, ei liber aperiri velendis ei mei, ei liber aperiri vel"
    },
  ]
  constructor() { }

  ngOnInit() { 
    this.initPieChart(); 
    this.linechart();
  }












  initPieChart(){
    
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_material);
    // Themes end

    // Create chart instance
    let piechart = am4core.create("chartdiv", am4charts.PieChart);
  
    // piechart.minWidth =200;
    // piechart.maxWidth =400;
    // piechart.maxHeight =400;
    // piechart.minHeight =200;
    // Add data
    piechart.responsive.enabled =true;
piechart.legend = new am4charts.Legend();
    piechart.data = [ {
      "title": "Fish",
      "number": 501.9
    }, {
      "title": "Rice",
      "number": 301.9
    }, {
      "title": "Tomatoes",
      "number": 201.1
    }, {
      "title": "Papaya",
      "number": 165.8
    }, {
      "title": "Banana",
      "number": 139.9
    }, {
      "title": "Mango",
      "number": 128.3
    }, {
      "title": "Pig",
      "number": 99
    }
    ];

    // Add and configure Series
    let pieSeries = piechart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "number";
    pieSeries.dataFields.category = "title";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    piechart.hiddenState.properties.radius = am4core.percent(0);


  }
  initBarChart(){
    am4core.useTheme(am4themes_material);
    // Themes end

    let chart = am4core.create("barChart", am4charts.XYChart);

    // chart.responsive.enabled =true;
    // chart.legend = new am4charts.Legend();
    chart.data = [{
    "title": "To market",
    "number": 4
    }, {
    "title": "Lack of machinery",
    "number": 3
    }, {
    "title": "Oversupply",
    "number": 6
    }, {
    "title": "Good for harvest",
    "number": 7
    }, {
    "title": "Lack of financial",
    "number": 9
    }, {
    "title": "Others",
    "number": 2
    } ];

    chart.padding(40, 40, 40, 40);

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "title";
    categoryAxis.renderer.minGridDistance = 60;
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.grid.template.disabled = true;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.extraMax = 0.1;
    valueAxis.rangeChangeEasing = am4core.ease.linear;
    valueAxis.rangeChangeDuration = 1500;

    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = "title";
    series.dataFields.valueY = "number";
    series.tooltipText = "{valueY.value}"
    series.columns.template.strokeOpacity = 0;
    series.columns.template.column.cornerRadiusTopRight = 10;
    series.columns.template.column.cornerRadiusTopLeft = 10;
    series.interpolationDuration = 1500;
    series.interpolationEasing = am4core.ease.linear;
    let labelBullet = series.bullets.push(new am4charts.LabelBullet());
    labelBullet.label.verticalCenter = "bottom";
    labelBullet.label.dy = -10;
    labelBullet.label.text = "{values.valueY.workingValue.formatNumber('#.')}";

    chart.zoomOutButton.disabled = true;

    // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
    series.columns.template.adapter.add("fill", function (fill, target) {
    return chart.colors.getIndex(target.dataItem.index);
    });  
  }
  linechart(){  
    am4core.useTheme(am4themes_material); 
    let chart = am4core.create("lineChart", am4charts.XYChart);

    // Add data
    chart.data =  [{
      "title": "To market",
      "number": 4
      }, {
      "title": "Lack of machinery",
      "number": 3
      }, {
      "title": "Oversupply",
      "number": 6
      }, {
      "title": "Good for harvest",
      "number": 7
      }, {
      "title": "Lack of financial",
      "number": 9
      }, {
      "title": "Others",
      "number": 2
      } ];

    // Create axes

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "title";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    // categoryAxis.renderer.labels.template.adapter.add("dy", function(dy, target) {
    //   // if (target.dataItem && target.dataItem.index & 2 === 2) {
    //     if (target.dataItem && target.dataItem.index == 2) {
    //     return dy + 25;
    //   }
    //   return dy;
    // });

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "number";
    series.dataFields.categoryX = "title";
    series.name = "number";
    series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series.columns.template.fillOpacity = .8;

    series.columns.template.strokeOpacity = 0;
    series.columns.template.column.cornerRadiusTopRight = 10;
    series.columns.template.column.cornerRadiusTopLeft = 10;
    // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
    series.columns.template.adapter.add("fill", function (fill, target) {
    return chart.colors.getIndex(target.dataItem.index);
    }); 
  }
}
