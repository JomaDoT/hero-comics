import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useForm } from '../../hooks/useForm';

export const LoginPage = () => {

  const { login } = useContext( AuthContext );
  const navigate = useNavigate();
  const {username,onInputChange} = useForm({
    username: ''
  });

  const onLogin = () => {
    
    if(username.length <= 1)
    {
       alert('write more than one letter');
       return
    }

    const lastPath = localStorage.getItem('lastPath') || '/marvel';

    login(username);
    
    navigate( lastPath, {
      replace: true
    });
  }

  return (
    <div className="container containerLogin mt-5">
       <div className="Logincard border-0">

      <h1>Login</h1>
      <hr />

      <input
       className="form-control"
       type="text"
       placeholder="UserName"
       name="username"
       value={username}
       onChange={onInputChange} />


      <button 
        className="btn btn-primary mt-2"
        onClick={ onLogin }
      >
        Login
      </button>

    </div>
    </div>
  )
}
