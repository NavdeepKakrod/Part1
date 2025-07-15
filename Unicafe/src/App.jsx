import { useState } from 'react'

const StatisticLine = (props) =>{
  const {text, value} = props;
  if(text === "Positive"){
    return(
      <div>
        {text} {value} %
      </div>
    )
  }
  return(
    <div>
      {text} {value}
    </div>
  )
}

const Statistics  = (props) =>{
  const {good, neutral, bad, average, positive} = props;
  return(
    <>
      <h1>Statistics </h1>
      <StatisticLine text = "Good" value ={good}/>
      <StatisticLine text = "Neutral" value ={neutral}/>
      <StatisticLine text = "Bad" value ={bad}/>
      <StatisticLine text = "Average" value ={average}/>
      <StatisticLine text = "Positive" value ={positive}/>
    </>
  )
}

const Button = (props) => {
  const {onClick , text} = props;
  return(
    <button onClick={onClick} >{text}</button>
  )
}

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
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={()=>{setGood(good+1)}} text ="good"/>
      <Button onClick={()=>{setNeutral(neutral+1)}} text ="neutral"/>
      <Button onClick={()=>{setBad(bad+1)}} text ="bad"/> 

      <Statistics  good = {good} neutral = {neutral}  bad = {bad} average={average} positive = {positive} />
    </div>
  )
}

export default App