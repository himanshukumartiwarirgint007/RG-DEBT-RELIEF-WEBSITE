import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4 py-6">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
