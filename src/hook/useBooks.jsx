import { useContext } from "react";
import { BooksListContext } from "../hoc/BooksListProvider";  

export const useBooks = () => {
    return useContext(BooksListContext);
}