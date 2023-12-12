
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import { Provider } from "react-redux"
import ReduxStore from "./store";
import AdminHome from "./pages/admin/AdminHome";
import PageNotFound from "./pages/404";
import AdminProductPage from './pages/admin/AdminProductPage';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import AdminOrderPage from './pages/admin/AdminOrderPage';
import AdminAddProductPage from './pages/admin/AdminAddProductPage';
import AdminUserManagmentPage from './pages/admin/AdminUserManagmentPage';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import CartPage from "./pages/CartPage"
import CheckoutPage from "./pages/CheckoutPage"
import ProductDetailsPage from "./pages/ProductDetailsPage"
import OrderConfirmPage from "./pages/OrderConfirmPage"
import AllProductListPage from './pages/AllProductListPage';
import AdminCategoryPage from './pages/admin/AdminCategoryPage';
import CategoryFilterComp from './components/CategoryFilterComp';
import ProtectedRoute from './routes/ProtectedRoute';
import AdminUpdateProductPage from './pages/admin/AdminUpdateProductPage';

function App() {
  return (
    <div className="App">
       <Provider store={ReduxStore}>
       <Router>
  <Routes>
    <Route path="/" element={<Home />} >
      <Route index element={<AllProductListPage />} />
      <Route path="cart" element={<CartPage />} />  
      <Route path="checkout" element={<CheckoutPage />} />  
      <Route path="product/category/:id" element={<CategoryFilterComp />} />  
      <Route path="product/:id" element={<ProductDetailsPage />} />
      <Route path="orderconfirm" element={<OrderConfirmPage />} />  
    </Route>

    <Route path="admin/login" element={<AdminLoginPage />} />

    <Route path="admin" element={< ProtectedRoute Component={AdminHome} />}>
      <Route index element={<AdminDashboardPage />} />
      <Route path="product" element={<AdminProductPage />} />
      <Route path="order" element={<AdminOrderPage />} />
      <Route path="category" element={<AdminCategoryPage />} />
      <Route path="add/product" element={<AdminAddProductPage />} />
      <Route path="update/product/:id" element={<AdminUpdateProductPage />} />
      <Route path="usermanagment" element={<AdminUserManagmentPage />} />
    </Route>

    <Route path="*" element={<PageNotFound />} />
  </Routes>
</Router>
    </Provider>
    </div>
  );
}

export default App;
