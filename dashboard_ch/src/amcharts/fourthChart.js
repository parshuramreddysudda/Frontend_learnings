import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import Data from '../amcharts/thirdData';

// am4core.useTheme(am4themes_animated);

class SecondAm extends Component {
  componentDidMount() {

    // Create chart instance

    let chart = am4core.create("chartdiv4", am4charts.PieChart3D);
    chart.paddingRight = 180;
    chart.paddingLeft=180;
    // Add data
    chart.data = [{
      "country": "Lithuania",
      "litres": 501.9,
      "colors":'white'
    }, {
      "country": "Czech Republic",
      "litres": 301.9,
      "color":'blue'
    }, {
      "country": "Ireland",
      "litres": 201.1,
      "color":'blue'
    }, {
      "country": "Germany",
      "litres": 165.8,
      "color":'blue'
    }, {
      "country": "Australia",
      "litres": 139.9,
      "color":'blue'
    }, {
      "country": "Austria",
      "litres": 128.3,
      "color":'blue'
    }, {
      "country": "UK",
      "litres": 99,
      "color":'black'
    }, {
      "country": "Belgium",
      "litres": 60,
      "color":'blue'
    }, {
      "country": "The Netherlands",
      "litres": 50,
      "color":'blue'
    }];
    
    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries3D());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    chart.innerRadius=am4core.percent(40);
    pieSeries.slices.template.stroke=am4core.color("#ffffff");
    pieSeries.slices.template.strokeWidth=3;
    pieSeries.slices.template.strokeOpacity=2;
    let hs = pieSeries.slices.template.states.getKey("active");
hs.properties.shiftRadius = 0;
let hove =pieSeries.slices.template.states.getKey("hover");
hove.properties.scale=1;
hove.properties.fillOpacity=0.2;

 

  }
  componentWillUnmount(){
      if(this.chart){
          this.chart.dispose();
      }
  }

  render() {
    return (
      <div className="container" id="chartdiv4" style={{ width: "100%", height: "500px" }}></div>
    );
  }
}

export default SecondAm;