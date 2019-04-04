import React, { Component } from 'react';
import Ec from '../../components/Ec';

const option = {
    title: {
        text: "学科—师资分配情况",
        left: 'left'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['高一', '高二', '高三']
    },
    xAxis: {
        name: '学科',
        type: 'category',
        data: ['语文', '数学', '英语', '物理', '化学', '政治', '历史', '生物', '地理', '技术', '美术',
            '体育', '音乐']
    },
    yAxis: {
        name: '人数',
        type: 'value'
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'stack']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    series: [
        {
            name: '高一',
            type: 'bar',
            itemStyle: {
                color: '#ff9797',
            },
            label: {
                normal: {
                    show: false,
                    position: 'insideTop'
                }
            },
            data: [24, 27, 47, 19, 18, 10, 9, 12, 11, 1, 3, 1, 2]
        },
        {
            name: '高二',
            type: 'bar',
            itemStyle: {
                color:  '#b3d9d9',
            },
            label: {
                normal: {
                    show: false,
                    position: 'insideTop'
                }
            },
            data: [22, 24, 40, 11, 8, 8, 4, 11, 4, 9, 3, 1, 2]
        },
        {
            name: '高三',
            type: 'bar',
            itemStyle: {
                color: '#adadad',
            },
            label: {
                normal: {
                    show: false,
                    position: 'insideTop'
                }
            },
            data: [21, 20, 32, 9, 10, 4, 4, 8, 4, 6, 2, 1, 2]
        },
    ]
};

export default class extends Component {
    render() {
        return (
            <div>
                <Ec option={option} per={0.7}/>
            </div>
        );
    }
}
