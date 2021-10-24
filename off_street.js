 /**
  * Eidited from  https://www.amcharts.com/demos/variance-indicators/
  * 
  */


am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create("off_street", am4charts.XYChart);
    
    // Add data
    chart.data = [
        {
            "year": "2002",
            "value": 136652
          },{
            "year": "2003",
            "value": 138209
          },
          {
            "year": "2004",
            "value": 146796
          },
          {
            "year": "2005",
            "value": 155999
          },
          {
            "year": "2006",
            "value": 164740
          },
          {
            "year": "2007",
            "value": 167775
          },
          {
            "year": "2008",
            "value": 171003
          },
          {
            "year": "2009",
            "value": 176243
          },
          {
            "year": "2010",
            "value": 177293
          },
        {
      "year": "2011",
      "value": 180967
    }, {
      "year": "2012",
      "value": 182683
    }, {
      "year": "2013",
      "value": 186134
    }, {
      "year": "2014",
      "value": 190022
    }, {
      "year": "2015",
      "value": 193528
    }, {
      "year": "2016",
      "value": 193582
    }, {
      "year": "2017",
      "value": 195514
    },
    {
        "year": "2018",
        "value": 198528
      },
      {
        "year": "2019",
        "value": 198768
      }
];
    
    // Populate data
    for (var i = 0; i < (chart.data.length - 1); i++) {
      chart.data[i].valueNext = chart.data[i + 1].value;
    }
    
    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 10;
    categoryAxis.renderer.grid.top = "20%";
    
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.max = 210000;
    
    var title = chart.titles.create();
    title.text = "Number of off-street commercial parking slot from 2002 to 2019";
    title.fontSize = 20;
    title.fontWeight = 700;
    title.marginBottom = 10;

    // Create series
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "value";
    series.dataFields.categoryX = "year";
    
    // Add series for showing variance arrows
    var series2 = chart.series.push(new am4charts.ColumnSeries());
    series2.dataFields.valueY = "valueNext";
    series2.dataFields.openValueY = "value";
    series2.dataFields.categoryX = "year";
    series2.columns.template.width = 1;
    series2.fill = am4core.color("#555");
    series2.stroke = am4core.color("#555");
    
    // Add a triangle for arrow tip
    var arrow = series2.bullets.push(new am4core.Triangle);
    arrow.width = 10;
    arrow.height = 10;
    arrow.horizontalCenter = "middle";
    arrow.verticalCenter = "top";
    arrow.dy = -1;
    
    // Set up a rotation adapter which would rotate the triangle if its a negative change
    arrow.adapter.add("rotation", function(rotation, target) {
      return getVariancePercent(target.dataItem) < 0 ? 180 : rotation;
    });
    
    // Set up a rotation adapter which adjusts Y position
    arrow.adapter.add("dy", function(dy, target) {
      return getVariancePercent(target.dataItem) < 0 ? 1 : dy;
    });
    
    // Add a label
    var label = series2.bullets.push(new am4core.Label);
    label.padding(10, 10, 10, 10);
    label.text = "";
    label.fill = am4core.color("#0c0");
    label.strokeWidth = 0;
    label.horizontalCenter = "middle";
    label.verticalCenter = "bottom";
    label.fontWeight = "bolder";
    
    // Adapter for label text which calculates change in percent
    label.adapter.add("textOutput", function(text, target) {
      var percent = getVariancePercent(target.dataItem);
      return percent ? percent + "%" : text;
    });
    
    // Adapter which shifts the label if it's below the variance column
    label.adapter.add("verticalCenter", function(center, target) {
      return getVariancePercent(target.dataItem) < 0 ? "top" : center;
    });
    
    // Adapter which changes color of label to red
    label.adapter.add("fill", function(fill, target) {
      return getVariancePercent(target.dataItem) < 0 ? am4core.color("#c00") : fill;
    });
    
    function getVariancePercent(dataItem) {
      if (dataItem) {
        var value = dataItem.valueY;
        var openValue = dataItem.openValueY;
        var change = value - openValue;
        return Math.round(change / openValue * 100);
      }
      return 0;
    }
    
    });