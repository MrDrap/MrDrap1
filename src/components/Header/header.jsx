import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import './header.scss'
import RoleBasedRender from '../RoleBasedRender/RoleBasedRender';

function Header() {
  return (
    <nav>
      <ul>
        <li className="logo"><img src={logo} alt="logo"/> <span className="logoText">обмен- <br/>ник</span></li>
        <RoleBasedRender requiredRoles={ ['Администратор', 'Менеджер', 'Наблюдатель'] } >
          <li><NavLink className="link" activeClassName="active" to="/contract">Контракт</NavLink></li>
          <li><NavLink className="link" activeClassName="active" to="/users">Пользователи</NavLink></li>
          <li><NavLink className="link" activeClassName="active" to="/addresses">Адреса</NavLink></li>
          <li><NavLink className="link" activeClassName="active" to="/journal">Журнал</NavLink></li>
        </RoleBasedRender>
        <li><NavLink className="link" activeClassName="active" to="/transactions">Транзакции</NavLink></li>
        <li><NavLink className="link" activeClassName="active" to="/profile">Мой профиль</NavLink></li>
      </ul>
   
      <div className="balans">
        <RoleBasedRender requiredRoles={ ['Клиент'] } >
          <div>
            <span>Баланс 532 ₽ </span>
            <button className="primary-button" type="button">Пополнить</button>
            <button className='secondary-button'>Снять</button>
          </div>
        </RoleBasedRender>
        <ul>
          <li className="logo">
            <Link className="link" to=''>mail@mail.mail <span className="caret"></span></Link>
            <div>
              <ul>
                <li><Link className="link" to="/profile">Выйти из системы</Link></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
