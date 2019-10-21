import React from 'react';
import TransactionsTable from './TransactionsTable/TransactionsTable';
import { Dropdown } from 'semantic-ui-react';
import './TransactionsPage.scss';

const mockTransactions = [
  { date: new Date().toISOString(), sender: 'Житкова Любава Евстигнеевна', reciever: 'Сбытовая компания, Сетевая бла бла бла бла', amount: 4000, status: 'Выполнено' },
  { date: new Date().toISOString(), sender: 'Житкова Любава Евстигнеевна', reciever: 'Сбытовая компания, Сетевая бла бла бла бла', amount: 4000, status: 'Выполнено' },
  { date: new Date().toISOString(), sender: 'Житкова Любава Евстигнеевна', reciever: 'Сбытовая компания, Сетевая бла бла бла бла', amount: 4000, status: 'Выполнено' },
  { date: new Date().toISOString(), sender: 'Житкова Любава Евстигнеевна', reciever: 'Сбытовая компания, Сетевая бла бла бла бла', amount: 4000, status: 'Выполнено' },
  { date: new Date().toISOString(), sender: 'Житкова Любава Евстигнеевна', reciever: 'Сбытовая компания, Сетевая бла бла бла бла', amount: 4000, status: 'Выполнено' },
  { date: new Date().toISOString(), sender: 'Житкова Любава Евстигнеевна', reciever: 'Сбытовая компания, Сетевая бла бла бла бла', amount: 4000, status: 'Выполнено' },
  { date: new Date().toISOString(), sender: 'Житкова Любава Евстигнеевна', reciever: 'Сбытовая компания, Сетевая бла бла бла бла', amount: 4000, status: 'Выполнено' },
];

const dateFilterOptions = [
  {
    key: '1 января 2019 - 1 сентября 2019',
    text: '1 января 2019 - 1 сентября 2019',
    value: '1 января 2019 - 1 сентября 2019',
  },
  {
    key: '1 сентября 2019 - 1 октября 2019',
    text: '1 сентября 2019 - 1 октября 2019',
    value: '1 сентября 2019 - 1 октября 2019',
  },
];

function TransactionsPage() {
  const handleRowClick = event => console.log('Clicked on row');
  const handleShowAll = event => console.log('Clicked show all');

  return (
    <div className="page-content">
      <h1>Транзакции</h1>
      <div className='flex-row'>
        <Dropdown
          defaultValue='1 января 2019 - 1 сентября 2019'
          fluid
          className="app-dropdown-button date-range-selector"
          selection
          options={ dateFilterOptions }
        />
        <button className="secondary-button borderless show-all-button" onClick={ handleShowAll }>Показать за всё время</button>
      </div>
      
      <TransactionsTable
        transactions={ mockTransactions }
        onRowClick={ handleRowClick }
      />
    </div>
  );
}

export default TransactionsPage;