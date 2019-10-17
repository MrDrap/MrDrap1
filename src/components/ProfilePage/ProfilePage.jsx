import React from 'react';
import './ProfilePage.scss'
import { Container } from 'react-bootstrap';

function ProfilePage() {
  return (
    <div className='page-content'>
      <h1>Профиль пользователя</h1>
      <div className='app-input-group'>
        <div className='app-input'>
          <label>Роль</label>
          <input value='Сделать тут дропдаун'/>
        </div>
        <div className='app-input wide-input'>
          <label>Фамилия, имя, отчество</label>
          <input value='Никаев Филимон Евлампиевич'/>
        </div>
        <div className='app-input wide-input'>
          <label>Блокчейновый адрес</label>
          <input value='Эту штуку с дропдауном и поиском я тоже еще не делал'/>
          <button className='secondary-button small-button'>Посмотреть на Эзерскане</button>
        </div>
        <div className='app-input medium-input'>
          <label>Электронная почта</label>
          <input value='mfburgo@outlook.com'/>
        </div>
        <div className='app-input small-input'>
          <label>Пароль</label>
          <input type='password' value='12345678'/>
        </div>
        <div className='app-input'>
          <label>Часовой пояс</label>
          <input value='тут должен быть дропдаун'/>
        </div>
      </div>

      <h2>Платёжные реквизиты</h2>
      <div className='app-input-group'>
        <div className='app-input wide-input'>
          <label>Наименование плательщика</label>
          <input value='ОАО «Сетевая компания»'/>
        </div>
        <div className='app-input medium-input'>
          <label>Расчётный счёт</label>
          <input value='40702810500000000072'/>
        </div>
        <div className='app-input wide-input'>
          <label>Наименование банка</label>
          <input value='ООО Банк «Аверс»'/>
        </div>
        <div className='app-input tiny-input'>
          <label>БИК</label>
          <input value='049205774'/>
        </div>
        <div className='app-input small-input'>
          <label>Корреспондентский счет</label>
          <input value='30101810500000000774'/>
        </div>
        <div className='app-input tiny-input'>
          <label>ИНН</label>
          <input value='1653003601'/>
        </div>
        <div className='app-input tiny-input'>
          <label>КПП</label>
          <input value='165501001'/>
        </div>
      </div>
      <div className='app-button-group'>
        <button className='primary-button'>Сохранить изменения</button>
        <button className='secondary-button'>Отменить</button>
      </div>
    </div>
  );
}

export default ProfilePage;
