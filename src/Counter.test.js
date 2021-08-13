import { render, screen, fireEvent } from '@testing-library/react'
import Counter, { isOlder } from './Counter'

test('renders prop value', () => {
  render(<Counter value={2} />)
  const element = screen.getByTestId('value')
  expect(element).toBeInTheDocument()
  expect(element.innerHTML).toMatch('2')
})

function testButtonClick(initialValue, buttonTestId, expectedValue) {
  render(<Counter value={initialValue} />)
  const buttonElement = screen.getByTestId(buttonTestId)
  const element = screen.getByTestId('value')
  fireEvent(
    buttonElement,
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    })
  )

  expect(element.innerHTML).toMatch(expectedValue)
}

test('increases rendered value when clicking on plus', () => {
  testButtonClick(10, 'plus-button', '11')
})

test('decreases rendered value when clicking on plus', () => {
  testButtonClick(73, 'minus-button', '72')
})

test('returns true when the age is equal or bigger than 18', () => {
  expect(isOlder(18)).toBeTruthy()
  expect(isOlder(19)).toBeTruthy()
})

test('returns false when the age is smaller than 18', () => {
  expect(isOlder(17)).toBeFalsy()
})
