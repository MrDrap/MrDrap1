import React from 'react';
import Table from '../../Table/Table';
import { formatDate } from '../../../utils';



function TransactionsTable({ transactions, onRowClick }) {
  const columns = [
    { title: 'Дата', format: date => formatDate(date) },
    { title: 'Отправитель' },
    { title: 'Получатель' , styles: { maxWidth: '220px' }},
    { title: 'Сумма' },
    { title: 'Статус' }
    
  ];

  return (
    <Table 
      columns={ columns } 
      data={ transactions } 
      onRowClick={ onRowClick }
    />
  );
}

export default TransactionsTable;