import React from 'react';
import Table from '../../Table/Table';
import { formatDate } from '../../../utils';


function AddressesTable({ addresses, onDelete }) {
  const columns = [
    { title: 'Адрес' },
    { title: 'Дата добавления', format: date => formatDate(date) },
    { 
      title: 'Привязанный пользователь', 
      subColumns: [
        { title:'Имя', accessor: value => value.name }, 
        { title:'Почта', accessor: value => value.mail }, 
        { title:'Роль', accessor: value => value.role }
      ] 
    },
  ];

  const actions = [
    <button className={ 'secondary-button hidden' } onClick={ onDelete }>Удалить</button>
  ];

  return (
    <Table 
      columns={ columns } 
      data={ addresses } 
      actions={ actions } 
    />
  );
}

export default AddressesTable;