import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Hero from './sections/Hero/Hero'
import About from './sections/About/About'
import Stack from './sections/Stack/Stack'
import Projects from './sections/Projects/Projects'
import Contact from './sections/Contact/Contact'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Stack />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
