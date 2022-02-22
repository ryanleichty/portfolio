import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-full'>
      <Header />
      <main className='px-8 flex-1 flex flex-col'>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
