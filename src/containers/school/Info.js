import React from 'react';
import { Card } from 'react-bootstrap';
import 'echarts/map/js/china';
import 'echarts/map/js/province/zhejiang';
import studentIcon from '../../img/student.svg';
import teacherIcon from '../../img/teacher.svg';
import classIcon from '../../img/class.svg';
import dormIcon from '../../img/dormitory.svg';
import Ec from '../../components/Ec';

// 颜色集
const colors =  [
    '#df6b66',
    '#749aa0',
    '#e79d88',
    '#8cc1aa',
    '#ec7e55',
    '#72a375',
    '#efdd7d',
];
// 基本信息
const basicInfo = [
    {
        name: '学生人数',
        value: 1765,
        icon: studentIcon,
    },
    {
        name: '教师人数',
        value: 1,
        icon: teacherIcon,
    },
    {
        name: '班级个数',
        value: 1,
        icon: classIcon,
    },
    {
        name: '宿舍总数',
        value: 1,
        icon: dormIcon,
    }
];
// 性别
const gender = {
    title: '性别比例',
    legend: ['男生', '女生'],
    colors: [colors[1], colors[0]],
    data: [943, 822],
};
// 政治面貌
const politicalStatus = {
    title: '政治面貌',
    subtext: '共青团员: 1662人',
    legend: ['共产党员', '少先队员', '一般', '民主党派'],
    data: [1, 23, 78, 1],
};
// 民族
const nationality = {
    title: '民族',
    subtext: '汉族: 1750人',
    legend: ['回族', '满族', '苗族', '畲族', '土家族', '朝鲜族'],
    data: [2, 4, 3, 1, 3, 2],
};
// 住宿
const accommodation = {
    title: '住宿情况',
    legend: ['校内住宿', '校外住宿'],
    colors: [colors[3], colors[4]],
    data: [708, 1057],
};
//来源
const province = [
    {name: '北京', value: 2},
    {name: '上海', value: 4},
    {name: '天津', value: 1},
    {name: '重庆', value: 5},
    {name: '河北', value: 7},
    {name: '山西', value: 5},
    {name: '辽宁', value: 7},
    {name: '吉林', value: 2},
    {name: '河南', value: 14},
    {name: '江苏', value: 35},
    {name: '浙江', value: 1336},
    {name: '安徽', value: 40},
    {name: '福建', value: 9},
    {name: '江西', value: 43},
    {name: '山东', value: 13},
    {name: '湖北', value: 23},
    {name: '湖南', value: 22},
    {name: '广东', value: 1},
    {name: '四川', value: 12},
    {name: '贵州', value: 3},
    {name: '陕西', value: 11},
    {name: '甘肃', value: 7},
    {name: '黑龙江', value: 7},
    {name: '广西', value: 1},
    {name: '台湾', value: 1},
];
const city = [
    {name: '宁波市', value: 414},
    {name: '舟山市', value: 4},
    {name: '金华市', value: 6},
    {name: '杭州市', value: 9},
    {name: '台州市', value: 5},
    {name: '嘉兴市', value: 3},
    {name: '温州市', value: 5},
    {name: '衢州市', value: 2},
    {name: '绍兴市', value: 13},
    {name: '丽水市', value: 1},
];

const getOption1 = (t) => {
    return {
        color: t.colors,
        title: {
            text: t.title,
            left: 'center',
            textStyle: {
                fontSize: 15,
                fontWeight: 400,
            },
        },
        legend: {
            bottom: 'bottom',
            data: t.legend,
        },
        series : [
        {
            type: 'pie',
            radius : '45%',
            hoverAnimation: false,
            clockwise: false,
            label: {
                normal: {
                    fontSize: 14,
                    formatter: "{c}人\n{d}%"
                }
            },
            labelLine: {
                length: 8,
                length2: 6,
            },
            data: (function (l, d) {
                let res = [];
                for (let i = 0; i < l.length; i ++) {
                    res.push({value: d[i], name: l[i]});
                }
                return res;
            }(t.legend, t.data)),
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
    };
};

const getOption2 = (t) => {
    return {
        color: colors,
        title: {
            text: t.title,
            subtext: t.subtext,
            x: 'center',
            textStyle: {
                fontSize: 15,
                fontWeight: 400,
            },
        },
        series : [
            {
                type:'pie',
                radius : [30, 60],
                center : ['50%', '60%'],
                hoverAnimation: false,
                roseType : 'area',
                labelLine: {
                    length: 8,
                    length2: 6,
                },
                emphasis: {
                    label: {
                        show: true,
                        formatter: '人数: {c}人',
                    }
                },
                data: (function (l, d) {
                    let res = [];
                    for (let i = 0; i < l.length; i ++) {
                        res.push({value: d[i], name: l[i]});
                    }
                    return res;
                }(t.legend, t.data)),
            }
        ]
    };
};

const ageOption = {
    color: [colors[1], colors[0], colors[5]],
    title: {
        text: '年龄分布情况',
        x: 'center',
        textStyle: {
            fontSize: 15,
            fontWeight: 400,
        },
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: {
        right: '20%'
    },
    legend: {
        bottom: 'bottom',
        data:['男生','女生','总人数']
    },
    xAxis: {
            name: '年龄',
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            data: ['≤15岁','16岁','17岁','18岁','19岁','≥20岁']
    },
    yAxis: {
            type: 'value',
            name: '人数',
            min: 0,
            max: 600,
            position: 'left',
            axisLabel: {
                formatter: '{value}'
            }
    },
    series: [
        {
            name:'男生',
            type:'bar',
            data:[2, 254, 313, 232, 96, 0]
        },
        {
            name:'女生',
            type:'bar',
            data:[5, 174, 253, 241, 111, 1]
        },
        {
            name:'总人数',
            type:'line',
            data:[7, 428, 566, 473, 207, 1]
        }
    ]
};

const getMapOption = function (map, min, max, data) {
    return {
        tooltip: {
            formatter: (params) => {
                if (params.data) {
                    return '来自'+ params.data.name + ': ' + params.data.value + '人';
                } else {
                    return '0人';
                }
            }
        },
        visualMap: {
            min: min,
            max: max,
            text:[max + '人', min],
            realtime: true,
            inRange: {
                color: [colors[3], colors[6], colors[0]]
            }
        },
        series: [{
            type: 'map',
            map: map,
            label: {
                show: true,
                position: [10,10],
                fontSize: '8',
                color: '#0b346e',
            },
            data: data
        }]
    };
};

const BasicInfo = (props) => {
    return (
        <React.Fragment>
            {
                props.infoData.map((items, index) => {
                    return (
                        <div className="col-xl" key={index}>
                            <Card>
                                <Card.Body className="py-3">
                                    <div className="flex-center">
                                        <div className="d-inline-block mr-4">
                                            <img src={items.icon} alt=''/>
                                        </div>
                                        <div>
                                            <h4>{items.value}</h4>
                                            <span className='text-muted'>{items.name}</span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    );
                })
            }
        </React.Fragment>
    );
};

export default () => {
    return (
        <React.Fragment>
            <div className="row mb-lg-4">
                <BasicInfo infoData={basicInfo}/>
            </div>
            <div className="row pd-lr-15px mb-lg-4">
                <Card className='w-100'>
                    <Card.Header>
                        <h5 className='card-title mb-0'>
                            学生基本信息统计
                        </h5>
                    </Card.Header>
                    <Card.Body>
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <div className="row mb-lg-3">
                                    <div className="col-12 col-lg-6">
                                        <Ec option={getOption1(gender)} per={0.8}/>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <Ec option={getOption1(accommodation)} per={0.8}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-lg-6">
                                        <Ec option={getOption2(politicalStatus)} per={0.8}/>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <Ec option={getOption2(nationality)} per={0.8}/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <Ec option={ageOption} per={0.8}/>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
            <div className="row pd-lr-15px mb-lg-4">
                <Card className='w-100'>
                    <Card.Header>
                        <h5 className='card-title mb-0'>
                            学生来源分布情况
                        </h5>
                    </Card.Header>
                    <Card.Body>
                        <div className="row">
                            <div className="col-12 col-lg-8">
                                <Ec option={getMapOption('china', 0, 50, province)} h='500px'/>
                            </div>
                            <div className="col-12 col-lg-4">
                                <Ec option={getMapOption('浙江', 0, 20, city)} h='500px'/>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </React.Fragment>
    );
}
