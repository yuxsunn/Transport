let label_purpose = ["Work related", "Recreational & social", "Accompany, Pick-up & Drop-off", "Shopping", "Education", "Other"];
let init_weekday = ["57", "16.74", "15.55", "7.23", "2.55", "0.93"];
let init_weekend = ["18.29", "46.96", "16.21", "16.08", "0.92", "1.53"];
purpose_option = {
    title: {
      text: 'Weather Statistics'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['weekday', 'weekend']
    },
    grid: {
      left: 250
    },
    toolbox: {
      show: true,
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'value',
      name: 'Days',
      axisLabel: {
        formatter: '{value}'
      }
    },
    yAxis: {
      type: 'category',
      inverse: true,
      data: label_purpose,
      axisLabel: {
        margin: 20,
      }
    },
    series: [
      {
        name: 'weekday',
        type: 'bar',
        data: init_weekday,
        label: true,
      },
      {
        name: 'weekend',
        type: 'bar',
        label: true,
        data: init_weekend
      },    
    ]
  };