var container = document.createElement('div');
var chart_1 = document.getElementById("chart-1");
chart_1.appendChild(container);

var width = 1000;
var height = 600;

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