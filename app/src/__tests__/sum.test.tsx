import { render, screen } from '@testing-library/react';
import App from '../App.tsx';
import { test, expect } from 'vitest';

test('render vite + react text', () => { 
    render(<App />);
    const linkElement = screen.getByText('Vite + React');
    expect(linkElement).toBeInTheDocument();
});

