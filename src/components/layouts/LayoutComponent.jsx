import React from "react";
import { Layout } from "antd";
import HeaderComponent from "./Header/HeaderComponent";
import FooterComponent from "./Footer/footerComponent";

const LayoutComponent = ({ children }) => {
  const { Content } = Layout;
  return (
    <>
      <HeaderComponent />
      <Content style={{}}>
        <div
          className="site-layout-content"
          style={{
            background: "#",
          }}
        >
          {children}
        </div>
      </Content>
      <FooterComponent />
    </>
  );
};

export default LayoutComponent;
