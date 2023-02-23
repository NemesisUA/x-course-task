import { Routes, Route } from 'react-router-dom';

import { BookListPage } from './pages/BookListPage'
import { SpecificBookPage } from './pages/SpecificBookPage';
import { CartPage } from './pages/CartPage';
import { Notfoundpage } from './pages/Notfoundpage';
import { SigninPage } from './pages/SigninPage';

import { Layout } from './components/Layout';

import { RequireAuth } from './hoc/RequireAuth';
import { AuthProvider } from './hoc/AuthProvider';
import { BooksListProvider } from './hoc/BooksListProvider';
import { CartProvider } from './hoc/CartProvider';
import { EmptyCartPage } from './pages/EmptyCartPage';

function App() {
  return (
    <AuthProvider>
      <BooksListProvider>
        <CartProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={
              <RequireAuth>
                <BookListPage />
              </RequireAuth>} />
            <Route path='books/:id' element={
              <RequireAuth>
                <SpecificBookPage />
              </RequireAuth>
            } />
            <Route path='cart' element={
              <RequireAuth>
                <CartPage />
              </RequireAuth>
            } />
            <Route path='emptyCart' element={<EmptyCartPage />} />
            <Route path='signin' element={<SigninPage />} />
            <Route path='*' element={<Notfoundpage />} />
          </Route>
        </Routes>
        </CartProvider>
      </BooksListProvider>
    </AuthProvider>
  );
}

export default App;
