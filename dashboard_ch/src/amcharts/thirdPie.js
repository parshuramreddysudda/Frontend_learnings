import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import Data from '../amcharts/thirdData';


am4core.useTheme(am4themes_animated);

class SecondAm extends Component {
  componentDidMount() {
    let chart = am4core.create("chartdiv3", am4charts.XYChart);
    chart.data=Data;
    let pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "litres";
pieSeries.dataFields.category = "country";
chart.innerRadius=am4core.percent(50);
pieSeries.slices.template.stroke = am4core.color("#4a2abb");
pieSeries.slices.template.strokeWidth = 2;
pieSeries.slices.template.strokeOpacity = 1;

   this.chart=chart;
  chart.legend = new am4charts.Legend();
  }
  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <div id="chartdiv3" style={{ width: "100%", height: "500px" }}></div>
    );
  }
}

export default SecondAm;