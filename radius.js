var chartDom = document.getElementById('radius');
var radius = echarts.init(chartDom);
var radiusOption;

radiusOption = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '40',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 38.68, name: 'Private Vehicle' },
        { value: 28.38, name: 'Train' },
        { value: 18.54, name: 'Walking' },
        { value: 7.6, name: 'Tram' },
        { value: 3.3, name: 'Bicycle' },
        { value: 1.63, name: 'Bus' },
        { value: 0.89, name: 'Taxi' },
        { value: 0.51, name: 'Other' }
      ]
    }
  ]
};

radiusOption && radius.setOption(radiusOption);
