import { Link } from 'react-router-dom'
import './login.scss'

const Login = () => {
  return (
    <div className='login'>
      <div className="card">
      <div className="left">
        <h1>Welcome Friend.</h1>
        <p>Mükemmel bir sosyal medya deneyimi seni bekliyor.Hemen kayıt ol ve aramıza katıl</p>
        <span>Don't you have account?</span>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
      <div className="right">
        <h1>Login</h1>
        <form action="">
          <input type="text" placeholder='Username' />
          <input type="password" placeholder='Password' />
          <button>Login</button>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Login
