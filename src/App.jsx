import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Download from './components/Download/Download';
import Faq from './components/Faq/Faq';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Download />
        <Faq />
        <Newsletter />
      </main>
      <Footer />
      <Modal/>
    </>
  );
}
