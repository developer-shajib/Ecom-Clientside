import Shop from '../pages/shop/Shop.jsx';
import Cart from '../pages/cart/Cart.jsx';
import Checkout from '../pages/checkout/Checkout.jsx';
import Home from '../pages/home/Home.jsx';
import ShopSingle from '../pages/single/ShopSingle.jsx';

// Create Router
const publicRouter = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/shop',
    element: <Shop />
  },
  {
    path: '/shop/:id',
    element: <ShopSingle />
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: '/checkout',
    element: <Checkout />
  }
];

export default publicRouter;
