import { Routes, Route} from 'react-router-dom';

import { BookListPage } from './pages/BookListPage'
import { SpecificBookPage } from './pages/SpecificBookPage';
import { CartPage } from './pages/CartPage';
import { Notfoundpage } from './pages/Notfoundpage';
import { SigninPage } from './pages/SigninPage';

import { Layout } from './components/Layout';

import { RequireAuth } from './hoc/RequireAuth';
import { AuthProvider } from './hoc/AuthProvider';
import { BooksListProvider } from './hoc/BooksListProvider';

function App() {
  return (    
    <AuthProvider>
      <BooksListProvider>
      <Routes>
        <Route path='/' element={<Layout />}>          
          <Route index element={<BookListPage />} />
          <Route path=':id' element={
            <RequireAuth>
              <SpecificBookPage />
            </RequireAuth>
          } />          
          <Route path='signin' element={<SigninPage />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='*' element={<Notfoundpage />} />
        </Route>
      </Routes>
      </BooksListProvider>
    </AuthProvider>
  );
}

export default App;
