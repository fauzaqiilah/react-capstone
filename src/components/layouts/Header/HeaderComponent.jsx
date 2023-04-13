import React from "react";
import { Layout, Button } from "antd";
import "./headerComponents.css";
import { NavbarAltera } from "../../../assets/index";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  const { Header } = Layout;
  return (
    <>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          backgroundColor: "white",
          height: "90px",
          paddingTop: "18px",
          boxShadow: "0px 0px 3px 0px black",
        }}
      >
        <div className="header-layout">
          <div className="headerWrapper">
            <div className="menu">
              <Link to="/" className="link">
                <img src={NavbarAltera} alt="Alterra Navbar" height={45} />
              </Link>
              <Link to="/whyus" className="link">
                Why Us
              </Link>
              <Link className="link">Product</Link>
              <Link className="link">Our Culture</Link>
              <Link to="/kamis" className="link">
                Kamis
              </Link>
              <Link className="link">Careers</Link>
            </div>
            <div className="button">
              <Button>Get In Touch</Button>
            </div>
          </div>
        </div>
      </Header>
    </>
  );
};

export default HeaderComponent;
