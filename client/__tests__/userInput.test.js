import {render, screen, fireEvent} from '@testing-library/react'
import UserInput from '../src/components/UserInput'
import { test, vi, expect } from 'vitest'

//TODO: Test to verify input recieve text
//TODO: Test that button will trigger submit
//TODO: Test render of components

test('That Textarea updates on user input', async () => {
    const handleInputChange = vi.fn()
    render(
        <UserInput
            inputMessage=""
            handleInputChange={handleInputChange}

        ></>
    )

})

