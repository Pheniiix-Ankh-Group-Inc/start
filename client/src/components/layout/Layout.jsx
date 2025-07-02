import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen antialiased">
      <main 
      role="main"
      aria-label="Main content"
      className="flex-1 px-4 sm:px-6 lg:px-8 py-8 w-full max-w-screen-xl mx-auto">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
