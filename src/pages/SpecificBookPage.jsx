import '../assets/SpecificBookPage.css';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BooksListContext } from "../hoc/BooksListProvider";
import { BookCard } from '../components/BookCard'
import { FormAddToCart } from '../components/FormAddToCart';

const SpecificBookPage = () => {    
    const { id } = useParams();   
    const book = useContext(BooksListContext)[id - 1] || null;
    const price = book ? book?.price : 0;

    return (
        <>
            {!book && (
                <>
                    <h3>Oops, there is no such a book.</h3>
                    <Link to="/"><button>go home</button></Link>
                </>
            )}
            {book && (
                <section className="book">
                    <div className="wrapper">
                        <div className="book-wrapper">
                            <BookCard book={book} />
                            <FormAddToCart id={id} book={book} price={price} />
                        </div>
                        <span className="bold">Book description:</span>
                        <p>{book.description}</p>
                    </div>
                </section>
            )}
        </>
    )
}

export { SpecificBookPage }