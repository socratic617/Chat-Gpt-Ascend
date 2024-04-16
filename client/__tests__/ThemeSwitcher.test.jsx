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