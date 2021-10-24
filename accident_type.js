/**
 * Eidited from 
 * https://echarts.apache.org/examples/zh/editor.html?c=pictorialBar-vehicle
 * 
 */


var chartDom = document.getElementById('accident_type');
var accidentChart = echarts.init(chartDom);
var accidentOption;

const labelSetting = {
  show: true,
  position: 'right',
  offset: [10, 0],
  fontSize: 16
};
accidentOption = {
  title: {
    text: 'Accident types in Melbourne for five years',
    top: "3%"
  },
  color: ['#065db4'],
  // tooltip: {
  //   trigger: 'axis',
  //   axisPointer: {
  //     type: 'shadow'
  //   }
  // },
  grid: {
    containLabel: true,
    left: 20
  },
  yAxis: {
    data: ['Collision with vehicle', 'Collision with bicycle', 'Struck Pedestrian','Other accident', 'Collision with Fixed object'],
    inverse: true,
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: {
      margin: 30,
      fontSize: 14
    },
    axisPointer: {
      label: {
        show: true,
        margin: 30
      }
    }
  },
  xAxis: {
    splitLine: { show: false },
    axisLabel: { show: false },
    axisTick: { show: false },
    axisLine: { show: false }
  },
  series: [
    {
      name: '2016',
      type: 'pictorialBar',
      barGap: '10%',
      label: labelSetting,
      symbolRepeat: true,
      symbolSize: ['80%', '60%'],
      data: [
        {
            //vehicle
          value: 1698,
          symbol: pathSymbols.private_vehicle,
          symbolSize: [30, 25]
        },
        {
            //bycicle
          value: 1144,
          symbol: pathSymbols.bicycle,
          symbolSize: [30, 25]
        },
        {
            //pedestrain
          value: 690,
          symbol: pathSymbols.walking,
          symbolSize: [25, 30]
        },
        {
            //other
          value: 314,
          symbol: pathSymbols.other,
          symbolSize: [30, 25]
          
        },
        {
            //fix
          value: 194,
          symbol: pathSymbols.fix_object,
          symbolSize: [30, 25]
        }
      ]
    }
  ]
};

accidentOption && accidentChart.setOption(accidentOption);
