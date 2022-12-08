import React from "react";
import { Container, Row, Col } from "reactstrap";
import MicroBlogging from "../../assets/zigzag/image1.svg";
import Online from "../../assets/zigzag/online-forum.svg";
import Background from "../../assets/zigzag/background1.svg";
import JobHiring from "../../assets/zigzag/job-hiring.png";
import "./zigzag.scss";

const Zigzag = () => {
  return (
    <section className="Zigzag__card">
      <Container>
        <Row>
          <Col lg="10" md="10">
            <div className="zigzag">
              <div className="slide1">
                <h1>
                  Satu Platform,
                  <br />
                  Banyak Solusi
                </h1>
                <p>
                  Kotakode memfasilitasi dengan memberikan berbagai 
                  fitur yang
                  menarik dan terbaik untuk mengembangkan ekosistem IT anak
                  bangsa.
                </p>
              </div>
              <div className="slide2">
                <div className="online__forum">
                  <div className="tes">
                    <div className="image">
                      <img src={Online} alt="online" />
                    </div>

                    <div className="text">
                      <h2>Online Forum</h2>
                      <p>
                        Kotakode dapat menjawab
                        <br />
                        pertanyaan dan membantu
                        <br />
                        programmer dalam
                        <br />
                        memberikan jawaban yang
                        <br />
                        berkualitas
                      </p>
                      <div className="button">
                        <button>Tanya Sekarang</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="microblogging">
                  <div className="micro">
                  <div className="image">
                    <img src={MicroBlogging} alt="mikro" />

                    </div>
                    <div className="text">
                      <h2>Microblogging</h2>
                      <p>
                        Kotakode menyediakan 
                        <br />
                        wadah bagi programmer 
                        <br />
                        untuk berbagi wawasan 
                        <br />
                        terkait info terkini di bidang 
                        <br />
                        IT
                      </p>
                      <div className="button">

                  <button>Tulis Sekarang</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="job__hiring">
                  <div className="job">
                  <div className="image">
                    
                    <img src={JobHiring} alt="job" />

                    </div>
                    <div className="text">
                      <h2>Job Hiring 
                        <br />
                        (Coming Soon)</h2>
                      <p>
                        Kotakode membantu 
                        <br />
                        rekruiter dalam mencari 
                        <br />
                        talent terbaik yang 
                        <br />
                        memenuhi standar 
                        <br />
                        perusahaan
                      </p>
                    <div className="button">
                    <button>Cari Kerja</button>

                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Zigzag;
