import React, {useRef} from 'react';
import AddressesTable from './AddressesTable/AddressesTable';
import AddAddressModal from "../modals/AddAddress/AddAddressModal";
import WithdrawMoneyModal from "../modals/WithdrawModey/WithdrawMoneyModal";


const mockAddresses = [
  { address: '0xF76d0e464B59EfEa4861dEb2ca57aEabF2d6B756', addedAt: new Date().toISOString(), user: { name: 'Никаев Филимон Евлампиевич', mail: 'example@mail.com', role: 'Админ'} },
  { address: '0xF76d0e464B59EfEa4861dEb2ca57aEabF2d6B756', addedAt: new Date().toISOString(), user: { name: 'Никаев Филимон Евлампиевич', mail: 'example@mail.com', role: 'Админ'} },
  { address: '0xF76d0e464B59EfEa4861dEb2ca57aEabF2d6B756', addedAt: new Date().toISOString(), user: { name: 'Никаев Филимон Евлампиевич', mail: 'example@mail.com', role: 'Админ'} },
  { address: '0xF76d0e464B59EfEa4861dEb2ca57aEabF2d6B756', addedAt: new Date().toISOString(), user: { name: 'Никаев Филимон Евлампиевич', mail: 'example@mail.com', role: 'Админ'} },
  { address: '0xF76d0e464B59EfEa4861dEb2ca57aEabF2d6B756', addedAt: new Date().toISOString(), user: { name: 'Никаев Филимон Евлампиевич', mail: 'example@mail.com', role: 'Админ'} },
];

function AddressesPage() {

  const handleDelete = event => console.log('Clicked delete');
  // const childRef = useRef();

  return (
    <div className="page-content addresses-page">
      <h1>Адреса</h1>
      <p className="regular-text">Чтобы добавить пользователю адрес, нужно сперва занести этот адрес в таблицу ниже (переписать)</p>
      <button className="primary-button" type="button" >Добавить</button>
      <AddressesTable
        addresses={ mockAddresses }
        onDelete={ handleDelete }
      />
      {/* <AddAddressModal ref={childRef}/> */}
      {/* TODO integrate properly this modal. For now it's here just for test*/}
      {/*<WithdrawMoneyModal ref={childRef}/>*/}
    </div>
  );
}

export default AddressesPage;
