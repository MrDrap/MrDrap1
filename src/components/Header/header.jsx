import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import './header.scss'
import RoleBasedRender from '../RoleBasedRender/RoleBasedRender';
import { Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { setUserRole } from '../../store/user/actions';

const ROLE_OPTIONS = [
  {
    key: 'Клиент',
    text: 'Клиент',
    value: 'Клиент',
  },
  {
    key: 'Администратор',
    text: 'Администратор',
    value: 'Администратор',
  },
  {
    key: 'Менеджер',
    text: 'Менеджер',
    value: 'Менеджер',
  },
  {
    key: 'Наблюдатель',
    text: 'Наблюдатель',
    value: 'Наблюдатель',
  }
];

function Header({ userRole, setUserRole }) {
  const handleRoleChange = (event, data) => setUserRole(data.value);

  return (
    <>
      <Dropdown
          value={ userRole }
          fluid
          className="small-input app-dropdown-button"
          selection
          onChange={ handleRoleChange }
          options={ROLE_OPTIONS}
      />
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
    </>
  );
}

const mapStateToProps = state => ({
  userRole: state.user.role
});

const mapDispatchToProps= {
  setUserRole
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
