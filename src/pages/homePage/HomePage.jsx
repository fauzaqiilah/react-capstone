import React from "react";
import "./homePage.css";
import {
  Cover1,
  Altera,
  Tech,
  DailySocial,
  TechInAsia,
  TribunNews,
  TribunBisnis,
  Kontan,
  Bisnis,
} from "../../assets/index";
import { Button } from "antd";
import WhyUs from "../whyUs/WhyUs";

const HomePage = () => {
  return (
    <>
      <div className="layout-homepage">
        <div className="homepage-content">
          <div className="kotak">
            <div className="homepage-title">
              <h1>Your Innovative Bill Payment Solution</h1>
              <p>
                Alterra menyediakan berbagai pilihan layanan tagihan &
                pembayaran digital yang dapat membantu bisnis Anda semakin
                berkembang.
              </p>
              <Button>Get In Touch</Button>
            </div>
          </div>
          <div className="img">
            <a href="https://youtu.be/F7o9BWKC1G0" target="_blank">
              <img src={Cover1} alt="Cover Alterra" />
            </a>
          </div>
        </div>

        {/* What We Do */}
        <div className="what-content">
          <img src={Altera} alt="Grapic Altera" />
          <div>
            <div className="kotak">
              <div className="what-title">
                <h3>What We Do</h3>
                <p>
                  Alterra Indonesia telah berdiri sejak tahun 2015 dengan nama
                  awal Sepulsa.com. Sebagai perusahaan teknologi terkemuka di
                  Indonesia yang berfokus pada ekosistem billing dan teknologi
                  pembayaran, Alterra Indonesia kini telah terhubung ke berbagai
                  penerbit tagihan (Bill Issuers) dan metode pembayaran yang
                  populer di Indonesia. Melalui sebuah innovative platform,
                  Alterra Indonesia menyediakan layanan yang dapat menghubungkan
                  semua penerbit tagihan (Bill Issuers), Digital Commerce, dan
                  juga End-User.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* What We Do END*/}

        {/* Trusted */}
        <div className="trusted-content">
          <div className="trusted-title">
            <h3>Trusted by Indonesia's Top Tech Companies</h3>
          </div>
          <div className="trusted-item">
            <div className="ecomerce">
              <div className="eco-item">
                <div className="number">01</div>
                <div>
                  <h3>E-Commerce & Digital Commerce</h3>
                  <p className="p-style">
                    Alterra Indonesia telah bermitra dengan lebih dari 200
                    e-commerce & digital commerce ternama di Indonesia, dan
                    mampu memproses hingga puluhan juta transaksi setiap
                    harinya.
                  </p>
                </div>
              </div>

              <div className="eco-item">
                <div className="number">02</div>
                <div>
                  <h3>Telco Provider & Biller Aggregator</h3>
                  <p className="p-style">
                    Alterra Indonesia telah terhubung dan menjadi aggregator
                    pembayaran digital yang ditunjuk langsung oleh berbagai
                    telco provider besar sejak tahun 2015. Alterra juga bermitra
                    dengan banyak penerbit tagihan seperti BPJS, PDAM, PLN,
                    Telkom, untuk mempermudah proses pembayaran secara digital.
                  </p>
                </div>
              </div>
            </div>
            <div className="tech">
              <img src={Tech} alt="" />
            </div>
          </div>
        </div>
        {/* Trusted END*/}

        {/* Media */}
        <div className="media-content">
          <div className="media-title">
            <h3>Media Coverage</h3>
            <div className="media-item">
              <div className="item1">
                <a href="https://dailysocial.id/" target="_blank">
                  <img
                    src={DailySocial}
                    alt="Daily Social"
                    style={{ width: "150px" }}
                  />
                </a>
              </div>
              <div className="item2">
                <a href="https://www.techinasia.com/" target="_blank">
                  <img
                    src={TechInAsia}
                    alt="Tech In Asia"
                    style={{ width: "150px" }}
                  />
                </a>
              </div>
              <div className="item3">
                <a href="https://www.tribunnews.com/" target="_blank">
                  <img
                    src={TribunNews}
                    alt="Tribun News"
                    style={{ width: "150px" }}
                  />
                </a>
              </div>
              <div className="item4">
                <a href="https://www.tribunnews.com/bisnis" target="_blank">
                  <img
                    src={TribunBisnis}
                    alt="Tribun Bisnis"
                    style={{ width: "150px" }}
                  />
                </a>
              </div>
              <div className="item5">
                <a href="https://www.kontan.co.id/" target="_blank">
                  <img src={Kontan} alt="Kontan" style={{ width: "150px" }} />
                </a>
              </div>
              <div className="item6">
                <a href="https://teknologi.bisnis.com/" target="_blank">
                  <img src={Bisnis} alt="Bisnis" style={{ width: "150px" }} />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Media END */}
      </div>
      <WhyUs />
    </>
  );
};

export default HomePage;
