import React from "react";
import Jawaban from "../../assets/card/jawaban.png";
import Konsep from "../../assets/card/Konsep-Gamifikasi.png";
import portfolio from "../../assets/card/portfolio.png";
import { Container, Row, Col } from "reactstrap";
import "./card.scss";

const Card = () => {
  return (
    <section className="section__card">
      <Container>
        <Row>
          <Col lg="3" md="4">
            <div className="card">
              <div className="container">
                <div className="doube__card">
                  <div className="jawaban">
                    <img src={Jawaban} alt="jawaban" />
                    <div className="text">
                    <h2>Jawaban cepat, tepat & gratis</h2>
                    <p>
                      Dapatkan jawaban dalam hitungan menit dari ribuan
                      programmer lainnya.
                    </p>
                    </div>
                  </div>
                  <div className="konsep">
                    <img src={Konsep} alt="konsep" />
                    <div className="text">

                    <h2>Konsep Gamifikasi</h2>
                    <p>
                      Dapatkan badge menarik 
                      <br />
                      yang akan meningkatkan 
                      <br />
                      personal branding kamu 
                      <br />
                      sebagai seorang 
                      <br />
                      programmer.
                    </p>
                    </div>
                  </div>
                </div>
                <div className="portfolio">
                  <img src={portfolio} alt="portfolio" />
                  <h2>Bangun Online Portofolio</h2>
                  <p>
                    Portofolio ibaratkan sebuah aset 
                    <br />
                    yang berharga bagi setiap
                    orang. Semakin kamu 
                    <br />
                    aktif di dalam forum, semakin
                    <br />
                    membuktikan bahwa kamu adalah 
                    <br />
                    programmer yang berkualitas.
                  </p>
                </div>
                <div className="pertanyaan">
                    <h1>Mengapa
                        <br />
                        perlu
                        <br /> 
                        menggunakan
                        <br /> 
                        Kotakode?</h1>
                    <p>Ibaratkan sebuah kota dengan 
                        penduduk para programmer, 
                        Kotakode memberikan fasilitas 
                        guna mensejahterakan kehidupan 
                        penduduknya.</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Card;
