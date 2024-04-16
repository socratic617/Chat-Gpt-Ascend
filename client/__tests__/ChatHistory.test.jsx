import { test, vi, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ChatHistoryContainer } from '../src/components/ChatHistoryContainer';

const useDarkModeMock = (initialValue) => {
    let value = initialValue
    return {
        value: value,
        enable: vi.fn(() => (value = true)),
        disable: vi.fn(() => (value = false)),
    };
};

describe('ChatHistoryContainer', () => {
    beforeEach(() => {
        vi.spyOn(global.Math, 'random').mockReturnValue(0.8);
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('renders without crashing', () => {
        // Mock darkMode prop
        const darkMode = useDarkModeMock(false);
        render(<ChatHistoryContainer darkMode={darkMode} />);
        expect(screen.getByText('New Chat')).toBeInTheDocument();
    });

    it('renders messages for today', () => {
        // Mock darkMode prop
        const darkMode = useDarkModeMock(false);
        render(<ChatHistoryContainer darkMode={darkMode} />);
        expect(screen.getByText('Today')).toBeInTheDocument();
      
    });

    it('renders messages for yesterday', () => {
        // Mock darkMode prop
        const darkMode = useDarkModeMock(false);
        render(<ChatHistoryContainer darkMode={darkMode} />);
        expect(screen.getByText('Yesterday')).toBeInTheDocument();
    
    });

    it('renders messages for the past 7 days', () => {
        // Mock darkMode prop
        const darkMode = useDarkModeMock(false);
        render(<ChatHistoryContainer darkMode={darkMode} />);
        expect(screen.getByText('Past 7 Days')).toBeInTheDocument();
   
    });

    it('renders messages for the past 30 days', () => {
        // Mock darkMode prop
        const darkMode = useDarkModeMock(false);
        render(<ChatHistoryContainer darkMode={darkMode} />);
        expect(screen.getByText('Past 30 Days')).toBeInTheDocument();
       
    });

    it('renders messages for the past 90 days', () => {
        // Mock darkMode prop
        const darkMode = useDarkModeMock(false);
        render(<ChatHistoryContainer darkMode={darkMode} />);
        expect(screen.getByText('Past 90 Days')).toBeInTheDocument();
      
    });

    it('renders user information', () => {
        // Mock darkMode prop
        const darkMode = useDarkModeMock(false);
        render(<ChatHistoryContainer darkMode={darkMode} />);
        // Assuming UserCard component renders the user information
        expect(screen.getByText('Welcome, RC Student!')).toBeInTheDocument();
    });
});
