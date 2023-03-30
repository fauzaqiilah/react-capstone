import React from 'react';
import { Button, Space, Card, Col, Row } from "antd";
import "./home.css";
import logo from "../../assets/images/react.svg"

const Home = () => {
    return (
        <div>
            <Row >
                <Col flex={4}></Col>
                <Col flex={3}>
                    <h1 >Your Innovative Bill <br></br>Payment Solution</h1>
                    <p>Alterra menyediakan berbagai pilihan layanan tagihan & pembayaran digital <br></br> yang dapat membantu bisnis Anda semakin berkembang.</p>
                    <Button style={{ backgroundColor: "Orange" }}>Get in touch</Button>
                </Col>
                <Col flex={5}>
                    <img src="https://www.alterra.id/wp-content/uploads/2020/01/CoverPotrait-400x480.png" srcset="https://www.alterra.id/wp-content/uploads/2020/01/CoverPotrait.png 2x" class="full-width" alt="alterra"></img>
                </Col>

            </Row>
            <Row >
            <Col flex={1}></Col>
            <Col flex={1}>
            <img src="https://www.alterra.id/wp-content/uploads/2020/01/CoverPotrait-400x480.png" srcset="https://www.alterra.id/wp-content/uploads/2020/01/CoverPotrait.png 2x"  alt="alterra"></img>
          
            </Col>
            <Col flex={4} >
            <h3>What We Do</h3>
            <p className='hato'>
            Alterra Indonesia telah berdiri sejak tahun 2015 dengan nama awal 
            Sepulsa.com. Sebagai perusahaan teknologi terkemuka di Indonesia yang berfokus pada ekosistem billing dan teknologi pembayaran, Alterra Indonesia kini telah terhubung ke berbagai penerbit tagihan (Bill Issuers) dan metode pembayaran yang populer di Indonesia. Melalui sebuah innovative platform, Alterra Indonesia menyediakan layanan yang dapat menghubungkan semua penerbit tagihan 
            (Bill Issuers), Digital Commerce, dan juga End-User.
            </p>
            </Col>

            </Row>
            <Row>
                <h1></h1>
            </Row>
            <Row></Row>
        </div>
    );
}

export default Home;
