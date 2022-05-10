import React, { useState } from "react";
import "./navbar.css";
import { NavLink as Link } from "react-router-dom";
import styled from 'styled-components'
import logo from '../../images/logo.png';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <Nav>
        <div className="logopages_container">
          <div className="logo">
            <NavLink exact to="/">
              <img src={logo} alt="Logo" />
            </NavLink>
          </div>
          <div className="pages">
            <NavLink to="/library">
              <h1>Library</h1>
            </NavLink>
            <NavLink to="/community">
              <h1>Community</h1>
            </NavLink>
            <NavLink to="/chat">
              <h1>Chat</h1>
            </NavLink>
          </div>
        </div>
        <div className="register">
          <NavLink to="/signin">
            <h1>Sign In</h1>
          </NavLink>
          <NavLink to="/signup">
            <button>Sign Up</button>
          </NavLink>
        </div>

        <div className="responsive">
          {toggleMenu
            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
          {toggleMenu && (
            <div className="responsive_container scale-up-center">
              <div className="pagesResponsive">
                <NavLink to="/library">
                  <h1>Library</h1>
                </NavLink>
                <NavLink to="/community">
                  <h1>Community</h1>
                </NavLink>
                <NavLink to="/chat">
                  <h1>Chat</h1>
                </NavLink>
              </div>
              <div className="registerResponsive">
                <NavLink to="/signin">
                  <h1>Sign In</h1>
                </NavLink>
                <NavLink to="/signup">
                  <button>Sign Up</button>
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </Nav>
    </>
  );
};

export const Nav = styled.nav`
    background:-moz-radial-gradient(circle at 3% 25%, #702632 0%, #0B090A 25%, #000000 100%);
    background:-webkit-radial-gradient(circle at 3% 25%, #702632 0%, #0B090A 25%, #000000 100%);
    background:-o-radial-gradient(circle at 3% 25%, #702632 0%, #0B090A 25%, #000000 100%);
    background:-ms-radial-gradient(circle at 3% 25%, #702632 0%, #0B090A 25%, #000000 100%);
    background:radial-gradient(circle at 3% 25%, #702632 0%, #0B090A 25%, #000000 100%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;`


export const NavLink = styled(Link)`
    color: white;`

export default Navbar;