import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react'
import Child from './Components/Child';
import Head from './Components/Head';

function App() {

  const [dataset, setdataset] = useState([]);
  const [coinsearched, setcoinsearched] = useState('');

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false')
    .then(res=>{
      setdataset(res.data);
      console.log(res.data);
    })
    .catch(err=>{
      console.log(err);
    })
  }, []);

  const filteredcoin = dataset.filter( a=> a.name.toLowerCase().includes(coinsearched.toLowerCase()))     // this concept is amazing

  return (
    <div className="App">
        <div className="searchbar">
          <form autoComplete="off">
            <i class=" magnifying fa-solid fa-magnifying-glass"></i>
            <input type="text" name="search" id="search" placeholder='Search a currency' onChange={e=>setcoinsearched(e.target.value)} />
          </form>
        </div>
        <div className="container">
        <Head/>
          {
            filteredcoin.map(a=>{
              return <Child key={a.id} coin = {a}/>
            })
          }
        </div>
    </div>
  );
}

export default App;
