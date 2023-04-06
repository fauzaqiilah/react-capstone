import React from "react";
import { Image, Col, Row, Card } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { ARTIKEL_DATA } from "./constant";
import Gap from "../../gap/Gap";

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
              src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
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

      {ARTIKEL_DATA.map((artikel) => (
          <Row key={artikel.id} className="row">
            <Card className="card">
              <Col>
              <img src={artikel.image} alt="" id="img" />
              <Gap height={10}/>
              <div className="penulis2">{artikel.name}</div>
              <hr className="batas"/>
              <Gap height={10}/>
              <div className="judul">{artikel.hobby}</div>
              <Gap height={10}/>
              <div className="berita">{artikel.age}</div>
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
            <Gap width={30}/>
            <Card className="card">
              <Col>
              <img src={artikel.image} alt="" id="img" />
              <Gap height={10}/>
              <div className="penulis2">{artikel.name}</div>
              <hr className="batas"/>
              <Gap height={10}/>
              <div className="judul">{artikel.hobby}</div>
              <Gap height={10}/>
              <div className="berita">{artikel.age}</div>
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
            </Row>
      ))}
    </>
  );
};

export default QuotesComponent;
