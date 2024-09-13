import { render, screen } from '@testing-library/react';
import Button from './Button';
import { test, expect, describe } from 'vitest';

describe('BUTTON', ()=>{
    
    test('render vite + react text', () => { 
        render(<Button>Click me!</Button>);
        const textElement = screen.getByText(/click me!/i);
        expect(textElement).toBeInTheDocument();
    });
    
    test('button exists', () => { 
        render(<Button>Click me!</Button>);
        const textElement = screen.getByText(/click me!/i);
        expect(textElement).toBeTruthy();
    });
})

