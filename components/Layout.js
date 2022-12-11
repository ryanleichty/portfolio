import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className='flex min-h-full flex-col'>
      <Header />
      <main className='flex flex-1 flex-col px-8'>{children}</main>
      <Footer />
    </div>
  );
}
