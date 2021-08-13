import { useState } from 'react'

export default function Counter({ value }) {
  const [counter, setCounter] = useState(value)
  return (
    <div>
      <button data-testid="minus-button" onClick={() => setCounter(counter - 1)}>
        -
      </button>
      <div data-testid="value">{counter}</div>
      <Button testId="plus-button" onClick={() => setCounter(counter + 1)} text="+" />
      <span>To use the counter hahah</span>
    </div>
  )
}

export function isOlder(age) {
  return age >= 18
}

export function Button({ testId, text, onClick }) {
  return (
    <button data-testid={testId} onClick={onClick}>
      {text}
    </button>
  )
}
