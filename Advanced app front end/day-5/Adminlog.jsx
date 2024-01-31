
import './Adminlog.css'
import {Link} from 'react-router-dom'


function AdminLog() {
  return (
    <div >
      <img className='bgimgad'></img>
       
        <form className='adminforrr' > 
            <h3><b>Login Here</b></h3>
            

            <label className='loginl11'>Username</label>
            <input className='admininp' type="text" placeholder="Enter your Username" id="username" required/>
            <br></br>

            <label className='loginl11'>Password</label>
            <input type="password" placeholder="Enter your Password" id="password" required/>
            <br></br>

            <center><button className='adminbutt'><Link to={"/Appliedstatus"}> Login</Link></button></center>
            <br></br>
           {/* <center> <p>Create an account !  Sign up</p></center> */}
           
        </form>
    </div>
  )
}

export default AdminLog