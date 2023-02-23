import { useBooks} from '../hook/useBooks';
import '../assets/CartPage.css'

const CartItem = ({id, amount, totalPrice}) => {
    const bookItem = useBooks()[id];
    console.log('bookI', bookItem);

    return (
        <p className='cart-items'>
            <span>{bookItem.title}</span>
            <span>{amount}</span>
            <span>{`$${totalPrice}`}</span>
        </p>
    )
}

export { CartItem }