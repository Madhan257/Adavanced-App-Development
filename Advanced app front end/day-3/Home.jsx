import { useEffect, useState } from 'react';
import axios from 'axios';
import Comnav from './Comnav';
import logo from '../assets/Purple Home Loan Finance YouTube Thumbnail.jpg';
import './Home.css'

const Home = () => {
  const [ setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('YOUR_API_ENDPOINT');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, [setData]);

  return (
    <div>
      <body className='navvbod'>
        <Comnav />
        <img className="img1" src={logo} alt="Logo" />
      </body>
    </div>
  );
};

export default Home;
