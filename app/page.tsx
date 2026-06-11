import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Creative from '@/components/sections/Creative';
import Certifications from '@/components/sections/Certifications';
import Leadership from '@/components/sections/Leadership';
import Contact from '@/components/sections/Contact';
import MessageForm from '@/components/sections/MessageForm';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Creative />
      <Certifications />
      <Leadership />
      <Contact />
      <MessageForm />
      <Footer />
    </>
  );
}
