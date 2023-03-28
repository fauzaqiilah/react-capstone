import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { MENU_ITEM } from '../../pages/formExample/constants';
import FooterComponenet from './footer/footerComponent';
import HeaderComponent from './header/HeaderComponent';


const LayoutComponent = ({children}) => {
    const { Header, Content, Footer } = Layout;
    return (
        <>
            <Layout>
      <HeaderComponent />
      <Content
        className="site-layout"
        style={{
          padding: '0 50px',
        }}
      >
        
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: "#fff",
          }}
        >
          {children}
        </div>
      </Content>

     <FooterComponenet />
    </Layout>
        </>
    );
}

export default LayoutComponent;
