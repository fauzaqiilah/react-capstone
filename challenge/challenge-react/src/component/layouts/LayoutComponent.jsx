import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import HeaderComponent from './header/HeaderComponent';
import FooterComp from './footer/FooterComp';


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

     <FooterComp />
    </Layout>
        </>
    );
}

export default LayoutComponent;
