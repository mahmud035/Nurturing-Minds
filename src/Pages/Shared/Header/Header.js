import React, { useContext } from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../../../assets/images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { Button, Image } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { HiSun } from 'react-icons/hi';
import { BiMoon } from 'react-icons/bi';
import { useState } from 'react';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [darkMode, setDarkMode] = useState(true);

  const handleLogOut = () => {
    logOut();
    toast.warn('You just logged out!');
  };

  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="py-3 navbar-container">
          <Container>
            <Link to="/">
              <Navbar.Brand>
                <img
                  alt=""
                  src={logo}
                  width="40"
                  height="40"
                  className="d-inline-block align-center me-2"
                />
                <span className="d-inline-block fw-semibold text-white fs-4">
                  BrainStormy
                </span>
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className=" text-dark bg-white"
            />
            <Navbar.Offcanvas
              className="navbar-off-canvas"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Link to="/">
                    <Navbar.Brand>
                      <img
                        alt=""
                        src={logo}
                        width="40"
                        height="40"
                        className="d-inline-block align-center me-2"
                      />
                      <span className="d-inline-block text-white">
                        BrainStormy
                      </span>
                    </Navbar.Brand>
                  </Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body bg="dark" variant="dark">
                <Nav className="mx-auto pe-3 nav-items">
                  <NavLink
                    to="/home"
                    className={({ isActive }) =>
                      isActive ? 'active' : undefined
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink to="/courses">Courses</NavLink>
                  <NavLink to="/blog">Blog</NavLink>
                  <NavLink to="/faq">FAQ</NavLink>
                  {user?.email && <NavLink to="/checkout">Checkout</NavLink>}

                  <div
                    onClick={() => setDarkMode(!darkMode)}
                    style={{ marginLeft: 'auto !important' }}
                  >
                    {darkMode ? (
                      <>
                        <HiSun
                          className="text-white"
                          size={32}
                          style={{ cursor: 'pointer' }}
                          title="Switch Light"
                        />
                      </>
                    ) : (
                      <>
                        <BiMoon
                          className="text-white"
                          size={32}
                          style={{ cursor: 'pointer' }}
                          title="Switch Dark"
                        />
                      </>
                    )}
                  </div>
                </Nav>

                <Nav className="user-profile-and-logout mt-lg-0">
                  {user?.email ? (
                    <>
                      <Link to="/profile">
                        {user?.photoURL ? (
                          <>
                            <OverlayTrigger
                              key="bottom"
                              placement="bottom"
                              overlay={<Tooltip>{user?.displayName}</Tooltip>}
                            >
                              <Image
                                roundedCircle
                                src={user?.photoURL}
                                style={{ width: '40px', height: '40px' }}
                              ></Image>
                            </OverlayTrigger>
                          </>
                        ) : (
                          <FaUserCircle size={36} title={user?.displayName} />
                        )}
                      </Link>

                      <Link to="/login">
                        <Button
                          onClick={handleLogOut}
                          variant="info"
                          className="btn-log-out fw-semibold text-white"
                        >
                          Log Out
                        </Button>
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link to="/login">
                        <Button
                          variant="success"
                          className="btn-sign-in fw-semibold text-white"
                        >
                          Login
                        </Button>
                      </Link>
                      <Link to="/register">
                        <Button
                          variant="info"
                          className="btn-register fw-semibold  text-white"
                        >
                          Register
                        </Button>
                      </Link>
                    </>
                  )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Header;

//  bg = 'dark';
//  variant = 'dark';

// navbar-dark bg-dark
