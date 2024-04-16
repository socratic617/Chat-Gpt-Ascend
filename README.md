
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

  


## Preview:
![ResilientGpt-Cover](https://github.com/socratic617/Chat-Gpt-Ascend/assets/144078314/b6b90bf5-f393-492c-910e-5f3dabc7ae59)

