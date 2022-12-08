import React from 'react'
import "./logo.scss"
import { Container, Row, Col } from 'reactstrap'
import Android from "../../assets/logo/android.svg"
import bootstrap from "../../assets/logo/bootstrap.svg"
import CodeIgniter from "../../assets/logo/codeigniter.svg"
import CSS from "../../assets/logo/css.svg"
import Firebase from "../../assets/logo/firebase.svg"
import Git from "../../assets/logo/git.svg"
import HTML from "../../assets/logo/html.svg"
import Java from "../../assets/logo/java.svg"
import Javascript from "../../assets/logo/javascript.svg"
import Jqury from "../../assets/logo/jquery.svg"
import Kotlin from "../../assets/logo/kotlin.svg"
import NodeJs from "../../assets/logo/node.svg"
import PHP from "../../assets/logo/php.svg"
import Python from "../../assets/logo/python.svg"
import ReactJS from "../../assets/logo/react.svg"
import MySQL from "../../assets/logo/sql.svg"
import Swift from "../../assets/logo/swift.svg"

const Logo = () => {
  return (
    <section className='section__logo'>
        <Container>
            <Row>
                <Col lg="10" md="10">
                    <div className="container">
                        <div className="text">
                            <h1>Dapatkan Bantuan dari 
                                <br />
                                Ribuan Ahli dan Professional 
                                <br />
                                Programmer di Seluruh 
                                <br />
                                Indonesia</h1>
                                <p>Dari Berbagai Bahasa Pemrograman, Framework, Tools Coding, dan Contoh Pengembangan Proyek</p>

                        </div>
                        <div className="logo">
                            <div className="icon">
                                <div className="retangle">
                                    <img src={Android} alt="android" />
                                <p>Android</p>
                                </div>
                            </div>
                            <div className="icon">
                            <div className="retangle">
                                    <img src={bootstrap} alt="bootstrap" />
                                <p>Bootstrap</p>
                                </div>
                            </div>
                            <div className="icon">
                            <div className="retangle">
                                    <img src={CodeIgniter} alt="ci" />
                                <p>Code Igniter</p>
                                </div>
                            </div>
                            <div className="icon">
                            <div className="retangle">
                                    <img src={CSS} alt="css" />
                                <p>CSS</p>
                                </div>
                            </div>
                            <div className="icon">
                            <div className="retangle">
                                    <img src={Firebase} alt="fire" />
                                <p>Firebase</p>
                                </div>
                            </div>
                            <div className="icon">
                            <div className="retangle">
                                    <img src={Git} alt="git" />
                                <p>Git</p>
                                </div>
                            </div>
                            <div className="icon">
                            <div className="retangle">
                                    <img src={HTML} alt="html" />
                                <p>HTML</p>
                                </div>
                            </div>
                            <div className="icon">
                            <div className="retangle">
                                    <img src={Java} alt="java" />
                                <p>Java</p>
                                </div>
                            </div>
                            <div className="icon">
                            <div className="retangle">
                                    <img src={Javascript} alt="js" />
                                <p>JavaScript</p>
                                </div>
                            </div>
                            <div className="icon">
                            <div className="retangle">
                                    <img src={Jqury} alt="jquery" />
                                <p>Jquery</p>
                                </div>
                            </div>
                            
                            
                            
                        </div>

                        <div className="baris2">
                            <div className="icon">
                            <div className="retangle">
                                    <img src={Kotlin} alt="kotlin" />
                                <p>Kotlin</p>
                                </div>
                            </div>
                            <div className="icon">
                            <div className="retangle">
                                    <img src={NodeJs} alt="node" />
                                <p>Node Js</p>
                                </div>
                            </div>
                            <div className="icon">
                            <div className="retangle">
                                    <img src={PHP} alt="php" />
                                <p>PHP</p>
                                </div>
                            </div>
                            <div className="icon">
                            <div className="retangle">
                                    <img src={Python} alt="python" />
                                <p>Python</p>
                                </div>
                            </div>
                            <div className="icon">
                            <div className="retangle">
                                    <img src={ReactJS} alt="react" />
                                <p>React Js</p>
                                </div>
                            </div>
                            <div className="icon">
                            <div className="retangle">
                                    <img src={MySQL} alt="sql" />
                                <p>MySQL</p>
                                </div>
                            </div>
                            <div className="icon">
                            <div className="retangle">
                                    <img src={Swift} alt="swift" />
                                <p>Swift</p>
                                </div>
                            </div>
                            </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Logo