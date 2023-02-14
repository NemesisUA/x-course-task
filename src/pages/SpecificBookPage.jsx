import { useParams } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { BooksListContext } from "../hoc/BooksListProvider";

const SpecificBookPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const book = useContext(BooksListContext)[id];

    const goBack = () => navigate('/');

    return (
        <div>
            <button onClick={goBack}>go back</button>
            { book && (
                <>
                    <h2>{book.title}</h2>
                    <p>{book.shortDescription}</p>
                </>
            )}
        </div>        
    )
}

export { SpecificBookPage }