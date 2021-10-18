var chartDom = document.getElementById('radius');
var radiusChart = echarts.init(chartDom);
var radiusOption;

radiusOption = {
  legend: {
    top: 'bottom'
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [50, 250],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
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

radiusOption && radiusChart.setOption(radiusOption);
