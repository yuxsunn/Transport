/**
  * Edited from https://echarts.apache.org/examples/en/editor.html?c=pictorialBar-velocity
  * 
  */

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;
let transport_type = [];
let value = [];
let clickedType = "Private Vehicle";
for(let i = 0; i < transport_option_data.length; i++){
    transport_type.push(transport_option_data[i].Type);
    value.push(transport_option_data[i]["Total Number"]);
}

option = {
  title: {
    text: 'The major travel methods in Melbourne in 2018',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'none'
    },
    formatter: function (params) {
      return params[0].name + ': ' + params[0].value;
    }
  },
  grid: {
    top: '12%'
  },
  xAxis: {
    data: transport_type,
    axisTick: { show: false },
    axisLine: { show: false },
    axisLabel: {
      interval: 0,
      fontSize: 10
    }
  },
  yAxis: {
    splitLine: { show: false },
    axisTick: { show: false },
    axisLine: { show: false },
    axisLabel: { show: false }
  },
  color: ['#065db4'],
  series: [
    {
      name: 'hill',
      type: 'pictorialBar',
      barCategoryGap: '-130%',
      // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
      symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
      itemStyle: {
        normal: {
              color: function(params) {
                  if(clickedType==transport_option_data[params.dataIndex].Type) {
                    return "#67bfaf";
                  }else{
                    return '#065db4';
                  }
              },
              opacity: 0.75,
        },
      },
      emphasis: {
        itemStyle: {
          opacity: 1
        }
      },
      data: value,
      z: 10
    },
    {
      type: 'pictorialBar',
      barGap: '-100%',
      symbolPosition: 'end',
      symbolSize: 50,
      symbolOffset: [0, '-120%'],
      itemStyle: {
        normal: {
              color: function(params) {
                  if(clickedType==transport_option_data[params.dataIndex].Type) {
                    return "#67bfaf";
                  }else{
                    return '#065db4';
                  }
              },
              opacity: 0.75,
        },
      },
      data: [
        {
          name: "Private Vehicle",
          value: 6773,
          symbol: pathSymbols.private_vehicle,
          symbolSize: [30, 30]
        },
        {
          name: "Train",
          value: 4969,
          symbol: pathSymbols.train,
          symbolSize: [30, 25]
        },
        {
          name: "Walking",
          value: 3246,
          symbol: pathSymbols.walking,
          symbolSize: [30, 35]
        },
        {
          name: "Tram",
          value: 1331,
          symbol: pathSymbols.tram,
          symbolSize: [30, 30]
        },
        {
          name: "Bicycle",
          value: 577,
          symbol: pathSymbols.bicycle,
          symbolSize: [30, 25]
        },
        {
          name: "Bus",
          value: 286,
          symbol: pathSymbols.bus,
          symbolSize: [30, 25]
        },
        {
          name: "Taxi",
          value: 156,
          symbol: pathSymbols.taxi,
          symbolSize: [30, 30]
        },
        {
          name: "Other",
          value: 89,
          symbol: pathSymbols.other,
          symbolSize: [30, 30]
        },
        {
          name: "Motorcycle",
          value: 82,
          symbol: pathSymbols.motorcycle,
          symbolSize: [30, 30]
        }
      ]
    }
  ]
};

option && myChart.setOption(option);


var chartDom = document.getElementById('purpose');
var purposeChart = echarts.init(chartDom);
// var purpose_option;
purpose_option && purposeChart.setOption(purpose_option);




myChart.on('click', function (params) {
    // alert(params.name);
    // console.log(params.dataIndex);
    let result = process_data(transport_option_data[params.dataIndex]);
    let weekday = result[0];
    let weekend = result[1];
    purpose_option.title.text = "Travel purpose for " + transport_type[params.dataIndex];
    // console.log(label_purpose[params.dataIndex])
    purpose_option.series[0].data = weekday;
    purpose_option.series[1].data = weekend;
    purposeChart.setOption(purpose_option);
    clickedType = transport_option_data[params.dataIndex].Type;
    myChart.setOption(option);
});


function process_data(data){
  let result = [];
  let weekday = [];
  let weekend = [];
  weekday.push(data.weekday.purpose['Work related']);
  weekend.push(data.weekend.purpose['Work related']);

  weekday.push(data.weekday.purpose['Recreational & social']);
  weekend.push(data.weekend.purpose['Recreational & social']);

  weekday.push(data.weekday.purpose['Accompany, Pick-up & Drop-off']);
  weekend.push(data.weekend.purpose['Accompany, Pick-up & Drop-off']);

  weekday.push(data.weekday.purpose['Shopping']);
  weekend.push(data.weekend.purpose['Shopping']);

  weekday.push(data.weekday.purpose['Education']);
  weekend.push(data.weekend.purpose['Education']);

  weekday.push(data.weekday.purpose['Other']);
  weekend.push(data.weekend.purpose['Other']);

  result.push(weekday);
  result.push(weekend);
  return result;
}
