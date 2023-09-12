import { Outlet } from 'react-router-dom';
import Footer from '../Footer.jsx';
import Header from '../Header.jsx';

const Layout = () => {
  return (
    <>
      <div className='page-wrapper'>
        <h1 className='d-none'>Wolmart - Responsive Marketplace HTML Template</h1>

        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
