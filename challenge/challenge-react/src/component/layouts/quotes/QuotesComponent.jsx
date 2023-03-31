import React from "react";
import { Image, Col, Row, Card } from "antd";
import designer from "../image/designer.png";
import presentasi from "../image/presentasi.svg";
import aset2 from "../image/aset2.png";
import reading from "../image/reading.svg";
import startup from "../image/startup.svg";
import {
  ArrowRightOutlined
} from '@ant-design/icons';

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
            <Card className="card">
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
            
              <div className="penulis2">
              <b>Ragil Mega Ananda</b> 
              </div>
              <br/>
              <hr className="garis2" color="#F6F1F1" />

              <div className="konten-judul">
                <h4>3 Rekomendasi Grammar Checker</h4>
                <p>Terkadang menulis email atau laporan dalam bahasa Inggris mempunyai tantangan tersendiri. Sebagian dari kita belum tentu menguasai bahasa Inggris tingkat tinggi, dan mengandalkan</p>
              {<a href="https://alterrabills.id/" className="arrow" target="_blank"><b>Read More</b><ArrowRightOutlined /></a>}
              </div>
            </Card>
          </Col>


          {/* CARD-2 */}
          <Col span={12}>
          <Card className="card">
              <Row>

              {/* TULISAN */}
                <Col span={12} className="growing">
                  <h3><b>Growing<br/>Experiences<br/> at alterra</b></h3>
                  <br />
                </Col>

              {/* ASET */}
                <Col span={12} className="presentasi">
                  <img src={presentasi} alt="" className="presentasi" />
                </Col>
              </Row>
            
              <div className="penulis2">
              <b>Juneta Putri</b> 
              </div>
              <br/>
              <hr className="garis2" color="#F6F1F1" />

              <div className="konten-judul">
                <h4>Growing Experience with Alterra : Internship Story</h4>
                <p>Hello! Kenalin aku Juneta, mahasiswi yang memiliki kesempatan untuk internship di Alterra sebagai Culture & Engagement Intern atau biasa disebut Culment. Nah kali ini, aku mau sharing </p>
              {<a href="https://alterrabills.id/" className="arrow" target="_blank"><b>Read More</b><ArrowRightOutlined /></a>}
              </div>
            </Card>
          </Col>
        </Row>

        <br/>
        <Row gutter={12}>


          {/* CARD-3 */}
          <Col span={12}>
            <Card className="card">

              {/* ASET */}
              <Row>
                <Col span={24} >
                  <img src={aset2} alt="" className="report" />
                </Col>
              </Row>
            
              <div className="penulis2">
              <b>Ragil Mega Ananda</b> 
              </div>
              <br/>
              <hr className="garis2" color="#F6F1F1" />

              <div className="konten-judul">
                <h4>3 Rekomendasi Grammar Checker</h4>
                <p>Terkadang menulis email atau laporan dalam bahasa Inggris mempunyai tantangan tersendiri. Sebagian dari kita belum tentu menguasai bahasa Inggris tingkat tinggi, dan mengandalkan</p>
              {<a href="https://alterrabills.id/" className="arrow" target="_blank"><b>Read More</b><ArrowRightOutlined /></a>}
              </div>
            </Card>
          </Col>


          {/* CARD-4 */}
          <Col span={12}>
          <Card className="card">
              <Row>

              {/* TULISAN */}
                <Col span={12} className="growing">
                  <h3><b>Growing<br/>Experiences<br/> at alterra</b></h3>
                  <br />
                </Col>

              {/* ASET */}
                <Col span={12} className="presentasi">
                  <img src={presentasi} alt="" className="presentasi" />
                </Col>
              </Row>
            
              <div className="penulis2">
              <b>Juneta Putri</b> 
              </div>
              <br/>
              <hr className="garis2" color="#F6F1F1" />

              <div className="konten-judul">
                <h4>Growing Experience with Alterra : Internship Story</h4>
                <p>Hello! Kenalin aku Juneta, mahasiswi yang memiliki kesempatan untuk internship di Alterra sebagai Culture & Engagement Intern atau biasa disebut Culment. Nah kali ini, aku mau sharing </p>
              {<a href="https://alterrabills.id/" className="arrow" target="_blank"><b>Read More</b><ArrowRightOutlined /></a>}
              </div>
            </Card>
          </Col>
          

          {/* CARD-5 */}
          <Col span={12}>
            <Card className="card5">

              {/* ASET */}
              <Row>
                <Col span={24} >
                  <img src={reading} alt="" className="report" />
                </Col>
              </Row>
            
              <div className="penulis2">
              <b>Ragil Mega Ananda</b> 
              </div>
              <br/>
              <hr className="garis2" color="#F6F1F1" />

              <div className="konten-judul">
                <h4>3 Rekomendasi Grammar Checker</h4>
                <p>Terkadang menulis email atau laporan dalam bahasa Inggris mempunyai tantangan tersendiri. Sebagian dari kita belum tentu menguasai bahasa Inggris tingkat tinggi, dan mengandalkan</p>
              {<a href="https://alterrabills.id/" className="arrow" target="_blank"><b>Read More</b><ArrowRightOutlined /></a>}
              </div>
            </Card>
          </Col>


          {/* CARD-6 */}
          <Col span={12}>
            <Card className="card6">

              {/* ASET */}
              <Row>
                <Col span={24} >
                  <img src={startup} alt="" className="startup" />
                </Col>
              </Row>
            
              <div className="penulis2">
              <b>Ragil Mega Ananda</b> 
              </div>
              <br/>
              <hr className="garis2" color="#F6F1F1" />

              <div className="konten-judul">
                <h4>3 Rekomendasi Grammar Checker</h4>
                <p>Terkadang menulis email atau laporan dalam bahasa Inggris mempunyai tantangan tersendiri. Sebagian dari kita belum tentu menguasai bahasa Inggris tingkat tinggi, dan mengandalkan</p>
              {<a href="https://alterrabills.id/" className="arrow" target="_blank"><b>Read More</b><ArrowRightOutlined /></a>}
              </div>
            </Card>
          </Col>




        </Row>

      </div>
    </>
  );
};

export default QuotesComponent;
