var chartDom = document.getElementById('time');
var timeChart = echarts.init(chartDom);
var option;

const hours = [
    '12a', '1a', '2a', '3a', '4a', '5a', '6a',
    '7a', '8a', '9a', '10a', '11a',
    '12p', '1p', '2p', '3p', '4p', '5p',
    '6p', '7p', '8p', '9p', '10p', '11p'
];

const days = ['Weekend', 'Weekday'];

const data = [[0, 0, 0], [0, 1, 0], [0, 2, 0], [0, 3, 0], [0, 4, 2], [0, 5, 9], [0, 6, 21], [0, 7, 18], [0, 8, 57], [0, 9, 80], [0, 10, 97], [0, 11, 86], [0, 12, 78], [0, 13, 77], [0, 14, 59], [0, 15, 56], [0, 16, 60], [0, 17, 72], [0, 18, 34], [0, 19, 26], [0, 20, 28], [0, 21, 11], [0, 22, 9], [0, 23, 6], 
            [1, 0, 1], [1, 1, 0], [1, 2, 1], [1, 3, 0], [1, 4, 16], [1, 5, 113], [1, 6, 239], [1, 7, 447], [1, 8, 405], [1, 9, 234], [1, 10, 156], [1, 11, 157], [1, 12, 111], [1, 13, 124], [1, 14, 111], [1, 15, 128], [1, 16, 106], [1, 17, 142], [1, 18, 133], [1, 19, 93], [1, 20, 32], [1, 21, 26], [1, 22, 24], [1, 23, 7]]
    .map(function (item) {
    return [item[1], item[0], item[2] || '-'];
});

option = {
  tooltip: {
    position: 'top'
  },
  grid: {
    height: '40%',
    top: '10%'
  },
  xAxis: {
    type: 'category',
    data: hours,
    splitArea: {
      show: true
    }
  },
  yAxis: {
    type: 'category',
    data: days,
    splitArea: {
      show: true
    }
  },
  visualMap: {
    min: 1,
    max: 200,
    calculable: true,
    orient: 'horizontal',
    left: 'center',
    bottom: '15%'
  },
  series: [
    {
      type: 'heatmap',
      data: data,
      label: {
        show: true
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};

option && timeChart.setOption(option);
