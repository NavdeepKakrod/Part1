import { useState } from 'react'

const StatisticLine = (props) =>{
  const {text, value} = props;
  if(text === "Positive"){
    return(
      <tr>
        <td>{text}</td> <td>{value} %</td>
      </tr>
    )
  }
  return(
    <tr>
        <td>{text}</td> <td>{value}</td>
      </tr>
  )
}

const Statistics  = (props) =>{
  const {good, neutral, bad, average, positive} = props;
  return(
    <>
      <h1>Statistics </h1>
      <table>
        <StatisticLine text = "Good" value ={good}/>
      <StatisticLine text = "Neutral" value ={neutral}/>
      <StatisticLine text = "Bad" value ={bad}/>
      <StatisticLine text = "Average" value ={average}/>
      <StatisticLine text = "Positive" value ={positive}/>
      </table>
      
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
        <Button onClick={()=>{setGood(good+1)}} text ="good"/>
        <Button onClick={()=>{setNeutral(neutral+1)}} text ="neutral"/>
        <Button onClick={()=>{setBad(bad+1)}} text ="bad"/> 
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