import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-full'>
      <Header />
      <main className='p-8 flex-1 flex flex-col md:min-h-[calc(100vh-96px)]'>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
