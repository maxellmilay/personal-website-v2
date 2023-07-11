import About from '@/components/About';
import Experience from '@/components/Experience';
import Featured from '@/components/Featured';
import Footer from '@/components/Footer';
import Landing from '@/components/Landing';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center">
        <Landing />
        <About />
        <Experience />
        <Featured />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}


