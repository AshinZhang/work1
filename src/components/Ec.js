import React, { Component } from 'react';
import echarts from 'echarts/lib/echarts';

export default class extends Component {
    static defaultProps = {
        option: {},
        w: null,
        h: null,
        per: 1,
        controller: false,
    };
    constructor(props) {
        super(props);
        this.ecIns = null;
        this.ecDom = React.createRef();
    }
    componentDidMount() {
        const dom = this.ecDom.current;
        setTimeout(()=>{
            if (this.props.w !== null) {
                dom.style.width = this.props.w;
            }
            if (this.props.h !== null) {
                dom.style.height = this.props.h;
            }
            if (dom.clientHeight === 0) {
                dom.style.height = (dom.clientWidth * this.props.per) + 'px';
            }
            if (dom.clientWidth === 0) {
                dom.style.width = (dom.clientHeight / this.props.per) + 'px';
            }
            this.ecIns = echarts.init(dom);
            this.ecIns.setOption(this.props.option);
        }, 1000);
    }
    componentWillUnmount() {
        if (this.ecIns) {
            this.ecIns.clear();
            this.ecIns.dispose();
        }
    }
    render() {
        return (
            <div ref={this.ecDom}>
            </div>
        );
    }
}
