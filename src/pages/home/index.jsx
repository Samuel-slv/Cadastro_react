import { useEffect } from 'react';
import './style.css';
import Trash from '../../assets/sinal.png';
import api from '../../services/api';





function Home() {

  let users = []

  async function getUsers() {
    users = await api.get('/users')
      
  }
  useEffect(() => {
    getUsers()
  }, [])
  console.log(users)


  return (
    <div className='container'>
      <form action="">
        <h1>cadastro de usuario</h1>
        <input type="text" name="name" id="" placeholder="entre com seu nome: " />
        <input type="email" name="email" id="" placeholder="entre com seu email: " />
        <input name="age" type="number" placeholder="Enter your age" />
        <button type=''>cadastrar </button>
      </form>

      {users.map((user) => (
        <div key={user.id}>

          <div>
            <p>Nome:<spam>{user.name}</spam></p>
            <p>Email:<span>{user.email}</span></p>
            <p>Age: <span>{user.age}</span></p>
          </div>
          <button type="button">
            <img src={Trash} />
          </button>
        </div>
      ))}
    </div>
  )
}

export default Home