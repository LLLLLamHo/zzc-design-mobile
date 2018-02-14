import React from 'react';
import { Link } from 'bisheng/router';
import classNames from 'classnames';
import { Select, Menu, Row, Col, Icon, Button, AutoComplete, Input, Popover } from 'antd';

const { Option } = AutoComplete;
const searchEngine = 'Google';
const searchLink = 'https://www.google.com/#q=site:mobile.ant.design+';

export default class Header extends React.Component {

    state = {
        inputValue: '',
        menuVisible: false,
        menuMode: 'horizontal',
    };

    render() {

        return (
            <header id="header" className="">
                <Popover
                    overlayClassName="popover-menu"
                    placement="bottomRight"
                    content={<h1>123123</h1>}
                    trigger="click"
                    visible={'false'}
                    arrowPointAtCenter
                    onVisibleChange={this.onMenuVisibleChange}
                >
                    <Icon
                        className="nav-phone-icon"
                        type="menu"
                        onClick={this.handleShowMenu}
                    />
                </Popover>
                <Row>
                    <Col xxl={4} xl={5} lg={5} md={8} sm={24} xs={24}>
                        <Link to="/" id="logo">
                            <img alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
                            <span>12312313</span>
                        </Link>
                    </Col>
                    <Col xxl={20} xl={19} lg={19} md={16} sm={0} xs={0}>
                        <div id="search-box">
                            <Icon type="search" />
                            
                        </div>
                    </Col>
                </Row>
            </header>
        );
    }
}
