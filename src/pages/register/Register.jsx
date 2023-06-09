import { Link } from 'react-router-dom'
import './register.scss'

const Register = () => {
  return (
    <div className='register'>
      <div className="card">
      <div className="left">
        <h1>FeeL Social.</h1>
        <p>Mükemmel bir sosyal medya deneyimi seni bekliyor.Hemen kayıt ol ve aramıza katıl</p>
        <span>Do you have account?</span>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
      <div className="right">
        <h1>Register</h1>
        <form action="">
          <input type="text" placeholder='Username' />
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <input type="text" placeholder='Name' />
          <button>Register</button>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Register
