import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Row, Col } from 'antd';

const Footer = () => (
  <footer id="footer" className="dark">
    <div className="footer-wrap">
      <Row>
        <Col lg={6} sm={24} xs={24}>
          <div className="footer-center">
            <h2>ZZC Design</h2>
            <div>
              <a target="_blank " rel="noopener noreferrer" href="https://github.com/ant-design/ant-design-mobile">ZZC Design Mobile GitHub</a>
            </div>
          </div>
        </Col>
        <Col lg={6} sm={24} xs={24}>
          <div className="footer-center">
            <h2><FormattedMessage id="app.footer.links" /></h2>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="http://motion.ant.design">Ant Motion</a>
              <span> - </span>
              <FormattedMessage id="app.footer.motion" />
            </div>
          </div>
        </Col>
        <Col lg={6} sm={24} xs={24}>
          <div className="footer-center">
            <h2><FormattedMessage id="app.footer.community" /></h2>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://gitter.im/ant-design/ant-design">
                <FormattedMessage id="app.footer.discuss" />
              </a>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="http://github.com/ant-design/ant-design-mobile/issues">
                <FormattedMessage id="app.footer.bug-report" />
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </footer>
);

export default injectIntl(Footer);
