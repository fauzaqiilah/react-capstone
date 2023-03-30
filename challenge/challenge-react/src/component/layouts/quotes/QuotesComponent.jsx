import React from "react";
import { Image, Col, Row, Card } from "antd";
import designer from "../image/designer.png";

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

      {/* CARD KONTEN */}
      <div className="grid-konten">
        <Row gutter={12}>

          {/* CARD-1 */}
          <Col span={12}>
            <Card title="Card title">
              <Row>

              {/* ASET */}
                <Col span={12} className="foto-designer">
                  <img src={designer} alt="" className="designer" />
                </Col>

              {/* TULISAN */}
                <Col span={12} className="rekomendasi">
                  <b>3 Rekomendasi</b>
                  <br />
                  <span id="grammar"> Grammar Checker</span>
                </Col>
              </Row>
              Card content
            </Card>
          </Col>


          {/* CARD-2 */}
          <Col span={12}>
            <Card title="Card title">Card content</Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default QuotesComponent;
