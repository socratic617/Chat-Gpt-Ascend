import { describe, test, vi, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../src/App'
import useDarkMode from "use-dark-mode";

import ThemeSwitcher from '../src/components/ThemeSwitcher'
import * as hooks from '../src/App'

vi.mock("useDarkMode", () => ({
    __esModule: true,
    default: vi.fn(() => ({
        value: false,
        enable: vi.fn(),
        diable: vi.fn(),
        toggle: vi.fn()
    }))
}))

it('darkMode hook', () => {
    vi.mocked(useDarkMode).mockImplementation()
})


describe("testing theme switcher component", () => {
    test("render toggle for theme", () => {
        //clear scroll type error
        window.HTMLElement.prototype.scrollIntoView = () => { }
        // console.log(darkMode)
        // vi.mocked(useDarkMode).mockImplementation()
        render(<App />)
        render(<ThemeSwitcher />);

        const lightBtn = screen.getByRole('button', {
            name: /sunlight/i
        });

        const darkBtn = screen.getByRole('button', {
            name: /moonlight/i
        });

        expect(lightBtn).toBeInTheDocument();
        expect(darkBtn).toBeInTheDocument();
    })
})