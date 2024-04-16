import { render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import App from '../src/App.jsx'

beforeEach(async () => {
    window.HTMLElement.prototype.scrollIntoView = function() {};
  })


describe('App', () => {
  it('renders the App component', () => {
    render(<App />)
    
    screen.debug(); // prints out the jsx in the App component unto the command line
  })
})