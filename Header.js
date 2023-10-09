import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../Store/auth-context';
const Header = () => {
  const authCtx=useContext(AuthContext);
  const isLoggedIn=authCtx.isLoggedIn;
  console.log(isLoggedIn);
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{background:'grey',fontStyle:'italic',fontWeight:'bold'}}>
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      {!isLoggedIn && <li className="nav-item active">
        <Link to='/Login' className="nav-link" href="#">Login <span className="sr-only">(current)</span></Link>
      </li>
      }
      {isLoggedIn &&  <li className="nav-item">
        <Link to='/Profile' className="nav-link" href="#">Profile</Link>
      </li>}
     
     {isLoggedIn && <li className="nav-item">
        <a className="nav-link disabled" href="#">Logout</a>
      </li>}
      
    </ul>
   
  </div>
</nav>
  )
}

export default Header
