import React from "react";
import { Image, Col, Row, Card } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { ARTIKEL_DATA } from "./constant";
import Gap from "../../component/gap/Gap";
import '../kamis/kamis.css'

const QuotesComponent = () => {
  return (
    <>
      {/* WELCOMING QUOTES */}
      <Row>
        <Col span={12}>
          <div className="container">
            <Image
              className="image"
              preview={{
                visible: false,
              }}
              width={400}
              height={500}
              justify-content="center"
              src="https://www.alterra.id/wp-content/uploads/2019/10/tumbnail_Alterramenulis-400x480.png"
              onClick={() => setVisible(true)}
            />
            <div
              style={{
                display: "none",
              }}
            ></div>
          </div>
        </Col>

        <Col span={12}>
          <div className="tulisan">
            <p>
              <b>
                "Orang boleh pandai setinggi
                <br /> langit, tapi selama ia tidak
                <br /> menulis, ia akan hilang di
                <br /> dalam masyarakat dan dari
                <br /> sejarah. Menulis adalah
                <br /> bekerja untuk keabadian."
              </b>{" "}
              <br />
              <span className="penulis">Pramoedya Ananta Toer</span>
            </p>
          </div>
        </Col>
      </Row>
      <hr className="garis" color="#F6F1F1" />

      {/* ARTIKEL TITLE */}
      <div className="artikel">
        <p>
          Artikel Terkini
          <br />
          <span className="subtulisan">
            Berikut ini adalah kumpulan tulisan terbaru yang dibuat oleh
            Alterrans. Selamat membaca!
          </span>
        </p>
      </div>

      
      <Row className="row">
        <Gap height={20}/>
      {ARTIKEL_DATA.map((artikel) => (
        <div className="jarak">
            <Card key={artikel.id} className="card"
            hoverable
            style={{
              color: "#19345E"
            }}
            >
              <Col>
              <img src={artikel.image} alt="" id="img" />
              <Gap height={10}/>
              <div className="penulis2">{artikel.writer}</div>
              <hr className="batas"/>
              <Gap height={10}/>
              <div className="judul">{artikel.judul}</div>
              <Gap height={10}/>
              <div className="berita">{artikel.berita}</div>
              <Gap height={10}/>
                  <a
                    href="https://alterrabills.id/"
                    className="read-more"
                    target="_blank"
                  >
                    <b>Read More</b>
                    <ArrowRightOutlined />
                  </a>
            </Col>
            </Card>
            
          </div>
      ))}
      </Row> 
  
    </>
  );
};

export default QuotesComponent;
