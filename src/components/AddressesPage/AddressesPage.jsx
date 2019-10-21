import React, {useRef} from 'react';
import AddressesTable from './AddressesTable/AddressesTable';
import AddAddressModal from "../modals/AddAddress/AddAddressModal";

const mockAddresses = [
  { address: '0xF76d0e464B59EfEa4861dEb2ca57aEabF2d6B756', addedAt: new Date().toISOString(), user: { name: 'Никаев Филимон Евлампиевич', mail: 'example@mail.com', role: 'Админ'} },
  { address: '0xF76d0e464B59EfEa4861dEb2ca57aEabF2d6B756', addedAt: new Date().toISOString(), user: { name: 'Никаев Филимон Евлампиевич', mail: 'example@mail.com', role: 'Админ'} },
  { address: '0xF76d0e464B59EfEa4861dEb2ca57aEabF2d6B756', addedAt: new Date().toISOString(), user: { name: 'Никаев Филимон Евлампиевич', mail: 'example@mail.com', role: 'Админ'} },
  { address: '0xF76d0e464B59EfEa4861dEb2ca57aEabF2d6B756', addedAt: new Date().toISOString(), user: { name: 'Никаев Филимон Евлампиевич', mail: 'example@mail.com', role: 'Админ'} },
  { address: '0xF76d0e464B59EfEa4861dEb2ca57aEabF2d6B756', addedAt: new Date().toISOString(), user: { name: 'Никаев Филимон Евлампиевич', mail: 'example@mail.com', role: 'Админ'} },
];

function AddressesPage() {

  const handleDelete = event => console.log('Clicked delete');
  const childRef = useRef();

  return (
    <div className="page-content addresses-page">
      <h1>Адреса</h1>
      <p className="regular-text">Чтобы добавить пользователю адрес, нужно сперва занести этот адрес в таблицу ниже (переписать)</p>
      <button className="primary-button" type="button" onClick={() => childRef.current.showModal()}>Добавить</button>
      <AddressesTable
        addresses={ mockAddresses }
        onDelete={ handleDelete }
      />
      <AddAddressModal ref={childRef}/>
    </div>
  );
}

export default AddressesPage;
