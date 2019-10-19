import React from 'react';
import UsersTable from '../UsersTable/UsersTable';

const mockUsers = [
  { name: 'Никаев Фимилион Евлампиевич', address: 'jdshgkjsdhg039g23u0g9u209gu23', mail: 'example@mail.com', role: 'Администратор', lastSeen: new Date().toISOString() },
  { name: 'Никаев Фимилион Евлампиевич', address: 'jdshgkjsdhg039g23u0g9u209gu23', mail: 'example@mail.com', role: 'Администратор', lastSeen: new Date().toISOString() },
  { name: 'Никаев Фимилион Евлампиевич', address: 'jdshgkjsdhg039g23u0g9u209gu23', mail: 'example@mail.com', role: 'Администратор', lastSeen: new Date().toISOString() },
  { name: 'Никаев Фимилион Евлампиевич', address: 'jdshgkjsdhg039g23u0g9u209gu23', mail: 'example@mail.com', role: 'Администратор', lastSeen: new Date().toISOString() },
  { name: 'Никаев Фимилион Евлампиевич', address: 'jdshgkjsdhg039g23u0g9u209gu23', mail: 'example@mail.com', role: 'Администратор', lastSeen: new Date().toISOString() },
  { name: 'Никаев Фимилион Евлампиевич', address: 'jdshgkjsdhg039g23u0g9u209gu23', mail: 'example@mail.com', role: 'Администратор', lastSeen: new Date().toISOString() },
];

function UsersPage({ history, match }) {
  const handleRowClick = event => history.push(`${ match.path }/1`);

  return (
    <div className="page-content">
      <h1>Пользователи</h1>

      <button className="primary-button" type="button">Добавить пользователя</button>
      
      <UsersTable 
        users={ mockUsers } 
        onRowClick={ handleRowClick } 
        onDelete={ () => console.log('Clicked delete') }
      />
    </div>
  );
}

export default UsersPage;
