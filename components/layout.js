import Header from './header';
import Footer from './footer';

function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-full'>
      <Header />
      <main className='flex-1'>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
