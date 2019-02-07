Highcharts.chart('claimsstatus', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Total Claims by Year'
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        max: 70,
        tickInterval: 10,
        title: {
            text: 'Claim %'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Claims: <b>{point.y:.1f}% claims</b>'
    },
    series: [{
        name: 'Year',
        maxPointWidth: 40,
        data: [
            ['2018', 24.2],
            ['2017', 16.8],
            ['2016', 10.9]
        ],
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top

        }
    }]
});

Highcharts.setOptions({
     colors: ["#0b5492", "#3c8dbc", "#f39c12", "#dd4b39"]
    });
/*Highcharts.chart('claimspie', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'

    },
    title: {
        text: 'Total Claims by Year'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    series: [{
        name: 'Year',
        colorByPoint: true,
        data: [{
            name: '2018 Claims',
            y: 39.41,
            sliced: true,
            selected: true
        }, {
            name: '2017 Claims',
            y: 23.84
        }, {
            name: '2016 claims',
            y: 36.75
        }]
    }]
});
*/

Highcharts.chart({
        chart: {
            renderTo: 'claimspie',
            type: 'pie'
        },
        title: {
            text: 'Amount Due'
        },

        plotOptions: {
            pie: {
                innerSize: '40%'
            }
        },
        tooltip: {
            pointFormat: 'Due: <b>{point.y:.1f}$ due</b>'
        },
        series: [{
            data: [
                ['Current Due', 0],
                ['1 to 30 days', 14,560],
                ['30 to 60 days', 0],
                ['Over 60 days', 0]
                ]}]
    },
    // using

    function(chart) { // on complete

        var xpos = '50%';
        var ypos = '53%';
        var circleradius = 102;

    // Render the circle
    // chart.renderer.circle(xpos, ypos, circleradius).attr({
    //     fill: '#ddd',
    // }).add();

    // Render the text
    chart.renderer.text(155, 215).css({
            width: circleradius*2,
            color: '#4572A7',
            fontSize: '16px',
            textAlign: 'center'
      }).attr({
            // why doesn't zIndex get the text in front of the chart?
            zIndex: 999
        }).add();
    });
