import React from 'react';
import { render } from 'vitest';
import UserCard from '../src/components/UserCard.jsx';
import { test } from 'vitest'; // 
import App from '../src/App.jsx';

test('renders user card with name and image', () => {
    window.HTMLElement.prototype.scrollIntoView = () => {};
    render(<App />);
 render(<UserCard></UserCard>)

    const user = {
        name: 'RC Student',
        imgUser: 'https://example.com/user.jpg'
    };

    const { getByText, getByAltText } = render(<UserCard name={user.name} imgUser={user.imgUser} />);

    expect(getByText(`Welcome, ${user.name}!`)).toBeInTheDocument(); // Use toBeInTheDocument() for text elements
    expect(getByAltText('RC Student')).toBeInTheDocument(); // Use toBeInTheDocument() for image elements
});
