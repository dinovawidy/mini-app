import React, { useEffect, useRef } from "react";
import "./header.scss";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { Button, Container, Row } from "reactstrap";

const nav__links = [
  {
    path: "tentang",
    display: "Tentang",
  },
  {
    display: "Produk",
  },
  {
    display: "FAQ",
  },
  {
    display: "Events",
  },
  {
    display: "Partnership",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.add("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });

    const menuToggle = () => menuRef.current.classList.toggle('active__menu')

  const navigateToTentang = () => {
    navigate("/tentang");
  };

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={Logo} alt="logo" />
              {/* <div>
                <h1>Mini App</h1>
              </div> */}
            </div>

            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              
                {nav__links.map((item, index) => (
                  <Button className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </Button>
                ))}
              
            </div>

            <div className="nav__login">
              <Button className="login">Masuk</Button>
              <Button className="register">Daftar</Button>
            </div>

            
          </div>
          <hr className="garis" />
        </Row>
      </Container>
    </header>
  );
};

export default Header;
