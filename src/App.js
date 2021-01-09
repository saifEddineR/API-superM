import './App.css';
import { useState, useEffect } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import axios from 'axios';
import Card from './components/Card';

function App() {
  const [listOfMembers, setListOfMembers] = useState({});
  //custom fake API
  //I wish the API works fine
  //not much css xD
  useEffect(() => {
    axios
      .get('https://run.mocky.io/v3/ce7294f2-700d-49e5-861e-4c8c36f3dee8')
      .then((res) => setListOfMembers(res.data.kpop));
  }, []);
  console.log(listOfMembers);
  return (
    <div className='App-header'>
      <div className='superM'>
        <AiFillHeart />
        <h3>SuperM</h3>
        <AiFillHeart />
      </div>
      <span className='card-list'>
        {listOfMembers.length > 1
          ? listOfMembers.map((member) => <Card key={member.id} {...member} />)
          : true}
      </span>
    </div>
  );
}

export default App;
