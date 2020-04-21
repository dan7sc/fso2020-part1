import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
    const good = props.good
    const neutral = props.neutral
    const bad = props.bad

    return (
        <div>
          <h1>statistics</h1>
          <div>
            <div>good {good}</div>
            <div>neutral {neutral}</div>
            <div>bad {bad}</div>
            <div>all {good + neutral + bad}</div>
            <div>average {((1 * good) + (0 * neutral) + (-1 * bad)) / (good + neutral + bad)}</div>
            <div>positive {100 * (good / (good + neutral + bad))} %</div>
          </div>
        </div>
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
            <button onClick={() => setGood(good+1)}>good</button>
            <button onClick={() => setNeutral(neutral+1)}>neutral</button>
            <button onClick={() => setBad(bad+1)}>bad</button>
          </div>
          <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
