
import './Adminnav.css'
import { Link } from 'react-router-dom'
function Adminnav() {
  return (
    <div className='comnavv'>
    <header className="headernav">
   <h1 className="logo"><a className='namenav'>AgrofundX</a></h1>
   <ul className="main-nav">
       <li><a className='nava'><Link to={"/Appliedstatus"}>Applied loans</Link></a></li>
       <li><a  className='nava' ><Link to={"/Loandetails"}> Loan details</Link></a></li>
       {/* <li><a  className='nava' ><Link to={"/Status"}> Status</Link></a></li> */}

       {/* <li><a className='nava' href="#"><Link to={"/Contact"}>Contact</Link></a></li> */}
       <li><a  className='nava' ><Link to={"/"}> Log Out</Link></a></li>
   </ul>
</header> 
</div>
  )
}

export default Adminnav