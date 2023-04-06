import { Footer } from 'antd/es/layout/layout';
import React from 'react';
import { Col, Row } from 'antd';
import logo2 from '../image/logo-alterraputih.png';
import {
  CopyrightOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined
} from '@ant-design/icons';

const FooterComp = () => {
    return (
        <Footer className="footer">
        <Row>
      <Col span={8}>
      <div className='company'>
      <img src={logo2} alt="logoAlterra" 
      width={110}
      height={40}
      >
      </img>
      <div className='copyright'>
      {<a href="https://alterrabills.id/" className='cr' target="_blank"><CopyrightOutlined /><b>Alterra. All rights reserved</b></a>}
      </div>

      <div id='kebijakan'>
        <span className='kebpriv'><u><b>Kebijakan Privasi</b></u></span>
        <span className='ketlay'><u><b>Ketentuan Layanan</b></u></span>
      </div>
      </div>
      </Col>
  
      <Col span={8} className="homealter"><b>Alterra</b><br/>
      <div id='karfaq'>
      <span className="career">Career</span><br/>
      <span className="faq">FAQ</span>
      </div>
      </Col>


      <Col span={8} className="kontak"><b>Follow Us On</b>
      <div id='sosmed'>
        <span>
        {<a href="https://www.facebook.com/alterra.id?locale=id_ID" className='fb' target="_blank"><FacebookOutlined /> Facebook </a>}
        </span><br/>
        <span >
        {<a href="https://twitter.com/AlterraA" className='twt' target="_blank"><TwitterOutlined /> Twitter </a>}
          </span><br/>
        <span>
        {<a href="https://www.instagram.com/alterra.id/" className='ig' target="_blank"><InstagramOutlined /> Instagram </a>}
          </span><br/>
      </div>
      </Col>
    </Row>
        </Footer>
    );
}

export default FooterComp;