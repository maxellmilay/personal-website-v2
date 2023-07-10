import About from '@/components/About';
import Experience from '@/components/Experience';
import Featured from '@/components/Featured';
import Footer from '@/components/Footer';
import Landing from '@/components/Landing';
import Projects from '@/components/Projects';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Maxell Milay</title>
      </Head>
      <Landing />
      <About />
      <Experience />
      <Featured />
      <Projects />
      <Footer />
    </div>
  );
}

