import { useState } from 'react';
import './App.css';
import UserForm from './components/NewUser/UserForm';
import Users from './components/Users/Users';

function App() {
  const listaUsuarios = [
    {
      id:'1',
      username:'Viego',
      age:'26'
    },
    {
      id:'2',
      username:'Ahri',
      age:'12'
    }
  ];

  const [userList, setUserList] = useState(listaUsuarios);

  //id: Math.floor(Math.random() * 100),

  const handleSavedData = (savedData) =>{
    setUserList( prevList => (
      [savedData,...prevList]
    ))
  }

  return (
    <div className="App">
      <section id='user-form'>
        <UserForm onSaveUserData={handleSavedData}/>
      </section>
      <section id='user-list'>
        <Users usuarios={userList}/>
      </section>
    </div>
  );
}

export default App;
