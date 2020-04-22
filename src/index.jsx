import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
    const good = props.good
    const neutral = props.neutral
    const bad = props.bad

    if (good || neutral || bad) {
        return (
            <table>
              <tbody>
                <Statistic text='good' value={good} />
                <Statistic text='neutral' value={neutral} />
                <Statistic text='bad' value={bad} />
                <Statistic text='all' value={good + neutral + bad} />
                <Statistic text='average' value={((1 * good) + (0 * neutral) + (-1 * bad)) / (good + neutral + bad)} />
                <Statistic text='positive' value={100 * (good / (good + neutral + bad)) + ' %'} />
              </tbody>
            </table>
        )
    }
    return <div>No feedback given</div>
}

const Statistic = (props) => {
    return (
        <tr id={props.text}>
          <td>{props.text}</td>
          <td>{props.value}</td>
        </tr>
    )
}

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>{props.text}</button>
    )
}

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
          <h1>give feedback</h1>
          <div>
            <Button handleClick={() => setGood(good+1)} text='good' />
            <Button handleClick={() => setNeutral(neutral+1)} text='neutral' />
            <Button handleClick={() => setBad(bad+1)} text='bad' />
          </div>
          <h1>statistics</h1>
          <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
