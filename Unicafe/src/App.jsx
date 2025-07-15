import { useState } from 'react'

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0) 
  const total = good+neutral+bad;
  const average = (good-bad)/total;
  const positive = (good*100)/total;
  if(total === 0){
    return (
      <div>
        <h1>Give Feedback</h1>
        <button onClick={()=>{setGood(good+1)}}>Good</button>
        <button onClick={()=>{setNeutral(neutral+1)}}>Neutral</button>
        <button onClick={()=>{setBad(bad+1)}}>Bad</button>
 
      </div>
    )
  }
  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={()=>{setGood(good+1)}}>Good</button>
      <button onClick={()=>{setNeutral(neutral+1)}}>Neutral</button>
      <button onClick={()=>{setBad(bad+1)}}>Bad</button>

      <h1>Staistics</h1>
      
     <p>Good {good} <br/> Neutral {neutral} <br/> Bad {bad} <br/> Average {average} <br/> Positive {positive} %</p>
    
    </div>
  )
}

export default App