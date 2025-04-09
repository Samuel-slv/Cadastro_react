import './style.css'
import Trash from '../../assets/sinal.png'
function Home() {

  const users = [
  {
    id: 'djw399dkj30ske326904',
    name: 'Lucas Silva',
    email: 'lucassilva234@gmail.com',
    age: 23
  },

  {
    id: 'ljktu35456bnt73ngyt54221',
    name: 'Eduarda Mantins',
    email: 'eduarda77@gmail.com',
    age: 40
  }]

  return (
    <div className='container'>
      <form action="">
        <h1>cadastro de usuario</h1>
        <input type="text" name="name" id="" placeholder="entre com seu nome: " />
        <input type="email" name="email" id="" placeholder="entre com seu email: " />
        <input type="number" name="age" id="" />
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