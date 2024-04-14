import React from 'react';

import UserCard from '../src/components/UserCard.jsx';
import { test, expect } from 'vitest'; 
import App from '../src/App.jsx';

test('renders user card with name and image', () => {
    // window.HTMLElement.prototype.scrollIntoView = () => {};
    const result = <UserCard/>
     expect(result).toMatchSnapshot()

});
