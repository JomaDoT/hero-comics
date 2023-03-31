import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../context/UserContext";
import { useForm } from "../../hooks/useForm";

export const LoginPages = () => {

  const {user,setuser} = useContext(UserContext);
  const {username,onInputChange} = useForm({
    username: ''
  });
  const nav = useNavigate();
  const onLogin = (event)=>{
    event.preventDefault();
    
    if(username.length <= 1)
    {
       alert('write more than one letter');
       return
    }

    setuser(username);

    nav('/',{
      replace:true
    })
  }
  
  return (
    <>
    <div className="container">
    <div className="d-flex justify-content-center h-100">

      <div className="Logincard border-0">
      <h1>Login Pages</h1>
      <hr />

    <form onSubmit={onLogin} >


      <input
       className="form-control"
       type="text"
       placeholder="UserName"
       name="username"
       value={username}
       onChange={onInputChange} />

   <div className="text-center">
    <button
     type="submit"
     className="btn btn-outline-primary mt-5">
      Login
    </button>
    </div>

    </form>
    </div>
    </div>
    </div>
    </>
  )
}
