import React from 'react';
import AddressesTable from './AddressesTable/AddressesTable';


const mockAddresses = [
  { address: '0xF76d0e464B59EfEa4861dEb2ca57aEabF2d6B756', addedAt: new Date().toISOString(), user: { name: 'Никаев Филимон Евлампиевич', mail: 'example@mail.com', role: 'Админ'} },
  { address: '0xF76d0e464B59EfEa4861dEb2ca57aEabF2d6B756', addedAt: new Date().toISOString(), user: { name: 'Никаев Филимон Евлампиевич', mail: 'example@mail.com', role: 'Админ'} },
  { address: '0xF76d0e464B59EfEa4861dEb2ca57aEabF2d6B756', addedAt: new Date().toISOString(), user: { name: 'Никаев Филимон Евлампиевич', mail: 'example@mail.com', role: 'Админ'} },
  { address: '0xF76d0e464B59EfEa4861dEb2ca57aEabF2d6B756', addedAt: new Date().toISOString(), user: { name: 'Никаев Филимон Евлампиевич', mail: 'example@mail.com', role: 'Админ'} },
  { address: '0xF76d0e464B59EfEa4861dEb2ca57aEabF2d6B756', addedAt: new Date().toISOString(), user: { name: 'Никаев Филимон Евлампиевич', mail: 'example@mail.com', role: 'Админ'} },
];

function AddressesPage() {

  const handleDelete = event => console.log('Clicked delete');

  return (
    <div className="page-content">
      <h1>Адреса</h1>
      <p className="regular-text">Чтобы добавить пользователю адрес, нужно сперва занести этот адрес в таблицу ниже (переписать)</p>
      <button className="primary-button" type="button">Добавить</button>
      <AddressesTable
        addresses={ mockAddresses }
        onDelete={ handleDelete }
      />
    </div>
  );
}

export default AddressesPage;