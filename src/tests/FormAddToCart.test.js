import { render, screen, fireEvent } from '@testing-library/react';
import  { FormAddToCart } from '../components/FormAddToCart';

const book = {
    "id": 1,
    "author": "David Flanagan",
    "price": 10.99,    
}

describe('FormAddToCart', ()=> {

  describe('check out rendering of elements', () => {

    test('expect form to be rendered', () => {
      render(<FormAddToCart id={1} book={book} price={10.99} />);
      const formElement = screen.getByTestId('formAddToCart');
      expect(formElement).toBeInTheDocument();
    });
    
    test('expect button "Add to cart" to be rendered', () => {
      render(<FormAddToCart id={1} book={book} price={10.99} />);
      const buttonElement = screen.getByText(/add to cart/i);
      expect(buttonElement).toBeInTheDocument();
    });
  
    test('expect increment element to be rendered', () => {
      render(<FormAddToCart id={1} book={book} price={10.99} />);
      const encreaseElement = screen.getByTestId('spinEncrease');
      expect(encreaseElement).toBeInTheDocument();
    })
  
    test('expect Count element to be rendered', () => {
      render(<FormAddToCart id={1} book={book} price={10.99} />);
      const countElement = screen.getByTestId('amount');
      expect(countElement.value).toBe('1');
    })
  })

  
  describe('check out functionality', () => {

    test('expect count to encrease if encrease element is clicked', () => {
      render(<FormAddToCart id={1} book={book} price={10.99} />);
  
      const countElement = screen.getByTestId('amount');
      const encreaseElement = screen.getByTestId('spinEncrease');
  
      fireEvent.click(encreaseElement);
      expect(countElement.value).toBe('2');
    })
  
    test('expect count to decrease if decrease element is clicked', () => {
      render(<FormAddToCart id={1} book={book} price={10.99} />);
  
      const countElement = screen.getByTestId('amount');
      const encreaseElement = screen.getByTestId('spinEncrease');
      const decreaseElement = screen.getByTestId('spinDecrease');
  
      fireEvent.click(encreaseElement);
      fireEvent.click(encreaseElement);
      fireEvent.click(decreaseElement);
      expect(countElement.value).toBe('2');
    })
  
    test('expect total price to change if count is changed', () => {
      render(<FormAddToCart id={1} book={book} price={10.99} />);
  
      const countElement = screen.getByTestId('amount');
      const encreaseElement = screen.getByTestId('spinEncrease');
      const totalPriceElement = screen.getByTestId('total-price');
      
      fireEvent.change( countElement, { target: { value : 3}});    
      expect(totalPriceElement.textContent).toBe('32.97')    
    })
  })
})
