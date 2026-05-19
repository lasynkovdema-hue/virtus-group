import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Calculator from './components/Calculator'
import Portfolio from './components/Portfolio'
import Trust from './components/Trust'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import BeforeAfter from './components/BeforeAfter'
import HowWeWork from './components/HowWeWork'
import FloatingContacts from './components/FloatingContacts'

function App() {
  return (
    <div className="bg-navy font-inter min-h-screen">
      <Header />
      <Hero />
      <Services />
      <HowWeWork />
      <Calculator />
      <BeforeAfter />
      <Portfolio />
      <Trust />
      <ContactForm />
      <Footer />
      <FloatingContacts />
    </div>
  )
}

export default App
