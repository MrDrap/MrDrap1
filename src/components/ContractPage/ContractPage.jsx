import React from 'react';
import './ContractPage.scss'

function ContractPage() {
  return (
    <div className="page-content">
      <h1>Контракт</h1>
      <div className="regular-text">Общий баланс пользователя</div>
      <div className="balance-value">5 134 312 &#8381;</div>
      <div className="app-input-group">
        <div className="app-input input-with-button">
          <label>Блокчейновый адрес</label>
          <div className="input-button-row">
            <input value="0xF76d0e464B59EfEa4861dEb2ca57aEabF2d6B756"/>
            <button className='secondary-button small-button'>Посмотреть на Эзерскане</button>
          </div>
          <div className="regular-text">Пояснительный текст: зачем нужен адрес, когда и на что его надо менять.</div>
        </div>

        <div className="app-input input-with-button">
          <label>Адрес чеканщика</label>
          <div className="input-button-row">
            <input value="0xF76d0e464B59EfEa4861dEb2ca57aEabF2d6B756"/>
            <button className='secondary-button small-button'>Посмотреть на Эзерскане</button>
          </div>
          <div className="regular-text">Пояснительный текст: зачем нужен адрес, когда и на что его надо менять.</div>
        </div>

        <div className="app-input input-with-button">
          <button className="warn-button">Приостановить работу системы</button>
          <div className="regular-text">Текущие транзакции будут завершены, но создание новых будет временно остановлено.</div>
        </div>
      </div>
    </div>
  );
}

export default ContractPage;
