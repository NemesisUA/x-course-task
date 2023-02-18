import '../assets/BookListPage.css';
import { useContext} from "react";
import { Link, useSearchParams } from "react-router-dom";
import { BooksListContext } from "../hoc/BooksListProvider";
import { Card } from '../components/Card';

export function BookListPage() {    
    const books = useContext(BooksListContext);

    const [searchParams, setSearchParams] = useSearchParams('');

    const bookQuery = searchParams.get('book') || '';

    const handleSearch = (e) => {
        e.preventDefault();
        const form = e.target;
        const query = form.search.value;

        setSearchParams({ book: query })
    }
     
    return (
        <>
            <section className="search-block">
                <div className="wrapper">
                    <form name="search" onSubmit={handleSearch}>
                        <label htmlFor="book-name" className="search-label">
                            <input name="search" id="book-name" className="book-name" type="search" placeholder="Search by book name" />
                        </label>
                        <select name="select" id="book-price" className="book-price">
                            <option defaultValue="" disabled>Price</option>
                            <option value="0">All</option>
                            <option value="15">0 &lt;  price &lt;15</option>
                            <option value="30">15 &lt; price &lt;30</option>
                            <option value="30+">30 &lt; price</option>
                        </select>
                        <button type='submit'>Search</button>
                    </form>
                </div>
            </section>

            <section className="books">
                <div className="wrapper">
                    <div className="books-container" id="books-container">
                        {
                            books && books.length > 0 && books.filter(
                                book => book.title.toLowerCase().includes(bookQuery.toLowerCase())
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