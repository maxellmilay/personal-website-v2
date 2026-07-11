import 'react';
import About from '@/components/About';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Featured from '@/components/Featured';
import Footer from '@/components/Footer';
import Landing from '@/components/Landing';
import Skills from '@/components/MachineLearning';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center">
        <Landing />
        <About />
        <Skills />
        <Experience />
        <Featured />
        <Projects />
        <Education />
        <Footer />
      </div>
    </div>
  );
}


