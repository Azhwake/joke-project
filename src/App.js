import TwoPart from "./TwoPart";
import SingleJoke from "./SingleJoke";
import { useState,useEffect } from "react";

function App() {
  const [joke,setjoke]= useState({});
  function getjoke () {
    fetch("https://v2.jokeapi.dev/joke/Programming")
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
      setjoke(data)
      console.log(data)
    })
  }
  useEffect(()=> {
    getjoke();
  }, []);
  return (
    <div className="app">
      <h2 className="heading">😂 Jokes! 😂</h2>
      {joke.type==="single"? <SingleJoke data={joke} /> : <TwoPart data={joke} />}

      <div className="buttons">
        <button className="another"onClick={getjoke}>Another Joke!😆</button>
      </div>
    </div>
  );
}

export default App;
