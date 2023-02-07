import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setListOfUsers(res.data))
  }, []);

  return (
    <ul style={{listStyleType: 'none', padding: 0}}>
      {listOfUsers.map(user => (
        <li key={user.id} style={{backgroundColor: 'lightgray', margin: '10px', padding: '10px'}}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;

