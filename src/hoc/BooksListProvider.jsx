import { createContext, useEffect, useState } from "react";

export const BooksListContext = createContext({});

export const BooksListProvider = ({children}) => {      
    const [data, setData] = useState([]);

       const getData= ()=>{
        fetch('./books.json')
          .then(response => response.json())
          .then(data => setData(data.books))
          .then(data => console.log('data', data))
          .catch(error => console.error(error.message));          
      }

    useEffect(() => {
        getData();        
    }, [])

    useEffect(() => {
        setData(books);
    }, [])

    return (
        <BooksListContext.Provider value={data}>
            {children}
        </BooksListContext.Provider>
    )
}
