import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import './header.scss'

function Header() {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="#home"><img src={logo} alt=""/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="link" to="/contract">Контракт</Link>
          <Link className="link" to="/users">Пользователи</Link>
          <Link className="link" to="/addresses">Адреса</Link>
          <Link className="link" to="/journal">Журнал</Link>
          <Link className="link" to="/transactions">Транзакции</Link>
          <Link className="link" to="/profile">Мой профиль</Link>
          <NavDropdown title="mail@mail.mail" id="basic-nav-dropdown" className="link">
            <NavDropdown.Item href="#action/3.1">Выйти из системы</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )

}

export default Header;
