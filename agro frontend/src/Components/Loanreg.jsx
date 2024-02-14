
import { Link } from 'react-router-dom'
import './Loanreg.css'
import Comnav from './Comnav'

function Loanreg() {
  return (
    <div>
       <div className='loannavv'><Comnav/></div>
       <body><div className='services-container'> 
      
    <div className='academy'>
     <main>
    <div className="about-me">
      <div className='event1'><img src="https://img.freepik.com/free-photo/tractor-field-ai-generated-image_268835-6450.jpg?t=st=1706292829~exp=1706296429~hmac=e34568904fa38810b992d7b75551c7421a8b195e7247ea43d62f70b432b0983a&w=1800" alt="me"></img>
      <p className='para'>Tractor loan</p>
     <Link to='/Apply'> <button className='button-33'>APPLY</button></Link></div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div className='event2'><img src="https://img.freepik.com/free-photo/plant-growing-soil-with-sun-shining-it_1340-38891.jpg?size=626&ext=jpg&ga=GA1.1.627563915.1683457253&semt=ais_ai_generated" alt="me"></img>
      <p className='para'>Cultivation loan</p>
      <button className='button-33'>APPLY</button>
      </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div className='event3'><img src="https://img.freepik.com/free-photo/young-farmers-are-collecting-orange_1150-5724.jpg?size=626&ext=jpg&ga=GA1.1.1077928150.1688812687&semt=ais" alt="me"></img><p className='para'>Agri buisness loan</p><button className='button-33'>APPLY</button></div>
    </div>
    <div className="about-me1">
      <div className='event4'><img src="https://img.freepik.com/free-photo/back-view-farmer-watering-plants_23-2148573813.jpg?size=626&ext=jpg&ga=GA1.1.1077928150.1688812687&semt=ais" alt="me"></img><p className='para'>Pesticides loan </p><button className='button-31'>APPLY</button></div>&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div className='event5'><img src="https://img.freepik.com/free-photo/front-view-two-stacks-coins-grass-with-jar-plants_23-2148803920.jpg?size=626&ext=jpg&ga=GA1.1.1077928150.1688812687&semt=ais" alt="me"></img><p className='para'>Gold loan</p><button className='button-31'>APPLY</button>
      </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div className='event6'><img src="https://img.freepik.com/free-photo/beautiful-landscape-with-hills_23-2149721827.jpg?size=626&ext=jpg&ga=GA1.1.1077928150.1688812687&semt=ais" alt="me"></img><p className='para'>Land loan</p><button className='button-31'>APPLY</button></div>
    </div>
  </main>
  </div>
  
    </div>
    </body>
    </div>
  )
}

export default Loanreg