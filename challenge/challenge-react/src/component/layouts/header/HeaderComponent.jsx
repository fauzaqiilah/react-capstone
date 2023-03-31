import { Menu, Layout, Row } from "antd";
import React, { useState } from "react";
import { MENU_ITEM } from "../../../pages/formexample/constants";
import Link from "../../../router/Link";



const HeaderComponent = () => {
  const { Header } = Layout;
  const [current, setCurrent] = useState("1");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
 
  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
      }}
    >
      
        <Link href="/">
          <div
            onClick={() => setCurrent("")}
            style={{
              float: "left",
              width: 120,
              height: 31,
              margin: "16px 24px 16px 0",
              background: "rgba(255, 255, 255, 0.2)",
            }}
            >
          </div>
        </Link>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={MENU_ITEM}
          disabledOverflow
        />
    </Header>
  );
};

export default HeaderComponent;
