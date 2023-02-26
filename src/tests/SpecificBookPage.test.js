import { render, screen } from '@testing-library/react';
import  { SpecificBookPage } from '../pages/SpecificBookPage';
import { BrowserRouter } from 'react-router-dom';

const MockSpecificBookPage = () => {
    return (
        <BrowserRouter>
            <SpecificBookPage />
        </BrowserRouter>
    )
}

describe("SpecificBookPage", () => {

    test('renders button "go home"', () => {
        render(<MockSpecificBookPage />);
        const buttonElement = screen.getByText(/go home/i);
        expect(buttonElement).toBeInTheDocument();
      });
})
