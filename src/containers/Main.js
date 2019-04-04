import React, { Component } from 'react';
import { Nav , Navbar } from 'react-bootstrap';
import SchInfo from './school/Info';
import SchConsumption from './school/Consumption';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            whichShow: '0-0',
        };
        this.menu = [{
            header: "学校层面",
            body: ["基本信息统计", "师资分配情况", "成绩统计分析", "考勤信息统计", "消费信息分析"],
            content: [<SchInfo/>, undefined, undefined, undefined, <SchConsumption/>]
        }, {
            header: "班级层面",
            body: ["待处理4", "待处理5", "待处理6", "待处理7"],
            content: []
        }, {
            header: "学生层面",
            body: ["待处理8", "待处理9", "待处理10", "待处理11"],
            content: []
        }, {
            header: "应用层面",
            body: ["待处理12", "待处理13", "待处理14", "待处理15"],
            content: []
        }];
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(idx) {
        this.setState({whichShow: idx});
    }
    getContent() {  // 根据索引得到需要渲染的组件
        const numbers = this.state.whichShow.split('-');
        const n1 = parseInt(numbers[0]);
        const n2 = parseInt(numbers[1]);
        const temp = this.menu[n1].content[n2];
        return temp===undefined?<div>索引错误</div>:temp;
    }
    render() {
        return (
            <React.Fragment>
                <div className="wrapper">
                <MenuBar menu={this.menu} default={this.state.whichShow} click={this.handleClick}/>
                <div className="main">
                    <div className="content">
                        {this.getContent()}
                    </div>
                </div>
                </div>
            </React.Fragment>
        );
    }
}

function MenuBar(props) {
    return (
        <Navbar>
            <div className="brand">
                <a href="/work1">数智教育</a>
            </div>
            <Nav as="ul" className="flex-column menu" defaultActiveKey={props.default} onSelect={k => props.click(k)}>
                {
                    props.menu.map((items, index)=>{
                        return <SingleNav key={index} idx={index} header={items.header} body={items.body} />
                    })
                }
            </Nav>
        </Navbar>
    );
}

function SingleNav(props) {
    return (
        <React.Fragment>
            <span>{props.header}</span>
            {
                props.body.map((items, index)=>{
                    return (
                        <Nav.Item as="li" key={index} className="menu-body">
                            <Nav.Link eventKey={props.idx + '-' + index}>{items}</Nav.Link>
                        </Nav.Item>
                    );
                })
            }
        </React.Fragment>
    );
}

export default Main;
