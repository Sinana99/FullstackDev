import { useState } from 'react'

const feedbck = (number, func) => {
  func(number + 1) 
}

const Statistics = (props) => {
  if (props.good + props.bad + props.neutral == 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <table>
      <tbody>
      <StatisticsLine text="good" value={props.good}/>
      <StatisticsLine text="neutral" value={props.neutral}/>
      <StatisticsLine text="bad" value={props.bad}/> 
      <StatisticsLine text="all" value={props.bad+props.good+props.neutral}/>
      <StatisticsLine text="average" value={((props.good - props.bad) / (props.good + props.bad + props.neutral)).toFixed(2)}/>
      <StatisticsLine text="positive" value={`${(props.good / (props.neutral + props.bad + props.good) * 100).toFixed(2)} %`}/>
      </tbody>
    </table>
  )
}

const StatisticsLine = (props) => {
  return (
   <tr>
       <td scope ="row">{props.text}</td> 
       <td>{props.value}</td>
   </tr>
  )
}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => feedbck(good, setGood)}>good</button>
      <button onClick={() => feedbck(neutral, setNeutral)}>neutral</button>
      <button onClick={() => feedbck(bad, setBad)}>bad</button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />    
      
    
    </div>
  )
}

export default App
