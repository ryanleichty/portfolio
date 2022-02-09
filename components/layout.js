import Header from './header';
import Footer from './footer';
import MaxWidthWrapper from './maxWidthWrapper';

function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-full'>
      <Header />
      <main className='flex-1 flex flex-col'>
        <MaxWidthWrapper>{children}</MaxWidthWrapper>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
