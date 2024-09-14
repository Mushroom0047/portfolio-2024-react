import Header from '../../Components/Header/Header';
import Banner from '../../Components/Banner/Banner';
import About from '../../Components/About/About';
import Skills from '../../Components/Skills/Skills';
import Experience from '../../Components/Experience/Experience';
import Education from '../../Components/Education/Education';
import Portfolio from '../../Components/Portfolio/Portfolio';
import Contact from '../../Components/Contact/Contact';
import Footer from '../../Components/Footer/Footer';
import Knowledge from '../../Components/Knowledge/Knowledge';
import ScrollTop from '../../Components/ScrollTop/ScrollTop';

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Skills />
      <Knowledge />
      <Experience />
      <Education />
      <Portfolio />
      <Contact />
      <Footer />
      <ScrollTop />
    </>
  )
}

export default Home