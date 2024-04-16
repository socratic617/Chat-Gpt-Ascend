
# ResilientGPT

## Project Overview and Summary
ResilientGPT is a project designed for students entering the Resilient Coder bootcamp with the aim of becoming full-stack engineers. The project focuses on creating a frontend AI chatbot.


ResilentGPT aims to build a strong frontend AI chatbot by employing robust components, designing a user-friendly interface, ensuring reliability through unit tests, and offering comprehensive documentation.

[View Hosted App here](https://resilient-coders-chatbot.netlify.app)

## Usage

To use ResilientGPT, follow these steps:

1. Clone the repository.
2. Install dependencies (`npm install`).
3. Run the development (`npm run dev`).
4. Open the application in your browser.

## Figma Design
![Figma-Chatbot_RC](https://github.com/socratic617/Chat-Gpt-Ascend/assets/144078314/d9955027-b61d-4ee0-bbbe-aee365a151b2)

## Design Choices

- NextUI, Tailwind, and custom CSS for styling.

## Tech Stack & Frameworks Used

- React
- JavaScript
- HTML
- CSS

## Unit Testing - Vitest
1. Open a seperate terminal, while running application
2. Run testing using (`npm test`)

### Test Libraries Used

- **@testing-library/react**: This library provides utilities for testing React components in a user-centric way.
- **vitest**: A testing library (possibly custom) that offers functions like `describe`, `it`, `expect`, and `beforeEach` for structuring and defining test cases.
  
Here's a code snippet for the App testing component:
  ```javascript
import { render, screen } from '@testing-library/react'
import { describe, it, beforeEach } from 'vitest'
import App from '../src/App.jsx'

// Before each test, mock the scrollIntoView method
beforeEach(async () => {
    window.HTMLElement.prototype.scrollIntoView = function() {};
})

// Describe and test the App component
describe('App', () => {
  it('renders the App component', () => {
    // Render the App component
    render(<App />)
    
    // Print the JSX structure to the command line for inspection
    screen.debug();
  })
})
```
### Test Logic:

- **Before Each Hook**:
  - Modifies the `scrollIntoView` method before each test.

- **Test Description**:
  - Groups tests for the App component.
  - Verifies that the App component renders correctly.

- **Component Rendering**:
  - Renders the App component.

- **Debugging Output**:
  - Prints the JSX structure for inspection.

Here's a code snippet for the UserCard testing component:

```javascript

import React from 'react';
import UserCard from '../src/components/UserCard.jsx';
import { test, expect } from 'vitest'; 

test('renders user card with name and image', () => {
    const user = {
        name: "Daniel Garcia",
        img: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    };

    const result = <UserCard name={user.name} img={user.img} />;
    expect(result).toMatchSnapshot();
});
```
The test case is defined using the `test` function from `vitest`. It ensures that the user card component renders correctly with the provided user data.

### Test Logic

**User Data Setup**:
- A user object is created with a name and an image url. This data represents the user whose information will be displayed on the user card component.

**Component Rendering**:
- The `UserCard` component is instantiated with the user data passed as props. The `name` and `img` properties from the user object are passed as props to the `UserCard` component.

**Snapshot Assertion**:
- The test verifies that the rendered output of the `UserCard` component matches the previously stored snapshot. This ensures that the component's rendering remains consistent over time.


Here's a code snippet for the ThemeSwitcher testing component:

### Test Logic:

```javascript
import { render, fireEvent, screen } from '@testing-library/react';
import { test, vi, expect } from 'vitest';
import ThemeSwitcher from '../src/components/ThemeSwitcher';

// Mock useDarkMode hook
const useDarkModeMock = (initialValue) => {
    let value = initialValue
    return {
        value: value,
        enable: vi.fn(() => (value = true)),
        disable: vi.fn(() => (value = false)),
    };
};

// console.log('useDarkModeMock', useDarkModeMock())

test('renders ThemeSwitcher component with light mode', () => {
    const darkModeMock = useDarkModeMock(false);
    // console.log('useDarkModeMock', darkModeMock)

    render(<ThemeSwitcher darkMode={darkModeMock} />);
    const sunIcon = screen.getByTestId('sunempty');
    const moonIcon = screen.getByTestId('moonempty');

    expect(sunIcon).toBeInTheDocument();
    expect(moonIcon).toBeInTheDocument();

    fireEvent.click(sunIcon);
    expect(darkModeMock.disable).toHaveBeenCalled();

    fireEvent.click(moonIcon);
    expect(darkModeMock.enable).toHaveBeenCalled();
});

test('renders ThemeSwitcher component with dark mode', () => {
    const darkModeMock = useDarkModeMock(true);
    console.log('useDarkModeMock111', darkModeMock)
    render(<ThemeSwitcher darkMode={darkModeMock} />);
    const sunIcon = screen.getByTestId('sunfilled');
    const moonIcon = screen.getByTestId('moonfilled');

    expect(sunIcon).toBeInTheDocument();
    expect(moonIcon).toBeInTheDocument();

    fireEvent.click(sunIcon);
    expect(darkModeMock.disable).toHaveBeenCalled();

    fireEvent.click(moonIcon);
    expect(darkModeMock.enable).toHaveBeenCalled();
});

```

- **Mocking the useDarkMode Hook**:
  - A mock function `useDarkModeMock` is created to simulate the behavior of the `useDarkMode` hook. It tracks the state of dark mode and provides functions to enable and disable it.

- **Test Case 1: Light Mode**:
  - Renders the `ThemeSwitcher` component with light mode.
  - Verifies that the sun and moon icons are present.
  - Simulates a click on the sun icon to disable dark mode and checks if the `disable` function of the mock hook is called.
  - Simulates a click on the moon icon to enable dark mode and checks if the `enable` function of the mock hook is called.

- **Test Case 2: Dark Mode**:
  - Renders the `ThemeSwitcher` component with dark mode.
  - Verifies that the sun and moon icons are present.
  - Simulates a click on the sun icon to disable dark mode and checks if the `disable` function of the mock hook is called.
  - Simulates a click on the moon icon to enable dark mode and checks if the `enable` function of the mock hook is called.


  


## Preview:
![ResilientGpt-Cover](https://github.com/socratic617/Chat-Gpt-Ascend/assets/144078314/b6b90bf5-f393-492c-910e-5f3dabc7ae59)

