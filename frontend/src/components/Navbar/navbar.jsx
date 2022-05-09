import React from "react";
import "./navbar.css";
import { NavLink as Link } from "react-router-dom";
import styled from 'styled-components'
import logo from '../../images/logo.png';

const Navbar = () => {
  return (
    <>
      <Nav>
        <div className="pages">
          <NavLink to="/" activeStyle className="logo">
            <img src={logo} />
          </NavLink>
          <NavLink to="/library" activeStyle className="pages_container">
            <h1>Library</h1>
          </NavLink>
          <NavLink to="/chat" activeStyle className="pages_container">
            <h1>Chat</h1>
          </NavLink>
          <NavLink to="/community" activeStyle className="pages_container">
            <h1>Community</h1>
          </NavLink>
        </div>
        <div className="register">
          <NavLink to="/signin" activeStyle className="register_container">
            <h1>Sign In</h1>
          </NavLink>
          <NavLink to="/signup" activeStyle>
            <button type="button">Sign Up</button>
          </NavLink>
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