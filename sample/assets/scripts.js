
  var optionsChart1 = {
    series: [{
    name: 'Demandas',
    data: [4, 6, 6, 8, 10, 9, 12, 12, 16, 12, 14, 18]
  }],
    chart: {
    height: 300,
    width: 700,
    type: 'bar',
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      dataLabels: {
        position: 'top', // top, center, bottom
      },
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + "";
    },
    offsetY: -20,
    style: {
      fontSize: '12px',
      colors: ["#304758"]
    }
  },
  
  xaxis: {
    categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
    position: 'bottom',
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    crosshairs: {
      fill: {
        type: 'gradient',
        gradient: {
          colorFrom: '#D8E3F0',
          colorTo: '#BED1E6',
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        }
      }
    },
    tooltip: {
      enabled: true,
    }
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      formatter: function (val) {
        return val + "";
      }
    }
  
  },
  title: {
    text: 'Uso da Platforma (horas/semana)',
    floating: true,
    offsetY: 0,
    align: 'center',
    style: {
      color: '#444'
    }
  }
  };

var chart1 = new ApexCharts(document.querySelector("#chart1"), optionsChart1);
chart1.render();








Apex.grid = {
  padding: {
    right: 0,
    left: 0
  }
}

Apex.dataLabels = {
  enabled: false
}

var randomizeArray = function (arg) {
  var array = arg.slice();
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// data for the sparklines that appear below header area
var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

// the default colorPalette for this dashboard
//var colorPalette = ['#01BFD6', '#5564BE', '#F7A600', '#EDCD24', '#F74F58'];
var colorPalette = ['#00D8B6','#008FFB',  '#FEB019', '#FF4560', '#775DD0']

var spark1 = {
  chart: {
    id: 'sparkline1',
    group: 'sparklines',
    type: 'area',
    height: 160,
    sparkline: {
      enabled: true
    },
  },
  stroke: {
    curve: 'straight'
  },
  fill: {
    opacity: 1,
  },
  series: [{
    name: 'Sales',
    data: randomizeArray(sparklineData)
  }],
  labels: [...Array(24).keys()].map(n => `2018-09-0${n+1}`),
  yaxis: {
    min: 0
  },
  xaxis: {
    type: 'datetime',
  },
  colors: ['#DCE6EC'],
  title: {
    text: 'R$ 6.735,00',
    offsetX: 30,
    style: {
      fontSize: '24px',
      cssClass: 'apexcharts-yaxis-title'
    }
  },
  subtitle: {
    text: 'Carteira',
    offsetX: 30,
    style: {
      fontSize: '14px',
      cssClass: 'apexcharts-yaxis-title'
    }
  }
}

var spark2 = {
  chart: {
    id: 'sparkline2',
    group: 'sparklines',
    type: 'area',
    height: 160,
    sparkline: {
      enabled: true
    },
  },
  stroke: {
    curve: 'straight'
  },
  fill: {
    opacity: 1,
  },
  series: [{
    name: 'Expenses',
    data: randomizeArray(sparklineData)
  }],
  labels: [...Array(24).keys()].map(n => `2018-09-0${n+1}`),
  yaxis: {
    min: 0
  },
  xaxis: {
    type: 'datetime',
  },
  colors: ['#DCE6EC'],
  title: {
    text: '7',
    offsetX: 30,
    style: {
      fontSize: '24px',
      cssClass: 'apexcharts-yaxis-title'
    }
  },
  subtitle: {
    text: 'Concluídas no Mês',
    offsetX: 30,
    style: {
      fontSize: '14px',
      cssClass: 'apexcharts-yaxis-title'
    }
  }
}

var spark3 = {
  chart: {
    id: 'sparkline3',
    group: 'sparklines',
    type: 'area',
    height: 160,
    sparkline: {
      enabled: true
    },
  },
  stroke: {
    curve: 'straight'
  },
  fill: {
    opacity: 1,
  },
  series: [{
    name: 'Em Aberto',
    data: randomizeArray(sparklineData)
  }],
  labels: [...Array(24).keys()].map(n => `2018-09-0${n+1}`),
  xaxis: {
    type: 'datetime',
  },
  yaxis: {
    min: 0
  },
  colors: ['#008FFB'],
  //colors: ['#5564BE'],
  title: {
    text: '4',
    offsetX: 30,
    style: {
      fontSize: '24px',
      cssClass: 'apexcharts-yaxis-title'
    }
  },
  subtitle: {
    text: 'Demandas Em Aberto',
    offsetX: 30,
    style: {
      fontSize: '14px',
      cssClass: 'apexcharts-yaxis-title'
    }
  }
}

var monthlyEarningsOpt = {
  chart: {
    type: 'area',
    height: 260,
    background: '#eff4f7',
    sparkline: {
      enabled: true
    },
    offsetY: 20
  },
  stroke: {
    curve: 'straight'
  },
  fill: {
    type: 'solid',
    opacity: 1,
  },
  series: [{
    data: randomizeArray(sparklineData)
  }],
  xaxis: {
    crosshairs: {
      width: 1
    },
  },
  yaxis: {
    min: 0,
    max: 130
  },
  colors: ['#dce6ec'],

  title: {
    text: 'Total Earned',
    offsetX: -30,
    offsetY: 100,
    align: 'right',
    style: {
      color: '#7c939f',
      fontSize: '16px',
      cssClass: 'apexcharts-yaxis-title'
    }
  },
  subtitle: {
    text: 'R$ 3.750,00',
    offsetX: -30,
    offsetY: 100,
    align: 'right',
    style: {
      color: '#7c939f',
      fontSize: '24px',
      cssClass: 'apexcharts-yaxis-title'
    }
  }
}


new ApexCharts(document.querySelector("#spark1"), spark1).render();
new ApexCharts(document.querySelector("#spark2"), spark2).render();
new ApexCharts(document.querySelector("#spark3"), spark3).render();

var monthlyEarningsChart = new ApexCharts(document.querySelector("#monthly-earnings-chart"), monthlyEarningsOpt);


var optionsArea = {
  chart: {
    height: 340,
    type: 'area',
    zoom: {
      enabled: false
    },
  },
  stroke: {
    curve: 'straight'
  },
  colors: colorPalette,
  series: [
    {
      name: "Blog",
      data: [{
        x: 0,
        y: 0
      }, {
        x: 4,
        y: 5
      }, {
        x: 5,
        y: 3
      }, {
        x: 9,
        y: 8
      }, {
        x: 14,
        y: 4
      }, {
        x: 18,
        y: 5
      }, {
        x: 25,
        y: 0
      }]
    },
    {
      name: "Social Media",
      data: [{
        x: 0,
        y: 0
      }, {
        x: 4,
        y: 6
      }, {
        x: 5,
        y: 4
      }, {
        x: 14,
        y: 8
      }, {
        x: 18,
        y: 5.5
      }, {
        x: 21,
        y: 6
      }, {
        x: 25,
        y: 0
      }]
    },
    {
      name: "External",
      data: [{
        x: 0,
        y: 0
      }, {
        x: 2,
        y: 5
      }, {
        x: 5,
        y: 4
      }, {
        x: 10,
        y: 11
      }, {
        x: 14,
        y: 4
      }, {
        x: 18,
        y: 8
      }, {
        x: 25,
        y: 0
      }]
    }
  ],
  fill: {
    opacity: 1,
  },
  title: {
    text: 'Daily Visits Insights',
    align: 'left',
    style: {
      fontSize: '18px'
    }
  },
  markers: {
    size: 0,
    style: 'hollow',
    hover: {
      opacity: 5,
    }
  },
  tooltip: {
    intersect: true,
    shared: false,
  },
  xaxis: {
    tooltip: {
      enabled: false
    },
    labels: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    tickAmount: 4,
    max: 12,
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      style: {
        colors: '#78909c'
      }
    }
  },
  legend: {
    show: false
  }
}

var chartArea = new ApexCharts(document.querySelector('#area'), optionsArea);
chartArea.render();

var optionsBar = {
  chart: {
    type: 'bar',
    height: 380,
    width: '100%',
    stacked: true,
  },
  plotOptions: {
    bar: {
      columnWidth: '45%',
    }
  },
  colors: colorPalette,
  series: [{
    name: "Sessões",
    data: [42, 52, 16, 55, 59, 51, 45, 32, 26, 33, 44, 51, 42, 56],
  }, {
    name: "Demandas",
    data: [6, 12, 4, 7, 5, 3, 6, 4, 3, 3, 5, 6, 7, 4],
  }],
  labels: [10,11,12,13,14,15,16,17,18,19,20,21,22,23],
  xaxis: {
    labels: {
      show: false
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      style: {
        colors: '#78909c'
      }
    }
  },
  title: {
    text: 'Atendimentos',
    align: 'left',
    style: {
      fontSize: '18px'
    }
  }

}

var chartBar = new ApexCharts(document.querySelector('#bar'), optionsBar);
chartBar.render();


var optionDonut = {
  chart: {
      type: 'donut',
      width: '100%',
      height: 400
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      customScale: 0.8,
      donut: {
        size: '75%',
      },
      offsetY: 20,
    },
    stroke: {
      colors: undefined
    }
  },
  colors: colorPalette,
  title: {
    text: 'Demandas por tipo',
    style: {
      fontSize: '18px'
    }
  },
  series: [21, 23, 19, 14, 6],
  labels: ['Divórcio', 'Pensao', 'Guarda e Visitas', 'Alteração de Alimentos', 'Inventário'],
  legend: {
    position: 'left',
    offsetY: 80
  }
}

var donut = new ApexCharts(
  document.querySelector("#donut"),
  optionDonut
)
donut.render();


function trigoSeries(cnt, strength) {
  var data = [];
  for (var i = 0; i < cnt; i++) {
      data.push((Math.sin(i / strength) * (i / strength) + i / strength+1) * (strength*2));
  }

  return data;
}



var optionsLine = {
  chart: {
    height: 340,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  plotOptions: {
    stroke: {
      width: 4,
      curve: 'smooth'
    },
  },
  colors: colorPalette,
  series: [
    {
      name: "Day Time",
      data: trigoSeries(52, 20)
    },
    {
      name: "Night Time",
      data: trigoSeries(52, 27)
    },
  ],
  title: {
    floating: false,
    text: 'Customers',
    align: 'left',
    style: {
      fontSize: '18px'
    }
  },
  subtitle: {
    text: '168,215',
    align: 'center',
    margin: 30,
    offsetY: 40,
    style: {
      color: '#222',
      fontSize: '24px',
    }
  },
  markers: {
    size: 0
  },

  grid: {

  },
  xaxis: {
    labels: {
      show: false
    },
    axisTicks: {
      show: false
    },
    tooltip: {
      enabled: false
    }
  },
  yaxis: {
    tickAmount: 2,
    labels: {
      show: false
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false
    },
    min: 0,
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left',
    offsetY: -20,
    offsetX: -30
  }

}

var chartLine = new ApexCharts(document.querySelector('#line'), optionsLine);

// a small hack to extend height in website sample dashboard
chartLine.render().then(function () {
  var ifr = document.querySelector("#wrapper");
  if (ifr.contentDocument) {
    ifr.style.height = ifr.contentDocument.body.scrollHeight + 20 + 'px';
  }
});


// on smaller screen, change the legends position for donut
var mobileDonut = function() {
  if($(window).width() < 768) {
    donut.updateOptions({
      plotOptions: {
        pie: {
          offsetY: -15,
        }
      },
      legend: {
        position: 'bottom'
      }
    }, false, false)
  }
  else {
    donut.updateOptions({
      plotOptions: {
        pie: {
          offsetY: 20,
        }
      },
      legend: {
        position: 'left'
      }
    }, false, false)
  }
}

$(window).resize(function() {
  mobileDonut()
});
