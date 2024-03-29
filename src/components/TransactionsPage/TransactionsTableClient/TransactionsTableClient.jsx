import React, { useState } from 'react';
import { formatDate } from '../../../utils';
import './TransactionsTableClient.scss';

function TransactionsTableClient({ transactions, onRowClick }) {
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);

  const columns = [
    { title: 'Дата' },
    { title: 'Контрагент' },
    { title: 'Дебет ₽' },
    { title: 'Кредит ₽' },
    { title: 'Остаток по счёту ₽' },
    { title: 'Статус' }
  ];

  const handleRowClick = event => {
    setSelectedRowIndex(event.target.id);
    if (onRowClick) {
      onRowClick();
    }
  };

  return (
    <table className="table">
      <thead>
        <tr>
          { columns.map(column => <th key={ column.title }>{ column.title }</th>) }
        </tr>
      </thead>
      <tbody>
        { transactions.map((transaction,index) => {
            const isFinished = transaction.status === 'Выполнено';
            const isCredit = transaction.credit !== null;
            const onClick = isFinished ? handleRowClick : undefined;
            return (
              <tr className={ `${ isFinished ? 'clickable' : '' } ${ (isFinished && (index === parseInt(selectedRowIndex))) ? 'selected' : '' }`} onClick={ isFinished ? onClick : undefined } key={ index } >
                <td id={ index }>{ formatDate(transaction.date) }</td>
                <td id={ index }>{ transaction.contragent }</td>
                <td id={ index } className={ `${ !isCredit && 'green' } ${ !isFinished && 'grey' }` } >{ transaction.debit === null ? '—' : transaction.debit.toLocaleString() }</td>
                <td id={ index } className={ `${ isCredit && 'red' } ${ !isFinished && 'grey' }`} >{ transaction.credit === null ? '—' : transaction.credit.toLocaleString() }</td>
                <td id={ index } className={ `${ !isFinished && 'grey' }` } >{ transaction.balance === null ? '—' : transaction.balance.toLocaleString() }</td>
                <td id={ index } className={ `${ isFinished ? 'green' : 'grey' }` } >{ transaction.status }</td>
              </tr>);
        })}
      </tbody>
    </table>
  );
}

export default TransactionsTableClient;
