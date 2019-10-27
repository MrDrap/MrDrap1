import React from 'react';
import Table from '../../Table/Table';
import { formatDate } from '../../../utils';



function TransactionsTable({ transactions, onRowClick }) {
  const columns = [
    { title: 'Дата', format: date => formatDate(date) },
    { title: 'Отправитель' },
    { title: 'Получатель' },
    { title: 'Сумма' },
    { title: 'Статус', styles: { style: { color: '#8AB65A' }, condition: value => value === 'Выполнена' } }
    
  ];

  return (
    <Table 
      columns={ columns } 
      data={ transactions } 
      onRowClick={ onRowClick }
      selectable
      clickableCondition={ item => item.status === 'Выполнена' }
    />
  );
}

export default TransactionsTable;