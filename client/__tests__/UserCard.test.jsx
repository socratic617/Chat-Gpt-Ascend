import React from 'react';

import UserCard from '../src/components/UserCard.jsx';
import { test, expect } from 'vitest'; 



test('renders user card with name and image', () => {


    const user = { //creating a user name with and img to be render on DOM when rending app
        name: "Daniel Garcia",
        img: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    };

    const result = <UserCard name={user.name} img={user.img} />; // making varible with component and props 


    expect(result).toMatchSnapshot(); // we expect that component to match out snapshot be the same
});