var container = document.createElement('div');
var chart_1 = document.getElementById("chart-1");
chart_1.appendChild(container);

var width = 1000;
var height = 650;

var chart = LightweightCharts.createChart(container, {
    width: width,
    height: height,
    rightPriceScale: {
        scaleMargins: {
            top: 0.2,
            bottom: 0.2,
        },
        borderVisible: false,
    },
    timeScale: {
        borderVisible: false,
    },
    layout: {
        backgroundColor: '#00000000',
        textColor: '#ffffff',
    },
    grid: {
        horzLines: {
            color: 'rgba(256, 256, 256, 0.01)',
        },
        vertLines: {
            color: 'rgba(256, 256, 256, 0.01)',
        },
    },
});

var areaSeries = chart.addAreaSeries({
    lineColor: 'rgba(38, 198, 218, 1.0)',
    topColor: 'rgba(38, 198, 218, 0.1)',
    bottomColor: 'rgba(38, 198, 218, 0.0)',
    lineWidth: 3,
    symbol: 'NMPFI',
});

areaSeries.setData([
    {
        "time": "2022-12-27",
        "value": 0
    },
    {
        "time": "2022-12-28",
        "value": 0
    },
    {
        "time": "2022-12-29",
        "value": 0
    },
    {
        "time": "2022-12-30",
        "value": 0
    },
    {
        "time": "2022-12-31",
        "value": 0
    },
    {
        "time": "2023-01-01",
        "value": 0
    },
    {
        "time": "2023-01-02",
        "value": 0
    },
    {
        "time": "2023-01-03",
        "value": 0
    },
    {
        "time": "2023-01-04",
        "value": 0
    },
    {
        "time": "2023-01-05",
        "value": 0
    },
    {
        "time": "2023-01-06",
        "value": 0
    },
    {
        "time": "2023-01-07",
        "value": 0
    },
    {
        "time": "2023-01-08",
        "value": 0
    },
    {
        "time": "2023-01-09",
        "value": 0
    },
    {
        "time": "2023-01-10",
        "value": 0
    },
    {
        "time": "2023-01-11",
        "value": 0
    },
    {
        "time": "2023-01-12",
        "value": 0
    },
    {
        "time": "2023-01-13",
        "value": 0
    },
    {
        "time": "2023-01-14",
        "value": 0
    },
    {
        "time": "2023-01-15",
        "value": 0
    },
    {
        "time": "2023-01-16",
        "value": 0
    },
    {
        "time": "2023-01-17",
        "value": 0
    },
    {
        "time": "2023-01-18",
        "value": 0
    },
    {
        "time": "2023-01-19",
        "value": 0
    },
    {
        "time": "2023-01-20",
        "value": 0
    },
    {
        "time": "2023-01-21",
        "value": 0
    },
    {
        "time": "2023-01-22",
        "value": 0
    },
    {
        "time": "2023-01-23",
        "value": 0
    },
    {
        "time": "2023-01-24",
        "value": 0
    },
    {
        "time": "2023-01-25",
        "value": 0
    },
    {
        "time": "2023-01-26",
        "value": 0
    },
    {
        "time": "2023-01-27",
        "value": 0
    },
    {
        "time": "2023-01-28",
        "value": 0
    },
    {
        "time": "2023-01-29",
        "value": 0
    },
    {
        "time": "2023-01-30",
        "value": 0
    },
    {
        "time": "2023-01-31",
        "value": 0
    },
    {
        "time": "2023-02-01",
        "value": 100
    },
    {
        "time": "2023-02-02",
        "value": 500
    },
    {
        "time": "2023-02-03",
        "value": 500
    },
    {
        "time": "2023-02-04",
        "value": 600
    },
    {
        "time": "2023-02-05",
        "value": 1000
    },
    {
        "time": "2023-02-06",
        "value": 1100
    },
    {
        "time": "2023-02-07",
        "value": 1200
    },
    {
        "time": "2023-02-08",
        "value": 2000
    },
    {
        "time": "2023-02-09",
        "value": 2000
    },
    {
        "time": "2023-02-10",
        "value": 2000
    },
    {
        "time": "2023-02-11",
        "value": 2300
    },
    {
        "time": "2023-02-12",
        "value": 2500
    },
    {
        "time": "2023-02-13",
        "value": 3500
    },
    {
        "time": "2023-02-14",
        "value": 3800
    },
    {
        "time": "2023-02-15",
        "value": 4400
    },
    {
        "time": "2023-02-16",
        "value": 4800
    },
    {
        "time": "2023-02-17",
        "value": 5300
    },
    {
        "time": "2023-02-18",
        "value": 4800
    },
    {
        "time": "2023-02-19",
        "value": 4900
    },
    {
        "time": "2023-02-20",
        "value": 5400
    },
    {
        "time": "2023-02-21",
        "value": 6000
    },
    {
        "time": "2023-02-22",
        "value": 6000
    },
    {
        "time": "2023-02-23",
        "value": 6500
    },
    {
        "time": "2023-02-24",
        "value": 7400
    },
    {
        "time": "2023-02-25",
        "value": 8400
    },
    {
        "time": "2023-02-26",
        "value": 8400
    },
    {
        "time": "2023-02-27",
        "value": 8400
    },
    {
        "time": "2023-02-28",
        "value": 10200
    },
    {
        "time": "2023-03-01",
        "value": 10100
    },
    {
        "time": "2023-03-02",
        "value": 9800
    },
    {
        "time": "2023-03-03",
        "value": 8200
    },
    {
        "time": "2023-03-04",
        "value": 9700
    },
    {
        "time": "2023-03-05",
        "value": 10800
    },
    {
        "time": "2023-03-06",
        "value": 11800
    },
    {
        "time": "2023-03-07",
        "value": 12300
    },
    {
        "time": "2023-03-08",
        "value": 12400
    },
    {
        "time": "2023-03-09",
        "value": 12400
    },
    {
        "time": "2023-03-10",
        "value": 12900
    },
    {
        "time": "2023-03-11",
        "value": 12900
    },
    {
        "time": "2023-03-12",
        "value": 12900
    },
    {
        "time": "2023-03-13",
        "value": 13900
    },
    {
        "time": "2023-03-14",
        "value": 13900
    },
    {
        "time": "2023-03-15",
        "value": 13900
    },
    {
        "time": "2023-03-16",
        "value": 15300
    },
    {
        "time": "2023-03-17",
        "value": 15300
    },
    {
        "time": "2023-03-18",
        "value": 15300
    },
    {
        "time": "2023-03-19",
        "value": 15300
    },
    {
        "time": "2023-03-20",
        "value": 15300
    },
    {
        "time": "2023-03-21",
        "value": 15400
    },
    {
        "time": "2023-03-22",
        "value": 14800
    },
    {
        "time": "2023-03-23",
        "value": 15800
    },
    {
        "time": "2023-03-24",
        "value": 15900
    },
    {
        "time": "2023-03-25",
        "value": 16000
    },
    {
        "time": "2023-03-26",
        "value": 15100
    },
    {
        "time": "2023-03-27",
        "value": 15100
    },
    {
        "time": "2023-03-28",
        "value": 14600
    },
    {
        "time": "2023-03-29",
        "value": 14600
    },
    {
        "time": "2023-03-30",
        "value": 14000
    },
    {
        "time": "2023-03-31",
        "value": 14100
    },
    {
        "time": "2023-04-01",
        "value": 14100
    },
    {
        "time": "2023-04-02",
        "value": 13600
    },
    {
        "time": "2023-04-03",
        "value": 12000
    },
    {
        "time": "2023-04-04",
        "value": 11900
    },
    {
        "time": "2023-04-05",
        "value": 11800
    },
    {
        "time": "2023-04-06",
        "value": 13000
    },
    {
        "time": "2023-04-07",
        "value": 13000
    },
    {
        "time": "2023-04-08",
        "value": 12900
    },
    {
        "time": "2023-04-09",
        "value": 12900
    },
    {
        "time": "2023-04-10",
        "value": 12900
    },
    {
        "time": "2023-04-11",
        "value": 13900
    },
    {
        "time": "2023-04-12",
        "value": 13900
    },
    {
        "time": "2023-04-13",
        "value": 13900
    },
    {
        "time": "2023-04-14",
        "value": 14500
    },
    {
        "time": "2023-04-15",
        "value": 15900
    },
    {
        "time": "2023-04-16",
        "value": 16500
    },
    {
        "time": "2023-04-17",
        "value": 17000
    },
    {
        "time": "2023-04-18",
        "value": 17500
    },
    {
        "time": "2023-04-19",
        "value": 18000
    },
    {
        "time": "2023-04-20",
        "value": 19500
    },
    {
        "time": "2023-04-21",
        "value": 18500
    },
    {
        "time": "2023-04-22",
        "value": 19000
    },
    {
        "time": "2023-04-23",
        "value": 19700
    },
    {
        "time": "2023-04-24",
        "value": 20200
    },
    {
        "time": "2023-04-25",
        "value": 20300
    },
    {
        "time": "2023-04-26",
        "value": 20200
    },
    {
        "time": "2023-04-27",
        "value": 20300
    },
    {
        "time": "2023-04-28",
        "value": 20200
    },
    {
        "time": "2023-04-29",
        "value": 20300
    },
    {
        "time": "2023-04-30",
        "value": 22300
    },
    {
        "time": "2023-05-01",
        "value": 21300
    },
    {
        "time": "2023-05-02",
        "value": 18200
    },
    {
        "time": "2023-05-03",
        "value": 16400
    },
    {
        "time": "2023-05-04",
        "value": 16400
    },
    {
        "time": "2023-05-05",
        "value": 16100
    },
    {
        "time": "2023-05-06",
        "value": 17100
    },
    {
        "time": "2023-05-07",
        "value": 16600
    },
    {
        "time": "2023-05-08",
        "value": 17600
    },
    {
        "time": "2023-05-09",
        "value": 18700
    },
    {
        "time": "2023-05-10",
        "value": 19800
    },
    {
        "time": "2023-05-11",
        "value": 19900
    },
    {
        "time": "2023-05-12",
        "value": 20400
    },
    {
        "time": "2023-05-13",
        "value": 20400
    },
    {
        "time": "2023-05-14",
        "value": 20400
    },
    {
        "time": "2023-05-15",
        "value": 20400
    },
    {
        "time": "2023-05-16",
        "value": 20500
    },
    {
        "time": "2023-05-17",
        "value": 21000
    },
    {
        "time": "2023-05-18",
        "value": 22000
    },
    {
        "time": "2023-05-19",
        "value": 21500
    },
    {
        "time": "2023-05-20",
        "value": 21700
    },
    {
        "time": "2023-05-21",
        "value": 21500
    },
    {
        "time": "2023-05-22",
        "value": 21700
    },
    {
        "time": "2023-05-23",
        "value": 22700
    },
    {
        "time": "2023-05-24",
        "value": 22600
    },
    {
        "time": "2023-05-25",
        "value": 23600
    },
    {
        "time": "2023-05-26",
        "value": 24600
    },
    {
        "time": "2023-05-27",
        "value": 24500
    },
    {
        "time": "2023-05-28",
        "value": 24500
    },
    {
        "time": "2023-05-29",
        "value": 24000
    },
    {
        "time": "2023-05-30",
        "value": 24000
    },
    {
        "time": "2023-05-31",
        "value": 24400
    },
    {
        "time": "2023-06-01",
        "value": 22400
    },
    {
        "time": "2023-06-02",
        "value": 21200
    },
    {
        "time": "2023-06-03",
        "value": 18900
    },
    {
        "time": "2023-06-04",
        "value": 18800
    },
    {
        "time": "2023-06-05",
        "value": 19900
    },
    {
        "time": "2023-06-06",
        "value": 20600
    },
    {
        "time": "2023-06-07",
        "value": 21600
    },
    {
        "time": "2023-06-08",
        "value": 20600
    },
    {
        "time": "2023-06-09",
        "value": 20600
    },
    {
        "time": "2023-06-10",
        "value": 20600
    },
    {
        "time": "2023-06-11",
        "value": 20600
    },
    {
        "time": "2023-06-12",
        "value": 20600
    },
    {
        "time": "2023-06-13",
        "value": 20600
    },
    {
        "time": "2023-06-14",
        "value": 20500
    },
    {
        "time": "2023-06-15",
        "value": 20500
    },
    {
        "time": "2023-06-16",
        "value": 20500
    },
    {
        "time": "2023-06-17",
        "value": 20500
    },
    {
        "time": "2023-06-18",
        "value": 20400
    },
    {
        "time": "2023-06-19",
        "value": 20400
    },
    {
        "time": "2023-06-20",
        "value": 20400
    },
    {
        "time": "2023-06-21",
        "value": 21400
    },
    {
        "time": "2023-06-22",
        "value": 21400
    },
    {
        "time": "2023-06-23",
        "value": 21400
    },
    {
        "time": "2023-06-24",
        "value": 22300
    },
    {
        "time": "2023-06-25",
        "value": 22300
    },
    {
        "time": "2023-06-26",
        "value": 22500
    },
    {
        "time": "2023-06-27",
        "value": 22500
    },
    {
        "time": "2023-06-28",
        "value": 23600
    },
    {
        "time": "2023-06-29",
        "value": 24600
    },
    {
        "time": "2023-06-30",
        "value": 24100
    }
]);

function businessDayToString(businessDay) {
    return businessDay.year + '/' + businessDay.month + '/' + businessDay.day;
}

var toolTipWidth = 100;
var toolTipHeight = 80;
var toolTipMargin = 15;

var toolTip = document.createElement('div');
toolTip.className = 'floating-tooltip-2';
container.appendChild(toolTip);

// update tooltip
chart.subscribeCrosshairMove(function (param) {
    if (!param.time || param.point.x < 0 || param.point.x > width || param.point.y < 0 || param.point.y > height) {
        toolTip.style.display = 'none';
        return;
    }

    var dateStr = LightweightCharts.isBusinessDay(param.time)
        ? businessDayToString(param.time)
        : new Date(param.time * 1000).toLocaleDateString();

    toolTip.style.display = 'block';
    var price = param.seriesPrices.get(areaSeries);
    toolTip.innerHTML = '<div style="color: rgba(38, 198, 218, 1)">NMPFI</div>' +
        '<div style="font-size: 24px; margin: 4px 0px">' + Math.round(price * 100) / 100 + '</div>' +
        '<div>' + dateStr + '</div>';

    var y = param.point.y;

    var left = param.point.x + toolTipMargin;
    if (left > width - toolTipWidth) {
        left = param.point.x - toolTipMargin - toolTipWidth;
    }

    var top = y + toolTipMargin;
    if (top > height - toolTipHeight) {
        top = y - toolTipHeight - toolTipMargin;
    }

    toolTip.style.left = left + 'px';
    toolTip.style.top = top + 'px';
});










// ===============================================================

// Make chart auto scale all time
chart.timeScale().fitContent();

// Make Chart Responsive with screen resize
new ResizeObserver(entries => {
    if (entries.length === 0 || entries[0].target !== container) { return; }
    const newRect = entries[0].contentRect;
    chart.applyOptions({ height: newRect.height, width: newRect.width });
}).observe(container);

// Disable mouse scroll
chart.applyOptions({
    // handleScroll: {
    //     mouseWheel: true,
    //     pressedMouseMove: true,
    //     horzTouchDrag: true,
    //     vertTouchDrag: true,
    // },
    handleScale: {
        mouseWheel: false,
        // pinch: true,
        // axisPressedMouseMove: true,
    },
});