import React from "react";
import { Card, Col, Row } from "antd";
import "./reactCaptone.css";
import { ArrowRightOutlined } from "@ant-design/icons";

const ReactCaptone = () => {
  return (
    <>
      <h3>Why Join Us?</h3>
      <Row className="card">
        <Col span={6} className="konten">
          <img src="https://www.alterra.id/wp-content/uploads/2020/02/icon1@2x.png" />
          <p>
            Aggregator resmi dari berbagai telco provider populer di Indonesia.
          </p>
        </Col>
        <Col span={6} className="konten">
          <img src="https://www.alterra.id/wp-content/uploads/2020/02/icon2@2x.png" />
          <p>
            Tersedia berbagai pilihan layanan tagihan dan pembayaran (bill
            payment) yang sesuai kebutuhan bisnis Anda.
          </p>
        </Col>
        <Col span={6} className="konten">
          <img src="https://www.alterra.id/wp-content/uploads/2020/02/icon3@2x.png" />
          <p>Mampu memproses puluhan juta transaksi setiap harinya.</p>
        </Col>
        <Col span={6} className="konten">
          <img src="https://www.alterra.id/wp-content/uploads/2020/02/icon4@2x.png" />
          <p>
            Telah bermitra dengan lebih dari 200 online partners dan jumlahnya
            terus bertambah.
          </p>
        </Col>
      </Row>
      <h3>Our Products and Services</h3>
      <Row className="card2" gutter={25}>
        <Col span={6}>
          <Card>
            <img
              src="https://www.alterra.id/wp-content/uploads/2020/01/alterra-bills-01.png"
              width="77"
            />
            <h5>Alterra Bills</h5>
            <p>
              Layanan yang dapat menghubungkan pemilik tagihan (Bill Issuer),
              dengan berbagai kanal pembayaran, digital commerce, dan juga
              end-users.
            </p>
            {
              <a href="https://alterrabills.id/" target="_blank">
                Learn More <ArrowRightOutlined />
              </a>
            }
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <img
              src="https://www.alterra.id/wp-content/uploads/2020/02/academy.png"
              width="77"
            />
            <h5>Alterra Academy</h5>
            <p>
              Tech talent incubator yang memberikan kesempatan bagi banyak
              individu untuk menjadi tech talent profesional dan berkualitas
              bahkan tanpa latar Pendidikan IT.
            </p>
            {
              <a href="https://academy.alterra.id/" target="_blank">
                Learn More <ArrowRightOutlined />
              </a>
            }
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <img
              src="https://www.alterra.id/wp-content/uploads/2020/01/logo_alterra_pay@2x.png"
              width="77"
            />
            <h5>Alterra Pay</h5>
            <p>
              Sistem pembayaran online dan rekonsiliasi otomatis yang
              terintegrasi untuk membantu bisnis Anda berjalan lebih efektif dan
              efisien.
            </p>
            {
              <a href="https://alterrapay.id/" target="_blank">
                Learn More <ArrowRightOutlined />
              </a>
            }
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <img
              src="https://www.alterra.id/wp-content/uploads/2020/01/logo_bimasakti@2x.png"
              width="77"
            />
            <h5>Bimasakti</h5>
            <p>
              Anak perusahaan Alterra yang melayani kebutuhan bisnis &
              organisasi seperti PDAM, pemerintah daerah, rumah sakit, dsb,
              melalui penyediaan teknologi yang dapat menunjang aktivitas
              operasional.
            </p>
            {
              <a href="https://bsa.id/" target="_blank">
                Learn More <ArrowRightOutlined />
              </a>
            }
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ReactCaptone;
