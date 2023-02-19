import { useState } from "react";

const BooksFilter = ({ setSearchParams, bookQuery}) => {
    const [search, setSearch] = useState(bookQuery);    
    const [selectedOption, setSelectedOption] = useState(0);

    const handleSearch = (e) => {
        e.preventDefault();
        const form = e.target;
        const bookQuery = form.search.value;
        const priceQuery = form.select.value;

        const params = {};

        if ( bookQuery.length ) {
            params.book = bookQuery;
        }
        if ( selectedOption ) {
             params.price = priceQuery;
        }

        setSearchParams({ book: bookQuery, price: priceQuery })
    }

    const handleClear = (e) => {
        setSearchParams({});
        setSearch('');
        setSelectedOption(0);
        setTimeout(() => e.target.checked = false, 300)       
    }

    return (
        <section className="search-block">
                <div className="wrapper">
                    <form name="search" onSubmit={handleSearch}>
                        <div>
                            <label htmlFor="book-name" className="search-label">
                                <input value={ search } onChange={ (e) => setSearch(e.target.value) }
                                    type="search" 
                                    id="book-name" name="search" className="book-name" 
                                    placeholder="Search by book name" />
                            </label>

                            <select value={ selectedOption } onChange= { (e) => setSelectedOption(e.target.value) }
                                name="select" id="book-price" className="book-price">

                                <option key='0' defaultValue="" disabled>Price</option>
                                <option key='1' value="0">All</option>
                                <option key='2' value="0-15">0 &lt;  price &lt; 15</option>
                                <option key='3' value="15-30">15 &lt; price &lt; 30</option>
                                <option key='4' value="30">price &gt; 30</option>
                            </select>
                        </div>
                        
                        <div className="clear-wrapper">
                            <button type='submit'>Search</button>

                            <label className="clear"> clear all filters
                                <input type="checkbox" onClick={handleClear}></input>
                            </label>
                        </div>                
                    </form>                   
                </div>
            </section>
    )
}

export { BooksFilter }