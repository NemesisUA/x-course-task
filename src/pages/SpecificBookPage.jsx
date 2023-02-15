import { Link, useParams } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { BooksListContext } from "../hoc/BooksListProvider";

const SpecificBookPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    console.log('id',id);

    const book = useContext(BooksListContext)[id - 1] || null; 
    
    useEffect(()=>{
        if ( !Number.isInteger(+id) ) {
          return  navigate('*', {replace: true});
        }        
    }, [id, navigate]); 

    return (
        <>            
            { book && (
                <>
                    <h2>{book.title}</h2>
                    <p>{book.shortDescription}</p>
                    <Link to="/"><button>go home</button></Link>
                </>
            )}
            { !book && (
                <>
                    <h3>Oops, there is no such a book.</h3>
                    <Link to="/"><button>go home</button></Link>
                </>
            )

            }
        </>        
    )
}

export { SpecificBookPage }