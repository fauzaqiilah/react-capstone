import {
  HeartOutlined,
  SendOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Card, Col, Row, Pagination } from "antd";
import { useState } from "react";
import React from "react";
import "./home.css";

const Home = () => {
  const { Meta } = Card;
  const gridStyle = {
    width: "25%",
    textAlign: "center",
  };
  // const [current, setCurrent] = useState(3);
  //   const onChange = (page) => {
  //     console.log(page);
  //     setCurrent(page);
  //   };
  return (
    <>
      <div className="content">
        <Row className="card" gutter={25}>
          <Col span={6}>
            <Card
              // style={{
              //   width: 400,
              //   height: 400,
              //   borderColor: "black",
              // }}
              cover={
                <img
                  alt="example"
                  src="https://www.alterra.id/wp-content/uploads/2019/11/Aku-gamau-coaching-500x278.png"
                />
              }
            >
              <h3>"Gue Nggak Mau Choaching"</h3>
              <p>
                Apa yang terlintas pertama kali di pikiran kamu saat mendengar
                kata coaching? Nah, mungkin beberapa asumsi berikut ini akan
                terasa familiar: “Wadidaw, gue bakal dikeramasin nih :(“ “Gue
                harus siap-siap nih biar
              </p>
              {
                <a href="https://www.alterra.id/apa-itu-coaching/" target="_blank">
                  Read More <ArrowRightOutlined />
                </a>
              }
            </Card>
          </Col>
          <Col span={6}>
            <Card
              // style={{
              //   width: 400,
              //   height: 400,
              //   borderColor: "black",
              // }}
              cover={
                <img
                  alt="example"
                  src="https://www.alterra.id/wp-content/uploads/2019/11/Aku-gamau-coaching-500x278.png"
                />
              }
            >
              <h3>"Gue Nggak Mau Choaching"</h3>
              <p>
                Apa yang terlintas pertama kali di pikiran kamu saat mendengar
                kata coaching? Nah, mungkin beberapa asumsi berikut ini akan
                terasa familiar: “Wadidaw, gue bakal dikeramasin nih :(“ “Gue
                harus siap-siap nih biar
              </p>
              {
                <a href="https://alterrabills.id/" target="_blank">
                  Read More <ArrowRightOutlined />
                </a>
              }
            </Card>
          </Col>
          <Col span={6}>
            <Card
              // style={{
              //   width: 400,
              //   height: 400,
              //   borderColor: "black",
              // }}
              cover={
                <img
                  alt="example"
                  src="https://www.alterra.id/wp-content/uploads/2019/11/Aku-gamau-coaching-500x278.png"
                />
              }
            >
              <h3>"Gue Nggak Mau Choaching"</h3>
              <p>
                Apa yang terlintas pertama kali di pikiran kamu saat mendengar
                kata coaching? Nah, mungkin beberapa asumsi berikut ini akan
                terasa familiar: “Wadidaw, gue bakal dikeramasin nih :(“ “Gue
                harus siap-siap nih biar
              </p>
              {
                <a href="https://alterrabills.id/" target="_blank">
                  Read More <ArrowRightOutlined />
                </a>
              }
            </Card>
          </Col>
          <Col span={6}>
            <Card
              // style={{
              //   width: 400,
              //   height: 400,
              //   borderColor: "black",
              // }}
              cover={
                <img
                  alt="example"
                  src="https://www.alterra.id/wp-content/uploads/2019/11/Aku-gamau-coaching-500x278.png"
                />
              }
            >
              <h3>"Gue Nggak Mau Choaching"</h3>
              <p>
                Apa yang terlintas pertama kali di pikiran kamu saat mendengar
                kata coaching? Nah, mungkin beberapa asumsi berikut ini akan
                terasa familiar: “Wadidaw, gue bakal dikeramasin nih :(“ “Gue
                harus siap-siap nih biar
              </p>
              {
                <a href="https://alterrabills.id/" target="_blank">
                  Read More <ArrowRightOutlined />
                </a>
              }
            </Card>
          </Col>
        </Row>
        <Pagination
          defaultCurrent={1}
          total={50}
          style={{ textAlign: "center" }}
        />
      </div>

      <div className="connect">
        <h1>Connect With Us</h1>
        <p>
          Silakan hubungi kami melalui kolom di bawah ini untuk jadwal demo
          ataupun pertanyaan seputar Alterra. Connect with Us
        </p>
        <Button className="button" type="primary" shape="round" size={"large"}>
          Get In Touch
        </Button>
      </div>
    </>
  );
};

export default Home;
