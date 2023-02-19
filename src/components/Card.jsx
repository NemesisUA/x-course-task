import '../assets/Card.css'
import imgNotfound from '../assets/images/imageNotFound.png';
import { formatBookTitle, formatAuthorsList } from '../utils/formatters'

const Card = ({ book }) => {
    const formattedBookTitle = formatBookTitle(book.title);
    const formattedAuthorsList = formatAuthorsList(book.author);

    return (
        <div className="card">
            <div className="book-img-container">
                <img src={book.image || imgNotfound} alt="book illustration" />
            </div>

            <div className="book-wrap">
                <h2 className="book-title tooltip">{formattedBookTitle}
                    <span className="tooltiptext">{book.title}</span>
                </h2>                
                <h3 className="book-author">{formattedAuthorsList}</h3>
                <div className="price-block">
                    <p className="price">Price <span>${book.price}</span></p>
                    <button className="viev-btn">View</button>
                </div>
            </div>
        </div>
    )
}

export { Card }