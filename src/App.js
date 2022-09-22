import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then(response => response.json())
    .then((json)=> 
      setCoins(json));
      setLoading(false);
  }, []);

  return (
    <div className="App">
      {/* <h1>The Coins! ({coins.length})</h1> */}
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
      <strong>loading...</strong>
      ) : (
      <select>
      {coins.map((item)=>(
        <option>
           {item.name}
          ({item.symbol}:
          ${Math.round(item.quotes.USD.price)}USD)
        </option>
      ))}
      </select>
      )}
     
      <ul>
        {coins.map((item)=>(
        <li key={item.id}>
          {item.name}
          ({item.symbol}:
          ${Math.round(item.quotes.USD.price)}USD)
          </li>)
          )}
      </ul>
    </div>
  );
}

export default App;
