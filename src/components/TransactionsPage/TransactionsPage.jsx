import React, {useRef} from 'react';
import TransactionsTable from './TransactionsTable/TransactionsTable';
import TransactionsTableClient from './TransactionsTableClient/TransactionsTableClient';
import { Dropdown } from 'semantic-ui-react';
import './TransactionsPage.scss';
import PaymentModal from "../modals/Payment/PaymentModal";
import TransactionsInfo from './TransactionsInfo/TransactionsInfo';
import { connect } from 'react-redux';

const mockTransactions = [
  { date: new Date().toISOString(), sender: 'Житкова Любава Евстигнеевна', reciever: 'Сбытовая компания, Сетевая бла бла бла бла', amount: 4000, status: 'Выполнено' },
  { date: new Date().toISOString(), sender: 'Житкова Любава Евстигнеевна', reciever: 'Сбытовая компания, Сетевая бла бла бла бла', amount: 4000, status: 'Выполнено' },
  { date: new Date().toISOString(), sender: 'Житкова Любава Евстигнеевна', reciever: 'Сбытовая компания, Сетевая бла бла бла бла', amount: 4000, status: 'Выполнено' },
  { date: new Date().toISOString(), sender: 'Житкова Любава Евстигнеевна', reciever: 'Сбытовая компания, Сетевая бла бла бла бла', amount: 4000, status: 'Выполнено' },
  { date: new Date().toISOString(), sender: 'Житкова Любава Евстигнеевна', reciever: 'Сбытовая компания, Сетевая бла бла бла бла', amount: 4000, status: 'Выполнено' },
  { date: new Date().toISOString(), sender: 'Житкова Любава Евстигнеевна', reciever: 'Сбытовая компания, Сетевая бла бла бла бла', amount: 4000, status: 'Выполнено' },
  { date: new Date().toISOString(), sender: 'Житкова Любава Евстигнеевна', reciever: 'Сбытовая компания, Сетевая бла бла бла бла', amount: 4000, status: 'Выполнено' },
];

const mockClientTransactions = [
  { date: new Date().toISOString(), contragent: 'Никаев Филимон Евлампиевич', debit: 10000, credit: null, balance: 123123, status: 'Выполнено' },
  { date: new Date().toISOString(), contragent: 'Никаев Филимон Евлампиевич', debit: null, credit: 1000, balance: 123123, status: 'Выполнено' },
  { date: new Date().toISOString(), contragent: 'Никаев Филимон Евлампиевич', debit: 10000, credit: null, balance: null, status: 'Выполняется' },
  { date: new Date().toISOString(), contragent: 'Никаев Филимон Евлампиевич', debit: null, credit: 1000, balance: 123123, status: 'Выполнено' },
  { date: new Date().toISOString(), contragent: 'Никаев Филимон Евлампиевич', debit: 10000, credit: null, balance: 123123, status: 'Выполнено' },
  { date: new Date().toISOString(), contragent: 'Никаев Филимон Евлампиевич', debit: null, credit: 1000, balance: 123123, status: 'Выполнено' },
  { date: new Date().toISOString(), contragent: 'Никаев Филимон Евлампиевич', debit: 10000, credit: null, balance: null, status: 'Выполняется' },
  { date: new Date().toISOString(), contragent: 'Никаев Филимон Евлампиевич', debit: null, credit: 1000, balance: 123123, status: 'Выполнено' },
  { date: new Date().toISOString(), contragent: 'Никаев Филимон Евлампиевич', debit: 10000, credit: null, balance: 123123, status: 'Выполнено' },
  { date: new Date().toISOString(), contragent: 'Никаев Филимон Евлампиевич', debit: 10000, credit: null, balance: null, status: 'Выполняется' },
  { date: new Date().toISOString(), contragent: 'Никаев Филимон Евлампиевич', debit: 10000, credit: null, balance: 123123, status: 'Выполнено' },
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
  
function TransactionsPage({ userRole }) {
  const childRef = useRef();
  const handleRowClick = event => { childRef.current.showModal(); };
  const handleShowAll = event => console.log('Clicked show all');

  return (
    <div className="page-content">
      <PaymentModal ref={childRef}/>
      <h1>Транзакции</h1>
      <div className='flex-row'>
        <Dropdown
          defaultValue='1 января 2019 - 1 сентября 2019'
          fluid
          className="app-dropdown-button date-range-selector"
          selection
          icon='chevron down'
          options={ dateFilterOptions }
        />
        <button className="secondary-button borderless show-all-button" onClick={ handleShowAll }>Показать за всё время</button>
      </div>

      { 
        userRole === 'Клиент'
          ? <>
              <TransactionsInfo /> 
              <TransactionsTableClient transactions={ mockClientTransactions } onRowClick={ handleRowClick } />
            </>
          : <TransactionsTable transactions={ mockTransactions } onRowClick={ handleRowClick }/>
      }
    </div>
  );
}

const mapStateToProps = state => ({
  userRole: state.user.role,
});

export default connect(mapStateToProps, null)(TransactionsPage);
