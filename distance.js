let dataAxis = ['0-0.9', '1-1.9', '2-2.9', '3-3.9', '4-4.9', '5-5.9', '6-6.9', '7-7.9', '8-8.9', '9-9.9', '10-10.9', '11-11.9', '12-12.9', '13-13.9', '14-14.9', '15-15.9', '16-16.9', '17-17.9', '18-18.9', '19-19.9', '20-24.9', '25-29.9', '30-34.9', '35-39.9', '40-44.9', '45-49.9', '50-59.9', '60-69.9', '70-79.9', '80-89.9', '90-99.9', '100-101.9', '110-119.9', '120-129.9', '130-139.9', '140-149.9', '150+'];

var chartDom1 = document.getElementById('weekday-distance');
var weekdayDistanceChart = echarts.init(chartDom1);
var option1;
option1 = {
    title : {
      text: 'Weekday Travel Distance of Private vehicle',
      padding: 5,
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      top: '9%',
      itemHeight: 10,
      itemWidth: 10,
      textStyle: {
        fontSize: 11
      }
    },
    grid: {
      left: '2%',
      right: '2%',
      bottom: '3%',
      top: '20%',
      containLabel: true
    },
    xAxis: [
      {
        axisTick: { show: false },
    axisLine: { show: false },
        type: 'category',
        data: dataAxis
      }
    ],
    yAxis: [
      
      {
        axisTick: { show: false },
    axisLine: { show: false },
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Work Related',
        type: 'bar',
        stack: 'Ad',
        itemStyle: {
            normal: {
              color: "#4e9f50",
              opacity: 0.8,
            },
          },
        emphasis: {
          focus: 'series',
          itemStyle: {
              opacity: 1
          }
        },
        data: [52,71,94,108,103,95,103,100,139,123,109,98,98,97,94,101,73,80,66,89,323,236,151,107,67,57,31,23,22,6,1,6,0,0,0,2,6]
      },
      {
        name: 'Accompany, Pick-up & Drop-off',
        type: 'bar',
        stack: 'Ad',
        itemStyle: {
            normal: {
              color: "#87d180",
              opacity: 0.8,
            },
          },
        emphasis: {
          focus: 'series',
          itemStyle: {
              opacity: 1
          }
        },
        data: [29,48,37,46,63,48,32,44,51,28,34,25,31,12,16,18,24,14,22,15,68,29,20,26,4,6,5,2,1,1,0,0,0,0,0,1,0]
      },
      {
        name: 'Shopping',
        type: 'bar',
        stack: 'Ad',
        itemStyle: {
            normal: {
              color: "#ef8a0c",
              opacity: 0.8,
            },
          },
        emphasis: {
          focus: 'series',
          itemStyle: {
              opacity: 1
          }
        },
        data: [17,36,34,39,22,17,15,16,17,3,8,4,11,5,7,9,13,8,8,4,39,17,7,1,3,6,2,1,1,2,0,0,0,0,0,0,0]
      },
      {
        name: 'Recreational & Social',
        type: 'bar',
        stack: 'Ad',
        itemStyle: {
            normal: {
              color: "#fcc66d",
              opacity: 0.8,
            },
          },
        emphasis: {
          focus: 'series',
          itemStyle: {
              opacity: 1
          }
        },
        data: [20,55,52,53,50,31,36,33,26,40,21,20,20,25,18,13,20,15,18,18,90,65,34,18,14,14,21,4,6,5,0,6,0,0,0,0,0]
      },
      {
        name: 'Education',
        type: 'bar',
        stack: 'Ad',
        itemStyle: {
            normal: {
              color: "#3ca8bc",
              opacity: 0.8,
            },
          },
        emphasis: {
          focus: 'series',
          itemStyle: {
              opacity: 1
          }
        },
        data: [4,7,6,5,7,16,10,8,3,4,9,3,6,3,1,0,5,2,0,0,14,6,1,0,4,1,2,2,0,2,0,0,0,0,0,0,0]
      },
      {
        name: 'Other Purpose',
        type: 'bar',
        stack: 'Ad',
        itemStyle: {
            normal: {
              color: "#98d9e4",
              opacity: 0.8,
            },
          },
        emphasis: {
          focus: 'series',
          itemStyle: {
              opacity: 1
          }
        },
        data: [1,1,2,0,1,1,1,0,0,0,2,0,2,1,1,0,1,1,2,2,6,8,4,1,4,3,0,1,1,0,1,0,0,0,0,0,0]
      }
    ],
    dataZoom: {
      type: "inside",
      zlevel: 0,
      z: 4,
      filterMode: "filter",
      start: 0,
      end: 100,
      disabled: false,
      zoomLock: false,
      zoomOnMouseWheel: true,
      moveOnMouseMove: true,
      moveOnMouseWheel: false,
      preventDefaultMouseMove: true,
      throttle: 100,
      startValue: 0,
      endValue: 19
    }
};
option1 && weekdayDistanceChart.setOption(option1);

var chartDom2 = document.getElementById('weekend-distance');
var weekendDistanceChart = echarts.init(chartDom2);
var option2;
option2 = {
  title : {
    text: 'Weekend Travel Distance of Private vehicle',
    padding: 5,
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    top: '9%',
    itemHeight: 10,
    itemWidth: 10,
    textStyle: {
      fontSize: 11
    }
  },
  grid: {
    left: '2%',
    right: '2%',
    bottom: '3%',
    top: '20%',
    containLabel: true
  },
    xAxis: [
      {
        axisTick: { show: false },
    axisLine: { show: false },
        type: 'category',
        data: dataAxis
      }
    ],
    yAxis: [
      {
        axisTick: { show: false },
    axisLine: { show: false },
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Work Related',
        type: 'bar',
        stack: 'Ad',
        itemStyle: {
            normal: {
              color: "#4e9f50",
              opacity: 0.8,
            },
          },
        emphasis: {
          focus: 'series',
          itemStyle: {
              opacity: 1
          }
        },
        data: [8,6,10,12,18,20,10,14,10,6,2,7,6,7,4,14,2,12,5,13,34,22,19,8,3,6,4,4,6,0,3,2,1,0,0,0,0]
      },
      {
        name: 'Accompany, Pick-up & Drop-off',
        type: 'bar',
        stack: 'Ad',
        itemStyle: {
            normal: {
              color: "#87d180",
              opacity: 0.8,
            },
          },
        emphasis: {
          focus: 'series',
          itemStyle: {
              opacity: 1
          }
        },
        data: [6,12,21,14,10,17,25,11,10,11,3,10,5,4,3,2,6,8,1,6,29,13,19,4,5,6,0,2,0,0,1,0,0,0,0,0,0]
      },
      {
        name: 'Shopping',
        type: 'bar',
        stack: 'Ad',
        itemStyle: {
            normal: {
              color: "#ef8a0c",
              opacity: 0.8,
            },
          },
        emphasis: {
          focus: 'series',
          itemStyle: {
              opacity: 1
          }
        },
        data: [23,26,21,17,9,14,12,10,15,10,13,9,4,10,1,3,0,11,2,0,27,7,1,1,2,8,0,4,2,0,0,0,0,0,0,0,0]
      },
      {
        name: 'Recreational & Social',
        type: 'bar',
        stack: 'Ad',
        itemStyle: {
            normal: {
              color: "#fcc66d",
              opacity: 0.8,
            },
          },
        emphasis: {
          focus: 'series',
          itemStyle: {
              opacity: 1
          }
        },
        data: [21,31,40,25,32,31,21,23,38,19,15,12,19,28,7,23,21,11,24,20,103,50,20,28,25,52,8,3,4,1,8,2,0,0,0,0,0]
      },
      {
        name: 'Education',
        type: 'bar',
        stack: 'Ad',
        itemStyle: {
            normal: {
              color: "#3ca8bc",
              opacity: 0.8,
            },
          },
        emphasis: {
          focus: 'series',
          itemStyle: {
              opacity: 1
          }
        },
        data: [0,1,0,0,0,0,2,2,0,0,0,0,0,0,0,0,3,0,0,0,4,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      },
      {
        name: 'Other Purpose',
        type: 'bar',
        stack: 'Ad',
        itemStyle: {
            normal: {
              color: "#98d9e4",
              opacity: 0.8,
            },
          },
        emphasis: {
          focus: 'series',
          itemStyle: {
              opacity: 1
          }
        },
        data: [0,2,0,2,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,5,1,2,2,1,2,0,0,0,0,0,0,0,0,0,0,4]
      }
    ],
    dataZoom: {
      type: "inside",
      zlevel: 0,
      z: 4,
      filterMode: "filter",
      start: 0,
      end: 100,
      disabled: false,
      zoomLock: false,
      zoomOnMouseWheel: true,
      moveOnMouseMove: true,
      moveOnMouseWheel: false,
      preventDefaultMouseMove: true,
      throttle: 100,
      startValue: 0,
      endValue: 19
    }
  };

  option2 && weekendDistanceChart.setOption(option2);

// Enable data zoom when user click bar.
const zoomSize = 6;
weekdayDistanceChart.on('click', function (params) {
  //console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
  weekdayDistanceChart.dispatchAction({
    type: 'dataZoom',
    startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
    endValue:
      dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
  });
});
weekendDistanceChart.on('click', function (params) {
  //console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
  weekendDistanceChart.dispatchAction({
    type: 'dataZoom',
    startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
    endValue:
      dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
  });
});