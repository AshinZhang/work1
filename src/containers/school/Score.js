import React, { Component } from 'react';
import Ec from '../../components/Ec';

// const option = {};

var schema = [
    {text: '语文'},
    {text: '数学'},
    {text: '英语'},
    {text: '物理'},
    {text: '化学'},
    {text: '生物'},
    {text: '政治'},
    {text: '历史'},
    {text: '地理'},
    {text: '技术'},
];

var rawData = [
    [55,9,56,0.46,18,6, 12, 12, 12, 10, "2016级"],
    [25,11,21,0.65,34,9, 10, 10, 10, 10, "2016级"],

    [26,37,27,1.163,27,13, 19, 19, 19, 10, "2017级"],
    [85,62,71,1.195,60,8, 10, 14, 17, 10, "2017级"],

    [91,45,125,0.82,34,23, 14, 17, 13, 10, "2018级"],
    [65,27,78,0.86,45,29, 12 ,11, 9, 10, "2018级"],

];

var CATEGORY_DIM_COUNT = 10;
var GAP = 2;
var BASE_LEFT = 5;
var BASE_TOP = 10;
// var GRID_WIDTH = 220;
// var GRID_HEIGHT = 220;
var GRID_WIDTH = (100 - BASE_LEFT - GAP) / CATEGORY_DIM_COUNT - GAP;
var GRID_HEIGHT = (100 - BASE_TOP - GAP) / CATEGORY_DIM_COUNT - GAP;
var CATEGORY_DIM = 10;
var SYMBOL_SIZE = 3;

function retrieveScatterData(data, dimX, dimY) {
    var result = [];
    for (var i = 0; i < data.length; i++) {
        var item = [data[i][dimX], data[i][dimY]];
        item[CATEGORY_DIM] = data[i][CATEGORY_DIM];
        result.push(item);
    }
    return result;
}

function generateGrids(option) {
    var index = 0;

    for (var i = 0; i < CATEGORY_DIM_COUNT; i++) {
        for (var j = 0; j < CATEGORY_DIM_COUNT; j++) {
            if (CATEGORY_DIM_COUNT - i + j >= CATEGORY_DIM_COUNT) {
                continue;
            }

            option.grid.push({
                left: BASE_LEFT + i * (GRID_WIDTH + GAP) + '%',
                top: BASE_TOP + j * (GRID_HEIGHT + GAP) + '%',
                width: GRID_WIDTH + '%',
                height: GRID_HEIGHT + '%'
            });

            option.brush.xAxisIndex && option.brush.xAxisIndex.push(index);
            option.brush.yAxisIndex && option.brush.yAxisIndex.push(index);

            option.xAxis.push({
                splitNumber: 3,
                position: 'top',
                axisLine: {
                    show: j === 0,
                    onZero: false
                },
                axisTick: {
                    show: j === 0,
                    inside: true
                },
                axisLabel: {
                    show: j === 0
                },
                type: 'value',
                gridIndex: index,
                scale: true
            });

            option.yAxis.push({
                splitNumber: 3,
                position: 'right',
                axisLine: {
                    show: i === CATEGORY_DIM_COUNT - 1,
                    onZero: false
                },
                axisTick: {
                    show: i === CATEGORY_DIM_COUNT - 1,
                    inside: true
                },
                axisLabel: {
                    show: i === CATEGORY_DIM_COUNT - 1
                },
                type: 'value',
                gridIndex: index,
                scale: true
            });

            option.series.push({
                type: 'scatter',
                symbolSize: SYMBOL_SIZE,
                xAxisIndex: index,
                yAxisIndex: index,
                data: retrieveScatterData(rawData, i, j)
            });

            option.visualMap.seriesIndex.push(option.series.length - 1);

            index++;
        }
    }
}


var option = {
    animation: false,
    brush: {
        brushLink: 'all',
        xAxisIndex: [],
        yAxisIndex: [],
        inBrush: {
            opacity: 1
        }
    },
    visualMap: {
        type: 'piecewise',
        categories: ["2016级", "2017级", "2018级"],
        dimension: CATEGORY_DIM,
        orient: 'horizontal',
        top: 0,
        left: 'center',
        inRange: {
            color: ['#c23531','#2f4554', '#61a0a8']
        },
        outOfRange: {
            color: '#ddd'
        },
        seriesIndex: [0]
    },
    tooltip: {
        trigger: 'item'
    },
    parallelAxis: [
        {dim: 0, name: schema[0].text},
        {dim: 1, name: schema[1].text},
        {dim: 2, name: schema[2].text},
        {dim: 3, name: schema[3].text},
        {dim: 4, name: schema[4].text},
        {dim: 5, name: schema[5].text},
        {dim: 6, name: schema[6].text},
        {dim: 7, name: schema[7].text},
        {dim: 8, name: schema[8].text},
        {dim: 9, name: schema[9].text},
    ],
    parallel: {
        bottom: '5%',
        left: '5%',
        height: '31%',
        width: '55%',
        parallelAxisDefault: {
            type: 'value',
            name: 'AQI指数',
            nameLocation: 'end',
            nameGap: 20,
            splitNumber: 3,
            nameTextStyle: {
                fontSize: 14
            },
            axisLine: {
                lineStyle: {
                    color: '#555'
                }
            },
            axisTick: {
                lineStyle: {
                    color: '#555'
                }
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#555'
                }
            }
        }
    },
    grid: [],
    xAxis: [],
    yAxis: [],
    series: [
        {
            name: 'parallel',
            type: 'parallel',
            smooth: true,
            lineStyle: {
                normal: {
                    width: 1,
                    opacity: 0.3
                }
            },
            data: rawData
        }
    ]
};

generateGrids(option);

export default class extends Component {
    render() {
        return (
            <div>
                <Ec option={option} per={0.7}/>
            </div>
        );
    }
}
