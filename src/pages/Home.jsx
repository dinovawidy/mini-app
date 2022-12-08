import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/helmet/Helmet";
import { motion } from "framer-motion";
import Card from "../components/ui/Card";
import Zigzag from "../components/ui/Zigzag";
import Logo from "../components/ui/Logo";
import TelegramBg from "../assets/backgroundtele.png"
import Telegram from "../assets/telegram.svg"

import "../styles/home.scss";

const Home = () => {
  return (
    <Helmet title={"Home"} className="head__home">
      <section className="hero__section ">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h1>
                  Jadilah Bagian dari
                  <br />
                  Komunitas Tech Terbesar
                  <br />
                  di Indonesia
                </h1>
                <h5>
                  Ikutan diskusi forum tanya jawab, tulis blog dan
                  <br />
                  Membangun portofolio semua di Kode.com
                </h5>
                <div className="input__email">
                  <input type="text" placeholder="Masukan Email Kamu" />
                  <button>Daftar</button>
                </div>
              </div>
              <div className="widget">
                <div className="user">
                  <h2>29440</h2>
                  <p>User Bergabung</p>
                </div>
                <div className="blog">
                  <h2>1073</h2>
                  <p>Blog Ditulis</p>
                </div>
                <div className="pertanyaan">
                  <h2>19596</h2>
                  <p>Total Pertanyaan & Jawaban</p>
                </div>
              </div>
              <div className="gif">
                <h1>ini gif</h1>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="background">
          
        </div>
      </section>
      <Card />
      <Zigzag />

      <section className="telegram">
        <Container>
          <Row>
            <Col lg="12">
              <div className="tele__contain">
                <div className="bg__contain">

                  <div className="tele__image">
                    <img src={Telegram} alt="telegram" />
                  </div>
                </div>
                    <div className="tele__text">
                      <h1>Gabung Komunitas Telegram Kotakode</h1>
                      <p>Kotakode berkolaborasi dengan berbagai pioneer yang inovatif untuk bersama mencapai tujuan yang besar</p>
                      <button>Ikutan Telegram!</button>
                    </div>
                
              </div>
            </Col>
          </Row>
        </Container>

      </section>

      <Logo />
    </Helmet>
  );
};

export default Home;
