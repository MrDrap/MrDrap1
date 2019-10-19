import React from 'react';
import Table from '../Table/Table';
import { formatDate } from '../../utils';

function UsersTable({ users, onRowClick, onDelete }) {
  const columns = [
    { title: 'Имя' },
    { title: 'Адрес', format: address => `${ address.substring(0,7) }...${ address.slice(address.length - 5) }`},
    { title: 'Почта' },
    { title: 'Роль' },
    { title: 'Последний вход', format: date => formatDate(date) },
  ];

  const actions = [
    { className: 'secondary-button', onClick: onDelete, text: 'Удалить' },
  ];

  return (
    <Table 
      columns={ columns } 
      data={ users } 
      onRowClick={ onRowClick } 
      actions={ actions } 
    />
  );
}

export default UsersTable;
