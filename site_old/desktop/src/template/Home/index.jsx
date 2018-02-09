import 'react-github-button/assets/style.css';
import React from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'bisheng/router';
import GitHubButton from 'react-github-button';
import { injectIntl } from 'react-intl';
import { Popover, Button, Row, Col } from 'antd';
import * as utils from '../../../../utils';

function getStyle() {
  return `
    .main-wrapper {
      padding: 0;
    }
    #header {
      box-shadow: none;
      width: 100%;
    }
    #header,
    #header .ant-select-selection,
    #header .ant-menu {
      background: transparent;
    }
  `;
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    const { pathname } = props.location;
    const isZhCN = utils.isZhCN(pathname);
    this.state = {
      isZhCN,
    };
  }

  render() {
    const { isZhCN } = this.state;

    const addSeparater = (str) => {
      const arr = str.split('|');
      // arr.splice(1, 0 <span>|</span>)
      return [arr[0], <span key="divider" className="divider" />, arr[1]];
    };

    return (
      <DocumentTitle title={`ZZC Design Mobile - ${this.props.intl.formatMessage({ id: 'app.home.slogan' })}`}>
        <div className="main-wrapper">
          <section className="home-s1">
            <div className="banner-wrapper">
              <div className="banner-text-wrapper">
                <h2 key="h2">ZZC Design Mobile</h2>
                <p>{this.props.intl.formatMessage({ id: 'app.home.epitomize' })}</p>
                <div key="button1" className="start-button">
                  <Link to={`/docs/react/introduce${isZhCN ? '-cn' : ''}`}>
                    <Button type="primary" size="large">
                      {this.props.intl.formatMessage({ id: 'app.home.centerStart' })}
                    </Button>
                  </Link>
                  <Popover
                    placement="bottom"
                    trigger="click"
                    content={
                      <img className="home-qr" src="https://zos.alipayobjects.com/rmsportal/TrdkqxQcrAUcmYelQUNK.png" alt="qrcode" />
                    }
                  >
                    <Button type="primary" ghost>
                      {this.props.intl.formatMessage({ id: 'app.home.qrtip' })}
                    </Button>
                  </Popover>
                  <GitHubButton
                    key="github-button"
                    type="stargazers"
                    namespace="ant-design"
                    repo="ant-design-mobile"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="home-s2">
            <div className="wrapper">
              <h3>{this.props.intl.formatMessage({ id: 'app.home.s2_title' })}</h3>
              <Row gutter={72} style={{ marginBottom: 80 }}>
                <Col span={12}>
                  <img src="http://global.zuzuche.com/zzcDesign/images/KUmyjoMxFFbjEdjiIWOw.png" alt="" />
                  <div className="des">
                    <div>{addSeparater(this.props.intl.formatMessage({ id: 'app.home.s2_des1' }))}</div>
                    <p>{this.props.intl.formatMessage({ id: 'app.home.s2_des10' })}</p>
                  </div>
                </Col>
                <Col span={12}>
                  <img src="http://global.zuzuche.com/zzcDesign/images/hfFgCpcxpGjeAlXFFgyT.png" alt="" />
                  <div className="des">
                    <div>{addSeparater(this.props.intl.formatMessage({ id: 'app.home.s2_des2' }))}</div>
                    <p>{this.props.intl.formatMessage({ id: 'app.home.s2_des20' })}</p>
                  </div>
                </Col>
              </Row>
              <Row gutter={48}>
                <Col span={12}>
                  <img src="http://global.zuzuche.com/zzcDesign/images/nlUNcWIVLKoarLnWNaWS.png" alt="" />
                  <div className="des">
                    <div>{addSeparater(this.props.intl.formatMessage({ id: 'app.home.s2_des3' }))}</div>
                    <p>{this.props.intl.formatMessage({ id: 'app.home.s2_des30' })}</p>
                  </div>
                </Col>
                <Col span={12}>
                  <img src="http://global.zuzuche.com/zzcDesign/images/JjNULDGGwgOZmsZAqvjH.png" alt="" />
                  <div className="des">
                    <div>{addSeparater(this.props.intl.formatMessage({ id: 'app.home.s2_des4' }))}</div>
                    <p>{this.props.intl.formatMessage({ id: 'app.home.s2_des40' })}</p>
                  </div>
                </Col>
              </Row>
            </div>
          </section>
          <style dangerouslySetInnerHTML={{ __html: getStyle() }} />
        </div>
      </DocumentTitle>
    );
  }
}

export default injectIntl(Home);
