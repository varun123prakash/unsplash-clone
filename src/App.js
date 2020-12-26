import React,{useState} from 'react';
import './App.css';

function App() {
  const [value,setValue]=useState("")
  const [results,setResult]=useState([])
  const fetchImage=()=>{
    fetch(`https://api.unsplash.com/search/photos?client_id=ex47XCdQW0Gm8dASTwX-ljkfwVhDSaW-xlQ3_2_5qDI&query=${value}`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      setResult(data.results)
    })
  }
  return (
  
    <div className="App">
      <div className="mydiv">
        <span>search</span>
        <input style={{width:"60%"}} type="text" value={value} onChange={(e)=>{setValue(e.target.value)}}></input>
        <button onClick={()=>fetchImage()}>send</button>
      </div>
      <div className="gallery">
        {
          results.map((item)=>{
            return <img className="item" key={item.id} src={item.urls.regular} />
          })
        }
      </div>
    </div>
  );
}

export default App;
