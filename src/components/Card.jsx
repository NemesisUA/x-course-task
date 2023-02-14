import '../assets/Card.css'
import imgNotfound from '../assets/images/imageNotFound.png';

const Card = ({ book }) => {

    return (
        <div className="card">
            <div className="book-img-container">
                <img src={book.image || imgNotfound} alt="book illustration" />
            </div>

            <div className="book-wrap">
                <h2 className="book-title">{book.title}</h2>
                <h3 className="book-author">{book.author}</h3>
                <div className="price-block">
                    <p className="price">Price <span>${book.price}</span></p>
                    <button className="viev-btn">View</button>
                </div>
            </div>
        </div>
    )
}

export { Card }