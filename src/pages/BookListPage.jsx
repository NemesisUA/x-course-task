import '../assets/BookListPage.css';
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { BooksListContext } from "../hoc/BooksListProvider";
import { Card } from '../components/Card';

export function BookListPage() {    
    const books = useContext(BooksListContext)   
    
    return (
        <>
            <section className="search-block">
                <div className="wrapper">
                    <form name="search" action="#">
                        <label htmlFor="book-name" className="search-label">
                            <input id="book-name" className="book-name" type="text" placeholder="Search by book name" />
                        </label>
                        <select id="book-price" className="book-price">
                            <option defaultValue disabled>Price</option>
                            <option value="all">All</option>
                            <option value="15">0 &lt;  price &lt;15</option>
                            <option value="30">15 &lt; price &lt;30</option>
                            <option value="30+">30 &lt; price</option>
                        </select>
                    </form>
                </div>
            </section>

            <section className="books">
                <div className="wrapper">
                    <div className="books-container" id="books-container">
                        {books && books.length > 0 && books.map(book => (
                            <Link key={book.id} to={`/${book.id}`} >
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