var chartDom1 = document.getElementById('weekday-distance');
var weekdayDistanceChart = echarts.init(chartDom1);
var option1;
option1 = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['0-0.9', '1-1.9', '2-2.9', '3-3.9', '4-4.9', '5-5.9', '6-6.9', '7-7.9', '8-8.9', '9-9.9', '10-10.9', '11-11.9', '12-12.9', '13-13.9', '14-14.9', '15-15.9', '16-16.9', '17-17.9', '18-18.9', '19-19.9', '20-24.9', '25-29.9', '30-34.9', '35-39.9', '40-44.9', '45-49.9', '50-59.9', '60-69.9', '70-79.9', '80-89.9', '90-99.9', '100-101.9', '110-119.9', '120-129.9', '130-139.9', '140-149.9', '150+']
      }
    ],
    yAxis: [
      {
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
        data: [1146,1991,2045,1886,1653,1553,1461,1252,1280,1142,1145,1022,968,899,853,824,751,677,643,597,2466,1731,1180,700,571,329,386,234,156,100,51,65,39,29,10,18,119]
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
        data: [2194,4477,3658,2779,1941,1552,1146,904,727,586,438,413,360,314,228,215,236,187,174,164,507,327,220,144,67,53,50,42,24,35,21,10,4,5,4,9,13]
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
        data: [1889,3143,2561,1868,1421,924,684,519,330,324,288,244,219,136,143,126,103,111,103,57,330,183,105,54,42,25,21,14,15,17,17,6,8,9,9,2,18]
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
        data: [1089,2277,1996,1750,1345,1102,917,806,622,601,458,445,349,325,242,265,268,203,171,195,619,542,339,193,135,121,108,70,92,71,57,47,33,43,17,17,35]
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
        data: [609,1365,1147,744,574,418,322,253,215,199,119,101,76,75,62,55,44,61,44,45,132,58,31,26,19,8,10,6,3,6,6,0,1,2,1,1,0]
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
        data: [44,57,85,59,33,38,40,28,22,35,19,17,17,16,7,17,17,10,8,12,55,37,32,18,14,13,18,9,11,10,13,12,6,1,3,0,23]
      }
    ]
  };

  option1 && weekdayDistanceChart.setOption(option1);

var chartDom2 = document.getElementById('weekend-distance');
var weekendDistanceChart = echarts.init(chartDom2);
var option2;
option2 = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['0-0.9', '1-1.9', '2-2.9', '3-3.9', '4-4.9', '5-5.9', '6-6.9', '7-7.9', '8-8.9', '9-9.9', '10-10.9', '11-11.9', '12-12.9', '13-13.9', '14-14.9', '15-15.9', '16-16.9', '17-17.9', '18-18.9', '19-19.9', '20-24.9', '25-29.9', '30-34.9', '35-39.9', '40-44.9', '45-49.9', '50-59.9', '60-69.9', '70-79.9', '80-89.9', '90-99.9', '100-101.9', '110-119.9', '120-129.9', '130-139.9', '140-149.9', '150+']
      }
    ],
    yAxis: [
      {
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
        data: [1146,1991,2045,1886,1653,1553,1461,1252,1280,1142,1145,1022,968,899,853,824,751,677,643,597,2466,1731,1180,700,571,329,386,234,156,100,51,65,39,29,10,18,119]
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
        data: [2194,4477,3658,2779,1941,1552,1146,904,727,586,438,413,360,314,228,215,236,187,174,164,507,327,220,144,67,53,50,42,24,35,21,10,4,5,4,9,13]
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
        data: [1889,3143,2561,1868,1421,924,684,519,330,324,288,244,219,136,143,126,103,111,103,57,330,183,105,54,42,25,21,14,15,17,17,6,8,9,9,2,18]
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
        data: [1089,2277,1996,1750,1345,1102,917,806,622,601,458,445,349,325,242,265,268,203,171,195,619,542,339,193,135,121,108,70,92,71,57,47,33,43,17,17,35]
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
        data: [609,1365,1147,744,574,418,322,253,215,199,119,101,76,75,62,55,44,61,44,45,132,58,31,26,19,8,10,6,3,6,6,0,1,2,1,1,0]
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
        data: [44,57,85,59,33,38,40,28,22,35,19,17,17,16,7,17,17,10,8,12,55,37,32,18,14,13,18,9,11,10,13,12,6,1,3,0,23]
      }
    ]
  };

  option2 && weekendDistanceChart.setOption(option2);