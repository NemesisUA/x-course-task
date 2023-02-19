import '../assets/BookListPage.css';
import { useContext} from "react";
import { Link, useSearchParams } from "react-router-dom";
import { BooksListContext } from "../hoc/BooksListProvider";
import { Card } from '../components/Card';
import { BooksFilter } from '../components/BooksFilter';

export function BookListPage() {    
    const books = useContext(BooksListContext);

    const [searchParams, setSearchParams] = useSearchParams('');

    const bookQuery = searchParams.get('book') || '';
    const priceQuery = searchParams.get('price') || ''; 
     
    return (
        <>
            <BooksFilter bookQuery={bookQuery} setSearchParams={setSearchParams} />

            <section className="books">
                <div className="wrapper">
                    <div className="books-container" id="books-container">
                        {
                            books && books.length > 0 && books
                            .filter(
                                book => book.title.toLowerCase().includes(bookQuery.toLowerCase())
                            ).filter(
                                book => book.price > priceQuery.split('-')[0] && book.price < (priceQuery.split('-')[1] || 1000)
                            ).map(book => (
                                <Link key={book.id} to={`books/${book.id}`} >
                                    <Card book={book}></Card>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}