import React, { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('')
  const [type, setType] = useState('isPrime')

  const validateInput = (value) => {
    if (/^0\d+$/.test(value)) return
    if (/^-?\d*\.?\d*$/.test(value)) {
      setInput(value)
    }
    if (value === '') {
      setInput(value)
    }
  }

  const setValue = () => {
    if (input === '') return
    if (parseFloat(input) < 0) {
      setInput(1)
      return
    }
    setInput(Math.round(parseFloat(input)))
  }

  const isPrime = (value) => {
    if (value < 2) return 'false'
    for (let i = 2; i < value - 1; i++) {
      if (value % i === 0) return 'false'
    }
    return 'true'
  }

  const IsFibanacci = (value) => {
    let first = 0
    let second = 1
    if (value === 0) return 'true'
    while (first + second <= value) {
      if (first + second === value) {
        return 'true'
      }
      let oldSecond = second
      second = first + oldSecond
      first = oldSecond
    }
    return 'false'
  }

  return (
    <div className="page">
      <div className="left-col">
        <input
          id="number-input"
          type="text"
          value={input}
          onChange={(e) => validateInput(e.target.value)}
          onBlur={setValue}
        />
      </div>
      <div className="center-col">
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="isPrime">isPrime</option>
          <option value="IsFibanacci">IsFibanacci</option>
        </select>
      </div>
      <div className="right-col">
        {type === 'isPrime' ? isPrime(input) : IsFibanacci(input)}
      </div>
    </div>
  )
}

export default App
