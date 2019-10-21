import React from 'react';
import { formatDate } from '../../../utils';
import './TransactionsTableClient.scss';

function TransactionsTableClient({ transactions, onRowClick }) {
  const columns = [
    { title: 'Дата' },
    { title: 'Контрагент' },
    { title: 'Дебет ₽' },
    { title: 'Кредит ₽' },
    { title: 'Остаток по счёту ₽' },
    { title: 'Статус' }
  ];

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
            const isCredit = transaction.credit !== null
            return (
              <tr className={ isFinished ? 'clickable' : '' } key={ index }>
                <td onClick={ isFinished ? onRowClick : undefined }>{ formatDate(transaction.date) }</td>
                <td onClick={ isFinished ? onRowClick : undefined}>{ transaction.contragent }</td>
                <td className={ `${ !isCredit && 'green' } ${ !isFinished && 'grey' }` } onClick={ isFinished ? onRowClick : undefined }>{ transaction.debit === null ? '—' : transaction.debit.toLocaleString() }</td>
                <td className={ `${ isCredit && 'red' } ${ !isFinished && 'grey' }`} onClick={ isFinished ? onRowClick : undefined }>{ transaction.credit === null ? '—' : transaction.credit.toLocaleString() }</td>
                <td className={ `${ !isFinished && 'grey' }` } onClick={ isFinished ? onRowClick : undefined }>{ transaction.balance === null ? '—' : transaction.balance.toLocaleString() }</td>
                <td className={ `${ isFinished ? 'green' : 'grey' }` } onClick={ isFinished ? onRowClick : undefined }>{ transaction.status }</td>
              </tr>);
        })}
      </tbody>
    </table>
  );
}

export default TransactionsTableClient;
