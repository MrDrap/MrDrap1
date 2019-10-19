import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import './header.scss'

function Header() {
  return (
    <nav>
      <ul>
        <li className="logo"><img src={logo} alt="logo"/> <span className="logoText">обмен- <br/>ник</span></li>
        <li><Link className="link" to="/contract">Контракт</Link></li>
        <li><Link className="link" to="/users">Пользователи</Link></li>
        <li><Link className="link" to="/addresses">Адреса</Link></li>
        <li><Link className="link" to="/journal">Журнал</Link></li>
        <li><Link className="link" to="/transactions">Транзакции</Link></li>
        <li><Link className="link" to="/profile">Мой профиль</Link></li>
      </ul>
      <ul>
        <li className="logo">
          <Link className="link" to="/profile">mail@mail.mail <span className="caret"></span></Link>
          <div>
            <ul>
              <li><Link className="link" to="/profile">Выйти из системы</Link></li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
    // <nav class="navbar navbar-light bg-light">
    //   <a class="navbar-brand" href="#">
    //     <img src={logo} alt="logo" width="30" height="30" class="d-inline-block align-top" />
    //     обмен- <br/>
    //     ник
    //   </a>
    // </nav>
    // <Navbar expand="lg">
    //   <Navbar.Brand href="#home"><img src={logo} alt="logo"/></Navbar.Brand>
    //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //   <Navbar.Collapse id="basic-navbar-nav">
    //     <Nav className="mr-auto">
    //       <Link className="link" to="/contract">Контракт</Link>
    //       <Link className="link" to="/users">Пользователи</Link>
    //       <Link className="link" to="/addresses">Адреса</Link>
    //       <Link className="link" to="/journal">Журнал</Link>
    //       <Link className="link" to="/transactions">Транзакции</Link>
    //       <Link className="link" to="/profile">Мой профиль</Link>
    //       <NavDropdown title="mail@mail.mail" id="basic-nav-dropdown" className="link">
    //         <NavDropdown.Item href="#action/3.1">Выйти из системы</NavDropdown.Item>
    //       </NavDropdown>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
  )

}

export default Header;
