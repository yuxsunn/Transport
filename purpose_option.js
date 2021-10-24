let label_purpose = ["Work related", "Recreational & Social", "Accompany, Pick-up & Drop-off", "Shopping", "Education", "Other"];
let init_weekday = ["57", "16.74", "15.55", "7.23", "2.55", "0.93"];
let init_weekend = ["18.29", "46.96", "16.21", "16.08", "0.92", "1.53"];
purpose_option = {
    title: {
      text: 'Travel purpose for Private Vehicle',
      left: 0
    },
    tooltip: {
      formatter: function (params) {
        var htmlStr = '';
        for(var i=0;i<params.length;i++){
          var param = params[i];
          var xName = param.name;
          var seriesName = param.seriesName;
          var value = param.value;
          var color = param.color;
          
          if(i===0){
            htmlStr += xName + '<br/>';
          }
          htmlStr +='<div>';
          htmlStr += '<span style="margin-right:5px;display:inline-block;width:10px;height:10px;border-radius:5px;background-color:'+color+';"></span>';          
          htmlStr +=  seriesName + ': ' + value + '%';          
          htmlStr += '</div>';
        }
        return htmlStr;
      },
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['weekday', 'weekend'],
      top: '10%'
    },
    grid: {
      left: '24%',
      top: '18%',
    },
    xAxis: {
      type: 'value',
      name: 'Percentage',
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        formatter: '{value}%'
      }
    },
    yAxis: {
      type: 'category',
      axisLine: { show: false },
      axisTick: { show: false },
      inverse: true,
      data: label_purpose,
      axisLabel: {
        margin: 8,
        rotate: 30
      }
    },
    series: [
      {
        name: 'weekday',
        type: 'bar',
        data: init_weekday,
        label: true,
        color: '#006633'
      },
      {
        name: 'weekend',
        type: 'bar',
        label: true,
        data: init_weekend,
        color: '#99CC99'
      },    
    ]
  };