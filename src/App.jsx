import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Certificates } from './components/Certificates'
import { Contact } from './components/Contact'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App