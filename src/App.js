import './App.css';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from './components/Header/Header';
import { Provider } from 'react-redux';
import { store } from './components/redux/store';

const Signin = lazy(() => import('./pages/Signin'));
const Signup = lazy(() => import('./pages/Signup'));
const Guest = lazy(() => import('./pages/Guest'));
// const ProductPage = lazy(() => import('./pages/ProductPage'));
const ProductDetail = lazy(() => import('./components/Product/ProductDetail'));
const ViewCart = lazy(() => import('./components/Cart/ViewCart'));
const CheckoutProduct = lazy(() => import('./components/Checkout/CheckoutProduct'));
const Success = lazy(() => import('./components/stripe_pay/Success'));
const Cancel = lazy(() => import('./components/stripe_pay/Cancel'));
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>
  );
}

function Main() {
  const location = useLocation();

  const shouldShowHeader = location.pathname !== '/login' && location.pathname !== '/signin';

  return (
    <>
      {shouldShowHeader && <Header />}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/login' element={<Signin />} />
          <Route path='/signin' element={<Signup />} />
          <Route path='/' element={<Guest />} />
          {/* <Route path='/Product' element={<ProductPage />} /> */}
          <Route path='/ProductDetail/:id' element={<ProductDetail />} />
          <Route path='/cart' element={<ViewCart />} />
          <Route path='/checkout' element={<CheckoutProduct />} />
          <Route path='/success' element={<Success/>} />
          <Route path='/cancel' element={<Cancel/>} />
          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
