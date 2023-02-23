import imgNotFound from '../assets/images/imageNotFound.png'

const BookCard = ({ book }) => {

    return (
        <div className="book__card">
            <div className="book__image">
                <img src={book.image || imgNotFound} alt="book" width="250" />
            </div>
            <div className="book__props">
                <span className="bold">Book name:</span>
                <p className="book__title">{book.title}</p>
                <span className="bold">Book author:</span>
                <p className="book__title">{book.author}</p>
                <span className="bold">Book level:</span>
                <p>Beginner</p>
                <span className="bold">Book tags:</span>
                <p>lorem, ipsum, lorem</p>
            </div>
        </div>
    )
}

export { BookCard }
